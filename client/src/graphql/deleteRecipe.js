import gql from "graphql-tag";

export default gql`
    mutation deleteRecipe($id: String!) {
        deletedRecipe: deleteRecipe(_id: $id) {
            _id
        }
    }
`;