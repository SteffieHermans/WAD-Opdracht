import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';

const EditForm = ({store, id, history}) => {
    const {title, description, servings, pricePerServing, ingredients, steps, notes, source} = store.recipes[id];
    const recipe = store.recipes[id];

    const redirect = id => {
        history.push(`/recipe/${id}`);
    }

    const handleChangeInput = e => {
       const {value, name} = e.currentTarget;
       switch(name) {
            case 'ingredient':
                const ingredientId = e.currentTarget.id;
                const ingredientIndex = ingredientId.slice(10);
                recipe.changeIngredient(ingredientIndex, value);
                break;
            case 'step':
                const {id} = e.currentTarget;
                const index = id.slice(4);
                recipe.changeStep(index, value);
                break;
            case 'servings':
                recipe.changeServings(parseInt(value, 10));
                break;
            case 'pricePerServing':
                recipe.changePricePerServing(parseInt(value, 10));
                break;
            case 'title':
                recipe.changeTitle(value);
                break;
            case 'description':
                recipe.changeDescription(value);
                break;
            case 'notes':
                recipe.changeNotes(value);
                break;
            case 'source':
                recipe.changeSource(value);
                break;
            default:
                console.log("something went wrong");
        }
    }

    const handleClickEdit = (e, id) => {
        e.preventDefault();
        redirect(id);
    }

    const handleClickAddIngredient = e => {
        e.preventDefault();
        recipe.addIngredient();
    }

    const handleClickAddStep = e => {
        e.preventDefault();
        recipe.addStep();
    }

    return (
        <form className="recipe-container-item">
            <label>Titel
                <input type="text" name="title" defaultValue={title} onChange={handleChangeInput} required/>
            </label><br/>
            <label>Beschrijving
                <textarea name="description" defaultValue={description} onChange={e => handleChangeInput(e)} required></textarea>
            </label><br/>
            <label htmlFor="servings">Servings
                <select id="servings" name="servings" defaultValue={servings} onChange={e => handleChangeInput(e)} required>
                    <option value="0">2</option>
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
                </select></label>
            <label>Price per Serving
            <input type="number" name="pricePerServing" id="pricePerServing" onChange={e => handleChangeInput(e)} defaultValue={pricePerServing} step="0.5" required/>
            </label><br/>
            <label>Ingredienten
                {ingredients.map((ingredient, index) => {
                    return <input type="text" id={"ingredient" + index} name="ingredient" key={index} defaultValue={ingredient} onChange={e => handleChangeInput(e)} required/>
                })}
            </label><br/>
            <button className="inline-button-extra" onClick={handleClickAddIngredient}>Extra Ingredient</button><br/>
            <label>Methode
                {steps.map((step, index) => {
                    return <textarea id={"step" + index} name="step" key={index} defaultValue={step} onChange={e => handleChangeInput(e)} required></textarea>
                })}
            </label><br/>
            <button className="inline-button-extra" onClick={handleClickAddStep}>Extra Stap</button><br/>
            <label>Opmerkingen
                <textarea name="notes" defaultValue={notes} onChange={e => handleChangeInput(e)} required></textarea>
            </label><br/>
            <label>Bron
                <input type="text" name="source" defaultValue={source} onChange={e => handleChangeInput(e)} required/>
            </label>
            <section className="button-section">
                <h3 className="hide">Button</h3>
                <button className="inline-button" onClick={(e) => handleClickEdit(e, id)}>Verander Recept</button>
            </section>
        </form>
    );
}

EditForm.propTypes = {
    store: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(observer(EditForm));