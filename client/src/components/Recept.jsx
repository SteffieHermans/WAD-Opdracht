import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {Query, Mutation} from "react-apollo";
import GET_RECIPE from "../graphql/getRecipe";
import DELETE_RECIPE from "../graphql/deleteRecipe";
import GET_ALL_RECIPES from "../graphql/getAllRecipes";
import ProtectedComponentByUserId from "./ProtectedComponentByUserId";

const Recept = ({id, history}) => {

    const handleClickDelete = (e, deleteRecipe) => {
        e.preventDefault();
        deleteRecipe({ variables: { id: id } });
        history.push(`/`);
    }

    return (
        <Query query={GET_RECIPE} variables={{id}}>
            {({data:{recipe}, loading, error}) => {
                if(loading) return <p>Loading...</p>
                if(error) return <p>Error:{error.message}</p>
                return(
                    <Mutation mutation={DELETE_RECIPE}
                    update={(cache, { data: { deletedRecipe } }) => {
                        const data = cache.readQuery({ query: GET_ALL_RECIPES });
                        data.allRecipes = data.allRecipes.filter(
                          recipe => recipe._id !== deletedRecipe._id
                        );
                        cache.writeQuery({ query: GET_ALL_RECIPES, data });
                      }}
                    >
                    {deleteRecipe => (
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
                                <h3>Opmerkingen</h3>
                                <p>{recipe.notes}</p>
                            </section>
                            <section>
                                <h3>Bron</h3>
                                <p>{recipe.source}</p>
                            </section>
                            <section>
                                <h3>Toegevoegd Door</h3>
                                <p>{recipe.user.name}</p>
                            </section>
                            <section className="button-section">
                                <h3 className="hide">Buttons</h3>
                                <ProtectedComponentByUserId protect={
                                    <Link className="button-link" to={`/recipes/edit/${recipe._id}`}><button className="inline-button">Edit</button></Link>
                                    } alternative={<p>Only the user that created this recipe entry can update or delete it.</p>} recipeId={id}
                                />
                                <ProtectedComponentByUserId protect={
                                    <Link className="button-link" to='/'><button className="inline-button" onClick={e => handleClickDelete(e, deleteRecipe)}>Delete</button></Link>
                                    } recipeId={id}
                                />
                                
                                
                            </section>
                        </article>
                    )}
                    </Mutation>
                )
            }}
        </Query>
        
      );
}

Recept.propTypes = {
    id: PropTypes.string.isRequired
}

export default withRouter(Recept);