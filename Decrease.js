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
                style={{backgroundColor:'#81D4FA'}}
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>Decrease</TableHeaderColumn>
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
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Cash Increase/Decrease</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Cash at End of the Year</TableRowColumn>
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
