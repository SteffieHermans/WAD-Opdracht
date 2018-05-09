import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';
import ADD_RECIPE from "../graphql/addRecipe";
import GET_ALL_RECIPES from "../graphql/getAllRecipes";
import {Mutation} from "react-apollo";

const AddRecipe = ({store, history}) => {

    const handleChangeInput = e => {
       const {value, name} = e.currentTarget;
       switch(name) {
            case 'ingredient':
                const ingredientId = e.currentTarget.id;
                const ingredientIndex = ingredientId.slice(10);
                store.data.changeIngredient(ingredientIndex, value);
                break;
            case 'step':
                const {id} = e.currentTarget;
                const index = id.slice(4);
                store.data.changeStep(index, value);
                break;
            case 'servings':
                store.data.changeServings(value);
                break;
            case 'title':
                store.data.changeTitle(value);
                break;
            case 'description':
                store.data.changeDescription(value);
                break;
            case 'notes':
                store.data.changeNotes(value);
                break;
            case 'source':
                store.data.changeSource(value);
                break;
            default:
                console.log("something went wrong");
       }
    }

    const handleClickAddIngredient = e => {
        e.preventDefault();
        console.log("addIngredient");
        store.data.addIngredient();
    }

    const handleClickAddStep = e => {
        e.preventDefault();
        console.log("addStep");
        store.data.addStep();
    }

    const renderForm = () => {
        return (
            <Mutation
                mutation={ADD_RECIPE}
                update = {(cache, {data: {addRecipe}}) => {
                    const data = cache.readQuery({
                        query: GET_ALL_RECIPES
                    });
                    data.allRecipes.push(addRecipe);
                    cache.writeQuery({
                        query: GET_ALL_RECIPES,
                        data
                    });
                }}
            >
                {addRecipe => (
                    <form className="addRecipe"
                        onSubmit={e => {
                            e.preventDefault();
                            if(store.data.title){
                                addRecipe({variables: {title: store.data.title, description: store.data.description, servings: store.data.servings, ingredients: store.data.ingredients, steps: store.data.steps, notes: store.data.notes, source: store.data.source}});
                                store.resetData();
                                history.push(`/`);
                            }
                        }}
                    >
                        <label htmlFor="title">Titel</label>
                        <input type="text" name="title" id="title" onChange={e => handleChangeInput(e)} required/>
                        <label htmlFor="description">Omschrijving</label>
                        <textarea name="description" id="description" onChange={e => handleChangeInput(e)} required></textarea>
                        <label htmlFor="servings">Servings</label>
                        <select id="servings" name="servings" onChange={e => handleChangeInput(e)} required>
                            <option value="0">0</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <label htmlFor="ingredients">Ingredienten</label>
                        <ul id="ingredients" className="ingredients">
                            {store.data.ingredients.map((ingredient, index) => {
                                return <li key={index}><input type="text" name="ingredient" id={"ingredient" + index} onChange={e => handleChangeInput(e)} required/></li>;
                            })}
                        </ul>
                        <button className="inline-button-extra" onClick={handleClickAddIngredient}>Extra Ingredient</button>
                        <label htmlFor="method">Methode</label>
                        <dl id="method" className="method">
                            {store.data.steps.map((step, index)=>{
                                return(
                                    <div key={"stap-wrapper" + index}>
                                        <dt>Stap {index + 1}</dt>
                                        <dd><textarea name="step" id={"step" + index} onChange={e => handleChangeInput(e)} required></textarea></dd>
                                    </div>
                                );
                            })}
                        </dl>
                        <button className="inline-button-extra" onClick={handleClickAddStep}>Extra Stap</button>
                        <label htmlFor="notes">Opmerkingen</label>
                        <textarea name="notes" id="notes" onChange={e => handleChangeInput(e)} required></textarea>
                        <label htmlFor="source">Bron</label>
                        <input type="text" name="source" id="source" onChange={e => handleChangeInput(e)} required/>
                        <input className="inline-button" type="submit"/>
                    </form>
                )}
            </Mutation>
            
        );
    };

    return (
        renderForm()
    );
};

AddRecipe.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(observer(AddRecipe));