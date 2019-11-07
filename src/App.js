import React, { Component } from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Routines from './Routines/Routines';
import Nutritional from './Nutritional/Nutritional'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import './App.css';

import {connect} from 'react-redux'


class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          {this.props.isUserLoggedIn ? this.renderRoutes() : <div> <Route path='/' exact component={Home} /> <Redirect to="/" /></div>}
        </BrowserRouter>
      </div>
    );
  }

  renderRoutes(){
    return(
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/routines' exact component={Routines} />
        <Route path='/nutritional' exact component={Nutritional} />
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
