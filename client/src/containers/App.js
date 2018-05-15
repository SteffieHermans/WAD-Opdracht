import React, { Component } from 'react';
import AddRecipe from '../components/AddRecipe.jsx';
import NotFound from '../components/NotFound.jsx';
import Overview from '../components/Overview.jsx';
import Recept from '../components/Recept.jsx';
import EditForm from '../components/EditForm.jsx';
import User from '../components/User.jsx';
import '../css/App.css';
import {observer, Observer} from 'mobx-react';

import {Switch, Route, Link, withRouter} from 'react-router-dom';
import {Query} from "react-apollo";

import GET_ALL_RECIPES from "../graphql/getAllRecipes";
import ProtectedRoute from '../components/ProtectedRoute';
import ProtectedRouteByUserId from '../components/ProtectedRouteByUserId';
import ExistingRecipeRoute from '../components/ExistingRecipeRoute';

class App extends Component {

  render() {
    return (
      <main>
        <h1><Link to='/'>Mijn Receptenverzameling</Link></h1>
        <Query query={GET_ALL_RECIPES}>
        {
          ({loading, error, data: {allRecipes}}) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error: {error.message}</p>
            return(
              <Switch>
                <Route path='/' exact render={() => (
                  <Observer>
                    {() => <Overview recipes={allRecipes} />}
                  </Observer>
                )}/>
                <ProtectedRoute path="/recipes/edit/:id" component={EditForm}/>
                {/* <Route path='/recipes/edit/:id' render={({match})=>{
                  const id = match.params.id;
                  return <EditForm id={id}/>;
                }}/> */}
                <ProtectedRoute path="/recipes/add" component={AddRecipe}/>
                <ExistingRecipeRoute path="/recipes/:id" component={Recept}/>
                {/* <Route path='/recipes/:id' render={({match})=>{
                  const id = match.params.id;
                  return <Recept id={id}/>
                }}/> */}
                <Route component={NotFound}/>
              </Switch>
            )
          }
        }
        </Query>
        <User />
      </main>
    );
  }
}

export default withRouter(observer(App));
