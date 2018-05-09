import gql from "graphql-tag";

export default gql`
    mutation addRecipe($title: String!, $description: String!, $servings: String!, $ingredients: [String]!, $steps: [String]!, $notes: String!, $source: String!) {
        addRecipe(title: $title, description: $description, servings: $servings, ingredients: $ingredients, steps: $steps, notes: $notes, source: $source) {
            _id
            title
            description
            servings
            ingredients
            steps
            notes
            source
        }
    }
`;