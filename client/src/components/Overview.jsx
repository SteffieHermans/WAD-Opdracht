import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

const Overview = ({ recipes }) => {

  return <section className="recipes">
    <ul className="recipe-list">
      {
        recipes.map(recipe => (
          <li className="Recipe" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} className="recipe-link">
            {recipe.title} (Serves: {recipe.servings})
            </Link>
          </li>
        ))
      }
    </ul>
    <nav>
      <Link className="button" to="/recipes/add">New Recipe</Link>
    </nav>
  </section>
}

Overview.propTypes = {
  recipes: PropTypes.object.isRequired
}

export default observer(Overview);