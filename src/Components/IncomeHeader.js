import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import * as Colors from 'material-ui/styles/colors';

class IncomeHeader extends Component {
    render() {
        return (
            <AppBar
                style={{backgroundColor:'#FBE617', textAlign:'center'}}
                titleStyle={{color:'#FFF', fontSize:'35px', fontFamily:'Helvetica', fontWeight:'lighter'}}
                title="Income Statement"
            />
        );
    }
}

export default IncomeHeader;
