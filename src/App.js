import React, { Component } from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Routines from './Routines/Routines';
import Nutritional from './Nutritional/Nutritional'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import './App.css';


class App extends Component {


  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
            <Route path='/' exact component={Home} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/routines' exact component={Routines} />
            <Route path='/nutritional' exact component={Nutritional} />
        </BrowserRouter>
      </div>
    );
  }



}

export default App;
