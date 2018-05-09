const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/steffie-hermans");

const RecipeSchema = mongoose.Schema({
    title: String,
    description: String,
    servings: String,
    ingredients: [String],
    steps: [String],
    notes: String,
    source: String
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = { Recipe };