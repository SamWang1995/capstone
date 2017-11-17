import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import CashIn from './CashIn';
import Additions from './Additions';
import Decrease from './Decrease';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {
//    Table,
//    TableBody,
//    TableHeader,
//    TableHeaderColumn,
//    TableRow,
//    TableRowColumn,
//  } from 'material-ui/Table';

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