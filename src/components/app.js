import React, { Component } from 'react';
import  moment from "moment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PortfolioContainer from './portfolio/portfolio-container'; 
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';

export default class App extends Component {
  render() {
    return (
      <div className='app'>


        <Router>
          <div>
          <NavigationContainer />

          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/about-me' component={About} />
          </Switch>
          </div>
        </Router>

        <h1>DevCamp React Starter</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
