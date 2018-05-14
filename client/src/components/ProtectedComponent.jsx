import React from "react";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";

const ProtectedComponent = ({ protect, alternative }) => {
  return (
    <Query query={GET_CURRENT_USER}>
      {({ loading, error, data, client }) => {
        if (loading) return null;
        if (error) return null;
        return data.currentUser ? protect : alternative;
      }}
    </Query>
  );
};

ProtectedComponent.defaultProps = {
  alternative: null
};

export default ProtectedComponent;