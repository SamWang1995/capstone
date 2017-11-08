import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Decrease extends Component {
    state = {
        showCheckboxes: false
    };

    render() {
        return (
            <Table>
                <TableHeader
                style={{backgroundColor:'#FF1744'}}
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn style={{color:'#000', fontSize:'30px'}}>Decrease</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableRowColumn>Principal Paid</TableRowColumn>
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
                    <TableRow>
                        <TableRowColumn>Unrecorded Expenses</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Investor Expense</TableRowColumn>
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

export default Decrease;
