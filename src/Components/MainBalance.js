import React, { Component } from 'react';
import BalanceHeader from './BalanceHeader';
import BalanceCurrentAssets from './BalanceCurrentAssets';
import BalanceFixedAssets from './BalanceFixedAssets';
import BalanceLongTerm from './BalanceLongTerm';
import BalanceOwnerEquity from './BalanceOwnerEquity'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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