import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return <section className="notfound">
    <h2>Whoops, not found</h2>
    <Link to='/recipes'>Bring me home!</Link>
  </section>
}

export default NotFound;