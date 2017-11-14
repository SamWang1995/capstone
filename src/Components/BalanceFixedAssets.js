import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class BalanceFixedAssets extends Component {
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
                        <TableHeaderColumn style={{color:'#FFF', fontSize:'20px', fontFamily:'Helvetica', fontWeight:'lighter'}}>Fixed Assets</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableRowColumn>Property</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Land</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Accumulated Depreciation</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Total Fixed Assets</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                        <TableRowColumn>0.0</TableRowColumn>
                    </TableRow>
                        <TableRow style={{fontWeight:'bold'}}>
                        <TableRowColumn>Total Assets</TableRowColumn>
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

export default BalanceFixedAssets;
