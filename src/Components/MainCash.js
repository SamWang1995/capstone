import React, { Component } from 'react';
import MainCashHeader from './MainCashHeader';
import CashIn from './CashIn';
import Additions from './Additions';
import Decrease from './Decrease';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 class MainCash extends Component{
 	state = {
 		showCheckboxes: false
 	};
 	render(){
 		return (
	 		<MuiThemeProvider>
	        <MainCashHeader />
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