import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginPage from './LoginPage';
import PoliceHome from './PoliceHome';
import UsersHome from './UsersHome';

class LandingPage extends Component {
    render() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case false:
                return <LoginPage/>;
            case null:
                return null;
            default:
                if (this.props.auth.authType == 'police-auth')
                    return <PoliceHome/>;
                else
                    return <UsersHome/>;
        }
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(LandingPage);