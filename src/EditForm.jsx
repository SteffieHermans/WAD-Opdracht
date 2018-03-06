import React from 'react';
import PropTypes from 'prop-types';

const EditForm = ({title, description, ingredients, steps, notes, source, onChange}) => {
    const handleChangeTitle = e => {
        const {value} = e.currentTarget;
        onChange(value);
    }

    return (
        <form className="recipe-container-item">
            <label>Titel
                <input type="text" name="title" onChange={handleChangeTitle} value={title} required/>
            </label><br/>
            <label>Beschrijving
                <textarea name="description" value={description} required></textarea>
            </label><br/>
            <label>Ingredienten
                {ingredients.map((ingredient, index) => {
                    return <input type="text" name="ingredient" key={index} value={ingredient} required/>
                })}
            </label><br/>
            <label>Methode
                {steps.map((step, index) => {
                    return <textarea name="step" key={index} value={step} required></textarea>
                })}
            </label><br/>
            <label>Opmerkingen
                <textarea name="notes" value={notes} required></textarea>
            </label><br/>
            <label>Bron
                <input type="text" name="source" value={source} required/>
            </label>
        </form>
    );
}

EditForm.propTypes = {
}

export default EditForm;