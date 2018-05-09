import gql from "graphql-tag";

export default gql`
    query getAllRecipes {
        allRecipes {
            _id
            title
            servings
        }
    }
`;