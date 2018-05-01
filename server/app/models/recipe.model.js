const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        servings: Number,
        pricePerServing: Number,
        ingredients: Array,
        steps: Array,
        notes: String,
        source: String
    }
);

module.exports = mongoose.model("Recipe", RecipeSchema);