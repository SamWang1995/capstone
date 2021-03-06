import React, { Component } from 'react';
import IncomeHeader from './IncomeHeader';
import IncomeRevenue from './IncomeRevenue';
import IncomeOpExpenses from './IncomeOpExpenses';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MainIncome extends Component{
 	state = {
 		showCheckboxes: false
 	};
 	render(){
 		return (
	 		<MuiThemeProvider>
	        <IncomeHeader />
	        <br /><br /><br />
	        <IncomeRevenue />
	        <br /><br /><br />
	        <IncomeOpExpenses />
	        <br />
	      </MuiThemeProvider>
  		);
 	}
 }
 export default MainIncome;