import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Query} from "react-apollo";
import GET_RECIPE from "../graphql/getRecipe"

const Recept = ({store, id, history}) => {

    const redirect = () => {
        history.push(`/`);
    }

    const handleClickDelete = (e, id) => {
        e.preventDefault();
        const recipe = store.findRecipe(id);
        if(store.remove(recipe)){
            redirect();
        };
        //redirect to home screen
    }

    return (
        <Query query={GET_RECIPE} variables={{id}}>
            {({data:{recipe}, loading, error}) => {
                if(loading) return <p>Loading...</p>
                if(error) return <p>Error:{error.message}</p>
                return(
                    <article key={id} className="recipe recipe-container-item">
                        <h2>{recipe.title}</h2>
                        <section>
                            <h3>Beschrijving</h3>
                            <p>{recipe.description}</p>
                        </section>
                        <section>
                            <h3>Aantal Personen</h3>
                            <p>{recipe.servings}</p>
                        </section>
                        <section>
                            <h3>Ingredienten</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => {
                                    return <li className="ingredient" key={index}>{ingredient}</li>;
                                })}
                            </ul>
                        </section>
                        <section>
                            <h3>Methode</h3>
                            <ol>
                                {recipe.steps.map((step, index) => {
                                    return <li className="step" key={index}>{step}</li>;
                                })}
                            </ol>
                        </section>
                        <section>
                            <h3>Opmerkingen</h3>
                            <p>{recipe.notes}</p>
                        </section>
                        <section>
                            <h3>Bron</h3>
                            <p>{recipe.source}</p>
                        </section>
                        <section className="button-section">
                            <h3 className="hide">Buttons</h3>
                            <Link className="button-link" to={`/recipes/edit/${recipe._id}`}><button className="inline-button">Edit</button></Link>
                            <Link className="button-link" to='/'><button className="inline-button" onClick={e => handleClickDelete(e, recipe._id)}>Delete</button></Link>
                        </section>
                    </article>
                )
            }}
        </Query>
        
      );
}

Recept.propTypes = {
    id: PropTypes.string.isRequired
}

export default withRouter(Recept);