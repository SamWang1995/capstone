import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './Components/HeaderBar';
import CashIn from './Components/CashIn';
import Additions from './Components/Additions';
import Decrease from './Components/Decrease';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HeaderBar />
        <br /><br /><br />
        <CashIn />
        <br /><br /><br />
        <Additions />
        <br /><br /><br />
        <Decrease />
        <br />
      </MuiThemeProvider>
    );
  }
}

export default App;
