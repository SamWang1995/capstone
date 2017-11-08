import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';

class HeaderBar extends Component {
    render() {
        return (
            <AppBar                
                style={{backgroundColor:'#76FF03', textAlign:'center'}}
                titleStyle={{color:'#000', fontSize:'35px'}}
                title="Cash Flow Statement"           
            />
        );
    }
}

export default HeaderBar;
