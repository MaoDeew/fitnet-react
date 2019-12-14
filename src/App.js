import React, { Component } from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Routines from './Routines/Routines';
import Nutritional from './Nutritional/Nutritional'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import './App.css';

import {connect} from 'react-redux'


class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
          {this.props.isUserLoggedIn ? this.renderRoutes() : this.renderOnlyHomeRoute()}
        </BrowserRouter>
      </div>
    );
  }

  renderRoutes(){
    return(
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL+'/'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL+'/profile'} exact component={Profile} />
          <Route path={process.env.PUBLIC_URL+'/routines'} exact component={Routines} />
          <Route path={process.env.PUBLIC_URL+'/nutritional'} exact component={Nutritional} />
        </Switch>
      </div>
    )
  }

  renderOnlyHomeRoute(){
    return(
      <div>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      </div>
    )
  }



}


const mapStateToProps = (state) => {
  return {
    isUserLoggedIn : Boolean(state.firebaseStore.auth.uid)
  }
}



export default connect(mapStateToProps)(App);

