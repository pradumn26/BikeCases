import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../stylesheets/header.css'

class Header extends Component {
    render() {
        switch (this.props.auth) {
            case false:
                return null;
            case null:
                return null;
            default:
                if (this.props.auth.authType == 'police-auth')
                    return (
                        <nav id="header" className="navbar navbar-expand-sm navbar-light">
                            <Link className="navbar-brand" to="/">Bike Cases</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/myCases">Cases</Link>
                                    </li>
                                </ul>
                                <div className="form-inline my-2 my-lg-0">
                                    <a href="/auth/logout">Logout</a>
                                </div>
                            </div>
                        </nav>
                    );
                else
                    return (
                        <nav id="header" className="navbar navbar-expand-sm navbar-light">
                            <Link className="navbar-brand" to="/">MindPeers</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/caseHistory">Case History</Link>
                                    </li>
                                </ul>
                                <div className="form-inline my-2 my-lg-0">
                                    <a href="/auth/logout">Logout</a>
                                </div>
                            </div>
                        </nav>
                    );
        }
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);