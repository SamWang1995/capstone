import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class HeaderBar extends Component {
    render() {
        return (
            <AppBar
                title="Cash Flow Statement"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    }
}

export default HeaderBar;
