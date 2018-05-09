const { Recipe } = require("./connectors");

module.exports = {
  Query: {
    allRecipes() {
      return Recipe.find();
    },
    recipe(_, args) {
      return Recipe.findById(args._id);
    }
  },
  Mutation: {
    addRecipe(_, args) {
      return new Recipe(args).save();
    },
    updateRecipe(_, args) {
      const { _id } = args;
      return Recipe.findOneAndUpdate({ _id }, args, { new: true });
    },
    deleteRecipe(_, args) {
      const { _id } = args;
      return Recipe.findByIdAndRemove({ _id });
    },
  }
};