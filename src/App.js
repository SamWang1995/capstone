import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import MainCash from './Components/MainCash';
import MainBalance from './Components/MainBalance';
import MainIncome from './Components/MainIncome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <nav>
          <ul>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/MainCash">MainCash</NavLink></li>
            <li><NavLink href="/MainBalance">MainBalance</NavLink></li>
            <li><NavLink href="/MainIncome">MainIncome</NavLink></li>
          </ul>
        </nav>
        <div className = "row">
          <Router>
            <Switch>
              <Route path = "/" exact component = {Home}/>
              <Route path = "/MainCash" component = {MainCash}/>
              <Route path = "/MainBalance" component = {MainBalance}/>
              <Route path = "/MainIncome" component = {MainIncome}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
