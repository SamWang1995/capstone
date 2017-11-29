import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class Additions extends Component {
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
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>Additions</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableRowColumn>Depreciation Expense</TableRowColumn>
                        <TableRowColumn>0.00</TableRowColumn>
                        <TableRowColumn>0.00</TableRowColumn>
                        <TableRowColumn>0.00</TableRowColumn>
                        <TableRowColumn>0.00</TableRowColumn>
                        <TableRowColumn>0.00</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default Additions;
