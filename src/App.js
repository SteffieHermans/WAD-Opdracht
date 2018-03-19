import React, { Component } from 'react';
import AddRecipe from './AddRecipe.jsx';
import NotFound from './NotFound.jsx';
import Overview from './Overview.jsx';
import Recept from './Recept.jsx';
import EditForm from './EditForm.jsx';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';

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
      },
      addRecipe: {
        ingredients: [""],
        steps: [""]
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

  handleAddRecipe = (recipe, callback) => {
    console.log(recipe);
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    const id = this.generateRandomId(8);
    updatedRecipes[id] = recipe;

    const addRecipe = {...this.state.addRecipe};
    addRecipe.ingredients = [""];
    addRecipe.steps = [""];
    this.setState({recipes: updatedRecipes, addRecipe }, () => callback(id));
  }

  addIngredient = () => {
    const addRecipe = {...this.state.addRecipe};
    addRecipe.ingredients.push("");
    console.log(addRecipe);
    this.setState({addRecipe});
  }

  addStep = () => {
    const addRecipe = {...this.state.addRecipe};
    addRecipe.steps.push("");
    console.log(addRecipe);
    this.setState({addRecipe});
  }

  addIngredientToExistingRecipe = id => {
    const recipes = {...this.state.recipes};
    recipes[id].ingredients.push("");
    this.setState({recipes});
  }

  addStepToExistingRecipe = id => {
    const recipes = {...this.state.recipes};
    recipes[id].steps.push("");
    this.setState({recipes});
  }

  handleDelete = (id) => {
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    delete updatedRecipes[id];
    this.setState({recipes: updatedRecipes});
  }

  handleEdit = (id, recipe, callback) => {
    const {recipes} = this.state;
    const updatedRecipes = {...recipes};
    updatedRecipes[id] = recipe;
    this.setState({recipes: updatedRecipes}, () => callback(id));
  }

  render() {
    const {recipes, addRecipe} = this.state;
    return (
      <main>
        <h1><Link to='/'>Mijn Receptenboek</Link></h1>
        <Switch>
          <Route path='/' exact render={() => (
            <Overview recipes={recipes} />
          )}/>
          <Route path='/recipe/edit/:id' render={({match})=>{
            const id = match.params.id;
            if(recipes[id]){
              const {title, description, servings, ingredients, steps, notes, source} = recipes[id];
              return <EditForm id={id} title={title} description={description} servings={servings} ingredients={ingredients} steps={steps} notes={notes} source={source} onClickEdit={this.handleEdit} addIngredient={this.addIngredientToExistingRecipe} addStep={this.addIngredientToExistingRecipe}/>;
            }
            return <Route component={NotFound}/>
          }}/>
          <Route path='/recipe/add' exact render={()=>{
            return <AddRecipe toAdd={addRecipe} onAdd={this.handleAddRecipe} addIngredient={this.addIngredient} addStep={this.addStep}/>
          }}/>
          <Route path='/recipe/:id' render={({match})=>{
            const id = match.params.id;
            if(recipes[id]){
              const {title, description, servings, ingredients, steps, notes, source} = recipes[id];
              return <Recept id={id} title={title} description={description} servings={servings} ingredients={ingredients} steps={steps} notes={notes} source={source} onDelete={id => this.handleDelete(id)} />
            }
            return <Route component={NotFound}/>
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default App;
