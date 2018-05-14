import React from "react";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import GET_RECIPE from "../graphql/getRecipe";
import { Query } from "react-apollo";

const ProtectedComponentByUserId = ({ protect, alternative, recipeId }) => {
  return (
    <Query query={GET_CURRENT_USER}>
      {({ loading, error, data, client }) => {
        if (loading) return null;
        if (error) return null;
        return data.currentUser ? (<Query query={GET_RECIPE} variables={{id: recipeId}}>
        {({data:{recipe}, loading, error}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error:{error.message}</p>
            return data.currentUser.id === recipe.user._id ? (protect) : alternative;
        }}
        </Query>) : alternative;
      }}
    </Query>
  );
};

ProtectedComponentByUserId.defaultProps = {
  alternative: null
};

export default ProtectedComponentByUserId;