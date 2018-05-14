import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {observer} from 'mobx-react';
import ADD_RECIPE from "../graphql/addRecipe";
import GET_ALL_RECIPES from "../graphql/getAllRecipes";
import {Mutation} from "react-apollo";

const AddRecipe = ({history}) => {

    const renderForm = () => {
        return (
            <Mutation
                mutation={ADD_RECIPE}
                update = {(cache, {data: {addRecipe}}) => {
                    const data = cache.readQuery({
                        query: GET_ALL_RECIPES
                    });
                    data.allRecipes.push(addRecipe);
                    cache.writeQuery({
                        query: GET_ALL_RECIPES,
                        data
                    });
                }}
            >
                {addRecipe => (
                    <form className="addRecipe"
                        onSubmit={e => {
                            e.preventDefault();
                            if(this.title.value){
                                addRecipe({variables: {title: this.title.value, description: this.description.value, servings: this.servings.value, notes: this.notes.value, source: this.source.value}});
                                history.push(`/`);
                            }
                        }}
                    >
                        <label htmlFor="title">Titel</label>
                        <input type="text" name="title" id="title" ref={field => (this.title = field)} required/>
                        <label htmlFor="description">Omschrijving</label>
                        <textarea name="description" id="description" ref={field => (this.description = field)} required></textarea>
                        <label htmlFor="servings">Servings</label>
                        <select id="servings" name="servings" ref={field => (this.servings = field)} required>
                            <option value="0">0</option>
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
                        <label htmlFor="notes">Opmerkingen</label>
                        <textarea name="notes" id="notes" ref={field => (this.notes = field)} required></textarea>
                        <label htmlFor="source">Bron</label>
                        <input type="text" name="source" id="source" ref={field => (this.source = field)} required/>
                        <input className="inline-button" type="submit"/>
                    </form>
                )}
            </Mutation>
            
        );
    };

    return (
        renderForm()
    );
};

AddRecipe.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(observer(AddRecipe));