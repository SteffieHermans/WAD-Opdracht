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

class App extends Component {

  render() {
    const {store} = this.props;
    return (
      <main>
        <h1><Link to='/'>Mijn Receptenboek</Link></h1>
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
                <Route path='/recipes/edit/:id' render={({match})=>{
                  const id = match.params.id;
                  if(store.findRecipe(id)){
                    return <EditForm store={store} id={id}/>;
                  }
                  return <Route component={NotFound}/>
                }}/>
                <Route path='/recipes/add' exact render={()=>(
                  <Observer>
                    {() => <AddRecipe store={store}/>}
                  </Observer>
                )}/>
                <Route path='/recipes/:id' render={({match})=>{
                  const id = match.params.id;
                  return <Recept store={store} id={id}/>
                }}/>
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
