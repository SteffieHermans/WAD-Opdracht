import gql from "graphql-tag";

export default gql`
    query getRecipe($id: String!) {
        recipe(_id: $id) {
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