import React from "react";

import { Route, Redirect } from "react-router-dom";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import GET_RECIPE from "../graphql/getRecipe";
import { Query } from "react-apollo";

const ProtectedRouteByUserId = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data, client }) => {
          if (loading) return null;
          if (error) return null;
          return data.currentUser ? (
            <Query query={GET_RECIPE} variables={{id: props.match.params.id}}>
            {({data:{recipe}, loading, error}) => {
                if(loading) return <p>Loading...</p>
                if(error) return <p>Error:{error.message}</p>
                return data.currentUser.id === recipe.user._id ? (<Component {...props} id={props.match.params.id} />) : (
                  <Redirect
                    to={{
                      pathname: `/recipes/${props.match.params.id}`,
                      state: { from: props.location }
                    }}
                  />
                );
            }}
            </Query>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          );
        }}
      </Query>
    )}
  />
);

export default ProtectedRouteByUserId;