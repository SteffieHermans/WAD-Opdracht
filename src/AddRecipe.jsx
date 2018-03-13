import React from "react";
import PropTypes from 'prop-types';

const AddRecipe = ({onAdd}) => {

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
        onAdd(data);
    }
    const handleClickAddIngredient = e => {
        e.preventDefault();
        const ingredientList = document.querySelector('.ingredients');
        const count = ingredientList.children.length;

        const listItem = document.createElement('li');
        listItem.innerHTML = '<input type="text" name="ingredient" id="ingredient' + (count-1) + '"/>';
        listItem.querySelector('input').setAttribute('onChange', "e => handleChangeInput(e)");
        ingredientList.appendChild(listItem);
    }

    const handleClickAddStep = e => {
        e.preventDefault();
        const stepList = document.querySelector('.method');
        const count = stepList.children.length/2;

        const term = document.createElement('dt');
        term.textContent = 'Stap ' + (count+1);

        const description = document.createElement('dd');
        description.innerHTML = '<textarea name="step" id="step' + (count-1) + '"></textarea>';
        description.querySelector('textarea').setAttribute('onChange', "e => handleChangeInput(e)");

        stepList.appendChild(term);
        stepList.appendChild(description);
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
                    <li><input type="text" name="ingredient" id="ingredient0" onChange={e => handleChangeInput(e)} required/></li>
                </ul>
                <button onClick={handleClickAddIngredient}>Extra Ingredient</button>
                <label htmlFor="method">Methode</label>
                <dl id="method" className="method">
                    <dt>Stap 1</dt>
                    <dd><textarea name="step" id="step0" onChange={e => handleChangeInput(e)} required></textarea></dd>
                </dl>
                <button onClick={handleClickAddStep}>Extra Stap</button>
                <label htmlFor="notes">Opmerkingen</label>
                <textarea name="notes" id="notes" onChange={e => handleChangeInput(e)} required></textarea>
                <label htmlFor="source">Bron</label>
                <input type="text" name="source" id="source" onChange={e => handleChangeInput(e)} required/>
                <input type="submit" onClick={handleClickSubmit}/>
            </form>
        );
    };

    return (
        <section className="recipes">
            <h2>Recept Toevoegen</h2>
            {renderForm()}
        </section>
    );
};

AddRecipe.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default AddRecipe;