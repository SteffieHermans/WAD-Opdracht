import gql from "graphql-tag";

export default gql`
    mutation updateRecipe($id: String!, $title: String!, $description: String!, $servings: String!,  $notes: String!, $source: String!) {
        updateRecipe(_id: $id, title: $title, description: $description, servings: $servings, notes: $notes, source: $source) {
            _id
            title
            description
            servings
            notes
            source
        }
    }
`;