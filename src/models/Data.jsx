import {decorate, observable, action} from "mobx";

class Data {
  constructor() {
    this.title = "Geen Titel";
    this.description = "Geen Beschrijving";
    this.servings = 0;
    this.pricePerServing = 0;
    this.ingredients = [""];
    this.steps = [""];
    this.notes = "Geen Opmerkingen";
    this.source = "Geen Bron";
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
    this.servings = value;
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

decorate(Data, {
  title: observable,
  description: observable,
  servings: observable,
  pricePerServing: observable,
  ingredients: observable,
  steps: observable,
  notes: observable,
  source: observable,
  changeTitle: action,
  changeDescription: action,
  changeServings: action,
  changePricePerServing: action,
  changeIngredient: action,
  changeStep: action,
  changeNotes: action,
  changeSource: action,
  addIngredient: action,
  addStep: action,
});

export default Data;