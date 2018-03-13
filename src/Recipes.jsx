import React from "react";
import Recept from "./Recept.jsx";
import EditForm from "./EditForm.jsx";
import PropTypes from 'prop-types';

const Recipes = ({recipes, onDelete, onEdit}) => {
    const handleOnDelete = id => {
        onDelete(id);
    }

    const handleClickEdit = (id, recipe) => {
        onEdit(id, recipe);
    }

    const renderRecipe = (id, recipe) => {
        const {title, description, servings, ingredients, steps, notes, source} = recipe;
        return (
            <div key={id} className={"recipe-container, " + id}>
                <Recept key={id} id={id} title={title} description={description} servings={servings} ingredients={ingredients} steps={steps} notes={notes} source={source} onDelete={id => handleOnDelete(id)} />
                <EditForm id={id} title={title} description={description} servings={servings} ingredients={ingredients} steps={steps} notes={notes} source={source} onClickEdit={(id, recipe) => handleClickEdit(id, recipe)}/>
            </div>
        );
    };

    return (
        <section className="recipes">
            <h2>Recepten</h2>
            {Object.keys(recipes).map(id => (
                renderRecipe(id, recipes[id])
            ))}
        </section>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default Recipes;