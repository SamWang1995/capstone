import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class CashIn extends Component {
    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Cash In</TableHeaderColumn>
                        <TableHeaderColumn>2017</TableHeaderColumn>
                        <TableHeaderColumn>2016</TableHeaderColumn>
                        <TableHeaderColumn>2015</TableHeaderColumn>
                        <TableHeaderColumn>2014</TableHeaderColumn>
                        <TableHeaderColumn>2013</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>Cash at Beginning of Year</TableRowColumn>
                        <TableRowColumn>5,423</TableRowColumn>
                        <TableRowColumn>7,421</TableRowColumn>
                        <TableRowColumn>8,134</TableRowColumn>
                        <TableRowColumn>3,787</TableRowColumn>
                        <TableRowColumn>2,687</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Net Income</TableRowColumn>
                        <TableRowColumn>124</TableRowColumn>
                        <TableRowColumn>456</TableRowColumn>
                        <TableRowColumn>1,566</TableRowColumn>
                        <TableRowColumn>367</TableRowColumn>
                        <TableRowColumn>865</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Increase/Decrease from Income</TableRowColumn>
                        <TableRowColumn>5,547</TableRowColumn>
                        <TableRowColumn>7,877</TableRowColumn>
                        <TableRowColumn>9,700</TableRowColumn>
                        <TableRowColumn>4,154</TableRowColumn>
                        <TableRowColumn>3,552</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default CashIn;
