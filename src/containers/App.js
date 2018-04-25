import React, { Component } from 'react';
import AddRecipe from '../components/AddRecipe.jsx';
import NotFound from '../components/NotFound.jsx';
import Overview from '../components/Overview.jsx';
import Recept from '../components/Recept.jsx';
import EditForm from '../components/EditForm.jsx';
import '../css/App.css';
import {observer, Observer} from 'mobx-react';

import {Switch, Route, Link, withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <main>
        <h1><Link to='/'>Mijn Receptenboek</Link></h1>
        <Switch>
          <Route path='/' exact render={() => (
            <Observer>
              {() => <Overview recipes={store.recipes} />}
            </Observer>
          )}/>
          <Route path='/recipe/edit/:id' render={({match})=>{
            const id = match.params.id;
            if(store.recipes[id]){
              return <EditForm store={store} id={id}/>;
            }
            return <Route component={NotFound}/>
          }}/>
          <Route path='/recipe/add' exact render={()=>{
            return <AddRecipe store={store}/>
          }}/>
          <Route path='/recipe/:id' render={({match})=>{
            const id = match.params.id;
            if(store.recipes[id]){
              return <Recept store={store} id={id} />
            }
            return <Route component={NotFound}/>
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    );
  }
}

export default withRouter(observer(App));
