import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Overview = ({ recipes }) => {

  return <section className="recipes">
    <ul className="recipe-list">
      {
        Object.keys(recipes).map(id => (
          <li className="Recipe" key={id}>
            <Link to={`/recipe/${id}`} className="recipe-link">
            {recipes[id].title} (Serves: {recipes[id].servings})
            </Link>
          </li>
        ))
      }
    </ul>
    <nav>
      <Link className="button" to="/recipe/add">New Recipe</Link>
    </nav>
  </section>
}

Overview.propTypes = {
  recipes: PropTypes.object.isRequired
}

export default Overview;