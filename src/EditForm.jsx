import React from 'react';
import PropTypes from 'prop-types';

const EditForm = ({id, title, description, servings, ingredients, steps, notes, source, onClickEdit}) => {
    const data = {
        'title': title,
        'description': description,
        'servings': servings,
        'ingredients': ingredients,
        'steps': steps,
        'notes': notes,
        'source': source
    }

    const handleChangeInput = e => {
       const {value, name} = e.currentTarget;
       console.log(value);
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
       console.log(data);
    }

    const handleClickEdit = (e, id) => {
        e.preventDefault();
        const selector = '.' + id;
        const recipeContainer = document.querySelector(selector);
        const form = recipeContainer.querySelector('form');
        form.classList.add('hide');
        onClickEdit(id, data);
    }

    return (
        <form className="recipe-container-item hide">
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
            <label>Ingredienten
                {ingredients.map((ingredient, index) => {
                    return <input type="text" name="ingredient" key={index} defaultValue={ingredient} onChange={e => handleChangeInput(e)} required/>
                })}
            </label><br/>
            <label>Methode
                {steps.map((step, index) => {
                    return <textarea name="step" key={index} defaultValue={step} onChange={e => handleChangeInput(e)} required></textarea>
                })}
            </label><br/>
            <label>Opmerkingen
                <textarea name="notes" defaultalue={notes} onChange={e => handleChangeInput(e)} required></textarea>
            </label><br/>
            <label>Bron
                <input type="text" name="source" defaultValue={source} onChange={e => handleChangeInput(e)} required/>
            </label>
            <button onClick={(e) => handleClickEdit(e, id)}>Verander Recept</button>
        </form>
    );
}

EditForm.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    notes: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    onClickEdit: PropTypes.func.isRequired
}

export default EditForm;