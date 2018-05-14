import React from "react";

import { Route, Redirect } from "react-router-dom";

import GET_RECIPE from "../graphql/getRecipe";
import { Query } from "react-apollo";

const ExistingRecipeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Query query={GET_RECIPE} variables={{id: props.match.params.id}}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return (<Redirect
            to={{
                pathname: "/",
                state: { from: props.location }
            }}
            />)
            return (<Component id={props.match.params.id} />)
        }}
      </Query>
    )}
  />
);

export default ExistingRecipeRoute;