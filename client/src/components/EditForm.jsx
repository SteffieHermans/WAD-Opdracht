import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';

import GET_RECIPE from '../graphql/getRecipe';
import UPDATE_RECIPE from '../graphql/updateRecipe';
import {Mutation, Query} from "react-apollo";

const EditForm = ({ id, history}) => {

    return (
        <Query query={GET_RECIPE} variables={{id}}>
        {({data:{recipe}, loading, error}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error:{error.message}</p>
            return(
                <Mutation mutation={UPDATE_RECIPE}>
                {updateRecipe => (
                <form className="recipe-container-item" onSubmit={e => {
                    e.preventDefault();
                    updateRecipe({
                        variables: { id: id, title: this.title.value, description: this.description.value, servings: this.servings.value, notes: this.notes.value, source: this.source.value}
                    });
                    history.push(`/recipes/${id}`);
                }}>
                    <label>Titel
                        <input type="text" name="title" defaultValue={recipe.title} ref={field => (this.title = field)} required/>
                    </label><br/>
                    <label>Beschrijving
                        <textarea name="description" defaultValue={recipe.description} ref={field => (this.description = field)} required></textarea>
                    </label><br/>
                    <label htmlFor="servings">Servings
                        <select id="servings" name="servings" defaultValue={recipe.servings} ref={field => (this.servings = field)} required>
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
                    <label>Opmerkingen
                        <textarea name="notes" defaultValue={recipe.notes} ref={field => (this.notes = field)} required></textarea>
                    </label><br/>
                    <label>Bron
                        <input type="text" name="source" defaultValue={recipe.source} ref={field => (this.source = field)} required/>
                    </label>
                    <section className="button-section">
                        <h3 className="hide">Button</h3>
                        <button className="inline-button" type="submit">Verander Recept</button>
                    </section>
                </form>
                )}
                </Mutation>
            )
        }}
        </Query>
        
    );
}

EditForm.propTypes = {
    id: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(observer(EditForm));