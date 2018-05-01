import Recipe from "../models/Recipe";
import Data from "../models/Data";
import { decorate, observable, action, configure } from "mobx";
import Api from "../api/recipes.js";

configure({ enforceActions: true });

class Store {
    recipes = [];
    data = {};
    returnId = ``;

    constructor() {
        this.api = new Api();
        this.api.getAll().then(recipes => this._add(...recipes));
        this.resetData();
    }

    _add = (...recipes) => {
        let id;
        recipes.forEach(recipe => {
            const { _id, title, description, servings, pricePerServing, ingredients, steps, notes, source } = recipe;
            this.recipes.push(new Recipe(_id, title, description, servings, pricePerServing, ingredients, steps, notes, source));
            id = _id;
        });
        this.returnId = id;
    };
    
    add = recipe => {
        this.api.create(recipe).then(recipe => this._add(recipe)).then(id => {return id});
    };

    update = recipe => {
        console.log(recipe);
        this.api.update(recipe).then(recipe => this._update(recipe));
    };
    
    _update = recipe => {
        console.log(recipe);
        const index = this.recipes.findIndex(check => check.id === recipe.id);
        this.recipes[index] = recipe;
    };

    remove = recipe => {
        if(this.api.remove(recipe).then(() => this._remove(recipe))){
            return true;
        };
      };
    
    _remove = recipe => {
        this.recipes.remove(recipe);
    };

    findRecipe = (recipeId) => {
        return this.recipes.find(recipe => {
            return recipe.id === recipeId;
        });
    }

    resetData = () => {
        this.data = new Data();
    }

    deleteRecipe = recipe => {
        this.recipes.remove(recipe);
        return true;
    }
}

decorate(Store, {
    recipes: observable,
    data: observable,
    returnId: observable,
    _add: action,
    add: action,
    update: action,
    _update: action,
    remove: action,
    _remove: action,
    resetData: action,
    deleteRecipe: action
})

const store = new Store();
export default store;