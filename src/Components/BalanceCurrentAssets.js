import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableFooter,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class BalanceCurrentAssets extends Component {
    state = {
        showCheckboxes: false,
        fixedFooter: true
    };

    render() {
        return (
            <Table>
                <TableHeader
                    style={{backgroundColor:'#E53935'}}
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>Current Assets</TableHeaderColumn>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>2017</TableHeaderColumn>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>2016</TableHeaderColumn>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>2015</TableHeaderColumn>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>2014</TableHeaderColumn>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>2013</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableRowColumn>Cash</TableRowColumn>
                        <TableRowColumn>5,423</TableRowColumn>
                        <TableRowColumn>7,421</TableRowColumn>
                        <TableRowColumn>8,134</TableRowColumn>
                        <TableRowColumn>3,787</TableRowColumn>
                        <TableRowColumn>2,687</TableRowColumn>
                    </TableRow>
                </TableBody>
                <TableFooter
                    style={{backgroundColor:'#FFF', maxHeight:'10px', fontWeight:'bold'}}
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRowColumn>Total Current Assets</TableRowColumn>
                    <TableRowColumn>5,547</TableRowColumn>
                    <TableRowColumn>7,877</TableRowColumn>
                    <TableRowColumn>9,700</TableRowColumn>
                    <TableRowColumn>4,154</TableRowColumn>
                    <TableRowColumn>3,552</TableRowColumn>
                </TableFooter>
            </Table>
        );
    }
}

export default BalanceCurrentAssets;
