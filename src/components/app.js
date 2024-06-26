import React, { Component } from 'react';
import  moment from "moment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import PortfolioContainer from './portfolio/portfolio-container'; 
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';  
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match.js';


export default class App extends Component {



  render() {
 
    return (
      <div className='app'>


        <Router>
          <div>
          <h1>DevCamp React Starter</h1>
          <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
          <NavigationContainer />

          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/about-me' component={About} />
            <Route exact path = "/contact" component={Contact} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>



      </div>
    );
  }
} 

