const { Recipe, User } = require("./connectors");
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/");

const validateValue = value => {
  if (isNaN(Date.parse(value)))
    throw new GraphQLError(`Query error: not a valid date`, [value]);
};

function getAuthenticatedUser(context) {
  return context.user.then(user => {
    if (!user) {
      return Promise.reject("Unauthorized");
    }
    return user;
  });
}

module.exports = {
  Query: {
    allRecipes() {
      return Recipe.find();
    },
    allUsers() {
      return User.find();
    },
    recipe(_, args) {
      return Recipe.findById(args._id);
    }
  },
  Mutation: {
    addRecipe(_, args, context) {
      return getAuthenticatedUser(context).then(user => {
        args.user = user.id;
        return new Recipe(args).save();
      });
    },
    updateRecipe(_, args, context) {
      const { _id } = args;
      return Recipe.findOneAndUpdate({ _id }, args, { new: true });
    },
    deleteRecipe(_, args) {
      const { _id } = args;
      return Recipe.findByIdAndRemove({ _id });
    },
    login(_, { email, password }, context) {
      console.log("login");
      return User.findOne({ email }).then(user => {
        if (!user || !user.validPassword(password)) {
          return Promise.reject("Invalid username/password");
        } else {
          console.log("login ok");
          const token = jwt.sign(
            {
              id: user._id,
              name: user.name
            },
            jwtsecret
          );
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        }
      });
    },
    register(_, { email, password, name }, context) {
      console.log("register", email, password, name);
      return User.findOne({ email }).then(user => {
        if (!user) {
          return User.create({ email, password, name })
            .then(user => {
              context.user = Promise.resolve(user);
              return user;
            })
            .catch(err => {
              return Promise.reject("Registration errors" + err.message);
            });
        }
        return Promise.reject("Already exists");
      });
    },
  },
  User: {
    recipes: user => {
      return Recipe.find({ user: user._id });
    }
  },
};