import React, { Component } from 'react';
import HeaderBar from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/HeaderBar';
import CashIn from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/CashIn';
import Additions from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/Additions';
import Decrease from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/Decrease';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

 class MainCash extends Component{
 	state = {
 		showCheckboxes: false
 	};
 	render(){
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
 export default MainCash;