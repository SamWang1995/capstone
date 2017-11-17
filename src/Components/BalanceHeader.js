import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import * as Colors from 'material-ui/styles/colors';

class HeaderBar extends Component {
    render() {
        return (
            <AppBar
                style={{backgroundColor:' #B71C1C', textAlign:'center'}}
                titleStyle={{color:'#FFF', fontSize:'35px', fontFamily:'Helvetica', fontWeight:'lighter'}}
                title="Balance Statement"
            />
        );
    }
}

export default HeaderBar;
