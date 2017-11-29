import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class BalanceHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    style={{backgroundColor:' #B71C1C', textAlign:'center'}}
                    titleStyle={{color:'#FFF', fontSize:'35px', fontFamily:'Helvetica', fontWeight:'lighter'}}
                    title="Balance Statement"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />

                <Drawer docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onClick={this.handleClose}>Menu Item 1</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default BalanceHeader;
