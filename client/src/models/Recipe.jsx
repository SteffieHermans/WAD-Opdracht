import {decorate, observable, action, computed} from "mobx";

class Recipe {
  constructor( id = null, title = "Geen Titel", description = "Geen Beschrijving", servings = 0, pricePerServing = 0, ingredients = [], steps = [], notes = "Geen Opmerkingen", source = "Geen Bron") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.servings = servings;
    this.pricePerServing = pricePerServing;
    this.ingredients = ingredients;
    this.steps = steps;
    this.notes = notes;
    this.source = source;
  }

  get total() {
    return this.servings * this.pricePerServing;
  }

  changeTitle = value => {
    this.title = value;
  }

  changeDescription = value => {
    this.description = value;
  }

  changeServings = value => {
    this.servings = value;
  }

  changePricePerServing = value => {
    this.pricePerServing = value;
  }

  changeIngredient = (index, value) => {
    this.ingredients[index] = value;
  }

  changeStep = (index, value) => {
    this.steps[index] = value;
  }

  changeNotes = value => {
    this.notes = value;
  }

  changeSource = value => {
    this.source = value;
  }

  addIngredient = () => {
    this.ingredients.push("");
  }

  addStep = () => {
    this.steps.push("");
  }
}

decorate(Recipe, {
  title: observable,
  description: observable,
  servings: observable,
  pricePerServing: observable,
  ingredients: observable,
  steps: observable,
  notes: observable,
  source: observable,
  total: computed,
  changeTitle: action,
  changeDescription: action,
  changeServings: action,
  changePricePerServing: action,
  changeIngredient: action,
  changeStep: action,
  changeNotes: action,
  changeSource: action,
  addIngredient: action,
  addStep: action
});

export default Recipe;