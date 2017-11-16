import React, { Component } from 'react';
import BalanceHeader from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/BalanceHeader';
import BalanceCurrentAssets from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/BalanceCurrentAssets';
import BalanceFixedAssets from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/BalanceFixedAssets';
import BalanceLongTerm from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/BalanceLongTerm';
import BalanceOwnerEquity from '/Users/bettyjing/Documents/GitHub/capstone/src/Components/BalanceOwnerEquity'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

 class MainBalance extends Component{
 	state = {
 		showCheckboxes: false
 	};
 	render(){
 		return (
	 		<MuiThemeProvider>
	        <BalanceHeader />
	        <br /><br /><br />
	        <BalanceCurrentAssets />
	        <br /><br /><br />
	        <BalanceFixedAssets />
	        <br /><br /><br />
	        <BalanceOwnerEquity	/>
	        <br /><br /><br />
	        <BalanceLongTerm/>
	        <br />
	      </MuiThemeProvider>
  		);
 	}
 }
 export default MainBalance;