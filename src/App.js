import React, { Component } from 'react';
import Recipes from './Recipes.jsx';
import AddRecipe from './AddRecipe.jsx';
// import FormInput from './FormInput.jsx';
// import FormTextArea from './FormTextArea.jsx';
// import FormSelect from './FormSelect.jsx';
// import FormInputList from './FormInputList.jsx';
// import FormTextAreaList from './FormTextAreaList.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: {
        cClXn6f7: {
          title: "Chocolate Orange Shortbread",
          description: "A zesty chocolate shortbread that really gets your mouth watering. Perfect with a cup of tea.",
          servings: 12,
          ingredients: ["150 g unsalted butter , at room temperature", "200 g plain flour", "50 g golden caster sugar , plus extra to sprinkle", "1 orange", "50 g quality dark chocolate , (70%)"],
          steps: ["Preheat the oven to 190ºC/375ºF/gas 5. Grease a 20cm square baking tin and line with greaseproof paper. In a bowl, mix together the butter, flour, sugar and the finely grated zest of half the orange by rubbing the mixture between your thumbs and fingertips. Squash and pat into dough – don’t knead it – then push into the lined tin in a 1cm-thick layer. Prick all over with a fork, then bake for 20 minutes, or until lightly golden. Remove, sprinkle over a little extra sugar while it’s still warm, then leave to cool.", "Meanwhile, melt the chocolate in a heatproof bowl over a pan of gently simmering water, then remove. Cut the shortbread into 12 finger portions, then transfer to a wire cooling rack. Drizzle with the chocolate, then finely grate over the remaining orange zest. Cut up the orange, and serve on the side!"],
          notes: "Geen opmerkingen",
          source: "https://www.jamieoliver.com/recipes/chocolate-recipes/chocolate-orange-shortbread/"
        }
      }
    };
  }

  handleChangeInput = (channel, input) => {
    console.log([channel], input);
    this.setState({ [channel]: input });
  }

  generateRandomId = length => {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i = 0; i < length; i++){
      id += possible.charAt(Math.floor(Math.random()*possible.length));
    }

    return id;
  }

  handleAddRecipe = (recipe) => {
    console.log(recipe);
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    const id = this.generateRandomId(8);
    updatedRecipes[id] = recipe;
    this.setState({recipes: updatedRecipes});
  }

  handleDelete = id => {
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    delete updatedRecipes[id];
    this.setState({recipes: updatedRecipes});
  }

  handleEdit = (id, recipe) => {
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    updatedRecipes[id] = recipe;
    this.setState({recipes: updatedRecipes});
  }

  render() {
    const {recipes} = this.state;
    return (
      <div className="main-container">
        <h1>Mijn Receptenboek</h1>
        <Recipes recipes={recipes} onDelete={id => this.handleDelete(id)} onEdit={(id, recipe) => this.handleEdit(id, recipe)}/>
        <AddRecipe onAdd={recipe => this.handleAddRecipe(recipe)} />
      </div>
    );
  }
}

export default App;
