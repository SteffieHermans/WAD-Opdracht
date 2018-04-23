import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Recept = ({store, id}) => {
    const {title, description, servings, pricePerServing, ingredients, steps, notes, source, total} = store.recipes[id];

    const handleClickDelete = id => {
        store.deleteRecipe(id);
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
            <section>
                <h3>Prijs per Persoon</h3>
                <p>{pricePerServing}</p>
            </section>
            <section>
                <h3>Totale Prijs</h3>
                <p>{total}</p>
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
            <section className="button-section">
                <h3 className="hide">Buttons</h3>
                <Link className="button-link" to={`/recipe/edit/${id}`}><button className="inline-button">Edit</button></Link>
                <Link className="button-link" to='/'><button className="inline-button" onClick={() => handleClickDelete(id)}>Delete</button></Link>
            </section>
        </article>
        
      );
}

Recept.propTypes = {
    store: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
}

export default Recept;