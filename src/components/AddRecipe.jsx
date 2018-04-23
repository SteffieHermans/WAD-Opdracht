import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Recipe from '../models/Recipe';
import {observer} from 'mobx-react';

const AddRecipe = ({store, history}) => {

    const redirect = id => {
        history.push(`/recipe/${id}`);
    }

    const handleSubmitForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = store.data;
        if(form.title.value){
            const recipe = new Recipe(data.title, data.description, data.servings, data.pricePerServing, data.ingredients, data.steps, data.notes, data.source);
            const id = store.addRecipe(recipe);
            store.resetData();
            if(id){
                redirect(id);
            }
        }
    }

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
                store.data.changeServings(parseInt(value, 10));
                break;
            case 'pricePerServing':
                store.data.changePricePerServing(parseInt(value, 10));
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
        store.data.addIngredient();
    }

    const handleClickAddStep = e => {
        e.preventDefault();
        store.data.addStep();
    }

    const renderForm = () => {
        return (
            <form className="addRecipe" onSubmit={handleSubmitForm}>
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
                <label htmlFor="pricePerServing">Price Per Serving</label>
                <input type="number" name="pricePerServing" id="pricePerServing" onChange={e => handleChangeInput(e)} defaultValue="0" step="0.5" required/>
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