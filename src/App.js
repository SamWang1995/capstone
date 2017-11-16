import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainCash from './Components/MainCash';
import MainBalance from './Components/MainBalance'
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
        <div className = "row">
          <Router>
            <Switch>
              <Route path = "/MainCash" component = {MainCash}/>
              <Route path = "/MainBalance" component = {MainBalance}/>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
