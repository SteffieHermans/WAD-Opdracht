import gql from "graphql-tag";

export default gql`
    query getRecipe($id: String!) {
        recipe(_id: $id) {
            _id
            title
            description
            servings
            notes
            source
            user{
                name
                _id
            }
        }
    }
`;