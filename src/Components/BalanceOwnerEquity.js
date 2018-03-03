import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class BalanceOwnerEquity extends Component {
    state = {
        showCheckboxes: false
    };

    render() {
        return (
            <Table>
                <TableHeader
                style={{backgroundColor:'#E53935'}}
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>Owner Equity</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableRowColumn>Owner Capital</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Investor Capital</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Net Income</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Investor Payment</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Tax Loss</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Withdraw</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Total Owner Equity</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Total Liabilities and Owner Equity</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default BalanceOwnerEquity;
