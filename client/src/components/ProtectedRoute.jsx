import React from "react";

import { Route, Redirect } from "react-router-dom";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data, client }) => {
          if (loading) return null;
          if (error) return null;
          console.log(props);
          console.log(data.currentUser.id)
          return data.currentUser ? (
            props.match.params.id ? (<Component {...props} id={props.match.params.id} />) : (<Component {...props} />)
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

export default ProtectedRoute;