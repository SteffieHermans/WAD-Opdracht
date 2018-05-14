import gql from "graphql-tag";

export default gql`
    mutation addRecipe($title: String!, $description: String!, $servings: String!, $notes: String!, $source: String!) {
        addRecipe(title: $title, description: $description, servings: $servings, notes: $notes, source: $source) {
            _id
            title
            description
            servings
            notes
            source
        }
    }
`;