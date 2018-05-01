const Recipe = require("../models/recipe.model.js");

exports.create = (req, res) => {
    if (!req.body.title) {
      return res.status(400).send({
        message: "Recipe content can not be empty"
      });
    }
  
    const recipe = new Recipe({
        title: req.body.title,
        description: req.body.description || "Geen omschrijving",
        servings: req.body.servings || 0,
        pricePerServing: req.body.pricePerServing || 0,
        ingredients: req.body.ingredients || [],
        steps: req.body.steps || [],
        notes: req.body.notes || "Geen opmerkingen",
        source: req.body.source || "Geen bron"
    });
  
    recipe
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error"
        });
      });
  };
  
  exports.findAll = (req, res) => {
    Recipe.find()
      .then(recipes => {
        res.send(recipes);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error"
        });
      });
  };
  
  exports.findOne = (req, res) => {
    Recipe.findById(req.params.recipeId)
      .then(recipe => {
        if (!recipe) {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        res.send(recipe);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        return res.status(500).send({
          message: "Error retrieving recipe with id " + req.params.recipeId
        });
      });
  };
  
  exports.update = (req, res) => {
    if (!req.body.title) {
      return res.status(400).send({
        message: "Recipe title cannot be empty"
      });
    }
  
    Recipe.findByIdAndUpdate(
      req.params.recipeId,
      {
        title: req.body.title,
        description: req.body.description || "Geen omschrijving",
        servings: req.body.servings || 0,
        pricePerServing: req.body.pricePerServing || 0,
        ingredients: req.body.ingredients || [],
        steps: req.body.steps || [],
        notes: req.body.notes || "Geen opmerkingen",
        source: req.body.source || "Geen bron"
      },
      { new: true } //om de geupdate versie terug te krijgen en niet het orgineel
    )
      .then(recipe => {
        if (!recipe) {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        res.send(recipe);
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        return res.status(500).send({
          message: "Error updating recipe with id " + req.params.recipeId
        });
      });
  };
  
  exports.delete = (req, res) => {
    Recipe.findByIdAndRemove(req.params.recipeId)
      .then(recipe => {
        if (!recipe) {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        res.send({ message: "Recipe deleted successfully!" });
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Recipe not found with id " + req.params.recipeId
          });
        }
        return res.status(500).send({
          message: "Could not delete recipe with id " + req.params.recipeId
        });
      });
  };