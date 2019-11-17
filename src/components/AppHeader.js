import React, { Component } from 'react';
import i18n from '../config/i18n';

class Header extends Component {
    state = {

    }

    render () {
        return (<div className="header">
            <div className="login">
                { i18n.login }
            </div>
        </div>)
    }
}

export default Header;