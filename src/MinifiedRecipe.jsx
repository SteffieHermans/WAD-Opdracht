import React from 'react';
import PropTypes from 'prop-types';

const MinifiedRecipe = ({id, title, description, servings, ingredients, onDelete}) => {
    const handleClickDelete = id => {
        onDelete(id);
    }

    return (
        <article key={id} className="recipe recipe-container-item">
            <h2>{title}</h2>
            <section>
                <h3>Beschrijving</h3>
                <p>{description}</p>
            </section>
            <section>
                <h3>Aantal Personen</h3>
                <p>{servings}</p>
            </section>
            <button onClick={() => handleClickDelete(id)}>Delete</button>
        </article>
        
      );
}

Recept.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Recept;