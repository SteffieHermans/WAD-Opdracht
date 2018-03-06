import React from 'react';
import PropTypes from 'prop-types';

const Recept = ({id, title, description, servings, ingredients, steps, notes, source}) => {
    return (
        <article className="recipe recipe-container-item">
            <h2>{title}</h2>
            <section>
                <h3>Beschrijving</h3>
                <p>{description}</p>
            </section>
            <section>
                <h3>Aantal Personen</h3>
                <p>{servings}</p>
            </section>
            <section>
                <h3>Ingredienten</h3>
                <ul>
                    {ingredients.map((ingredient, index) => {
                        return <li className="ingredient" key={index}>{ingredient}</li>;
                    })}
                </ul>
            </section>
            <section>
                <h3>Methode</h3>
                <ol>
                    {steps.map((step, index) => {
                        return <li className="step" key={index}>{step}</li>;
                    })}
                </ol>
            </section>
            <section>
                <h3>Opmerkingen</h3>
                <p>{notes}</p>
            </section>
            <section>
                <h3>Bron</h3>
                <p>{source}</p>
            </section>
        </article>
        
      );
}

Recept.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    notes: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
}

export default Recept;