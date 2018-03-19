import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const AddRecipe = ({toAdd, onAdd, addIngredient, addStep, history}) => {

    const redirect = id => {
        history.push(`/recipe/${id}`);
    }

    const data = {
        'title': 'Geen Titel',
        'description': 'Geen Beschrijving',
        'servings': 0,
        'ingredients': [],
        'steps': [],
        'notes': 'Geen Opmerkingen',
        'source': 'Geen Bron'
    }

    const handleChangeInput = e => {
       const {value, name} = e.currentTarget;
       if(name === 'ingredient'){
           const {id} = e.currentTarget;
           const index = id.slice(10);
           data.ingredients[index] = value;
           console.log(data);
       } else if (name === 'step'){
           const {id} = e.currentTarget;
           const index = id.slice(4);
           data.steps[index] = value;
       } else if (name === 'servings'){
           data[name] = parseInt(value, 10);
       } else {
            data[name] = value;
       }
    }

    const handleClickSubmit = e => {
        e.preventDefault();
        onAdd(data, redirect);
    }
    const handleClickAddIngredient = e => {
        e.preventDefault();
        addIngredient();
    }

    const handleClickAddStep = e => {
        e.preventDefault();
        addStep();
    }

    const renderForm = () => {
        return (
            <form className="addRecipe">
                <label htmlFor="title">Titel</label>
                <input type="text" name="title" id="title" onChange={e => handleChangeInput(e)} required/>
                <label htmlFor="description">Omschrijving</label>
                <textarea name="description" id="description" onChange={e => handleChangeInput(e)} required></textarea>
                <label htmlFor="servings">Servings</label>
                <select id="servings" name="servings" onChange={e => handleChangeInput(e)} required>
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
                </select>
                <label htmlFor="ingredients">Ingredienten</label>
                <ul id="ingredients" className="ingredients">
                    {toAdd.ingredients.map((ingredient, index) => {
                        return <li key={index}><input type="text" name="ingredient" id={"ingredient" + index} onChange={e => handleChangeInput(e)} required/></li>;
                    })}
                </ul>
                <button className="inline-button-extra" onClick={handleClickAddIngredient}>Extra Ingredient</button>
                <label htmlFor="method">Methode</label>
                <dl id="method" className="method">
                    {toAdd.steps.map((step, index)=>{
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
                <input className="inline-button" type="submit" onClick={handleClickSubmit}/>
            </form>
        );
    };

    return (
        renderForm()
    );
};

AddRecipe.propTypes = {
    toAdd: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired.apply,
    addIngredient: PropTypes.func.isRequired.apply,
    addStep: PropTypes.func.isRequired.apply,
    history: PropTypes.object.isRequired
}

export default withRouter(AddRecipe);