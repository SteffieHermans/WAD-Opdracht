module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
    app.post("/recipes/add", recipes.create);
    app.get("/recipes", recipes.findAll);
    app.get("/recipes/:recipeId", recipes.findOne);
    app.put("/recipes/edit/:recipeId", recipes.update);
    app.delete("/recipes/:recipeId", recipes.delete);

}