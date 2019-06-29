import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../stylesheets/loginpage.css';

class LoginPage extends Component {
    constructor() {
        super();

        this.userSignUpButton = this.userSignUpButton.bind(this);
        this.policeSignUpButton = this.policeSignUpButton.bind(this);
        this.userLoginButton = this.userLoginButton.bind(this);
        this.policeLoginButton = this.policeLoginButton.bind(this);
    }

    render() {
        return (
            <div id="login_page" className="row">
                <div id="users_login" className="col-sm-5">
                    <h1>
                        User Login
                    </h1>

                    <form id="f1" method="POST" action="/usersLogin">
                        <input id="f1_email" name="email" type="email" placeholder="Email"/>
                        <span id="f1_email_error" className="error_span"/>
                        <input id="f1_password" name="password" type="password" placeholder="Password"/>
                        <span id="f1_password_error" className="error_span"/>
                        <button className="login_button" onClick={this.userLoginButton}>LOG IN</button>
                        <button onClick={this.userSignUpButton}>SIGN UP</button>
                    </form>
                </div>

                <div id="doctors_login" className="col-sm-5">
                    <h1>
                        Police Login
                    </h1>

                    <form id="f2" method="POST" action="/policeLogin">
                        <input id="f2_email" name="email" type="email" placeholder="Email"/>
                        <span id="f2_email_error" className="error_span"/>
                        <input id="f2_password" name="password" type="password" placeholder="Password"/>
                        <span id="f2_password_error" className="error_span"/>
                        <button className="login_button" onClick={this.policeLoginButton}>LOG IN</button>
                        <button onClick={this.policeSignUpButton}>SIGN UP</button>
                    </form>
                </div>
            </div>
        );
    }

    userSignUpButton(event) {
        event.preventDefault();
        this.props.history.push('/usersSignUp');
    }

    policeSignUpButton(event) {
        event.preventDefault();
        this.props.history.push('/policeSignUp');
    }

    userLoginButton(event) {
        event.preventDefault();
        let email = document.getElementById('f1_email').value.trim();
        let password = document.getElementById('f1_password').value.trim();

        let emptyError = 'This field cannot be empty';
        let doSubmit = true;

        if (email == '') {
            document.getElementById('f1_email_error').innerText = emptyError;
            doSubmit = false;
        }
        if (password == '') {
            document.getElementById('f1_password_error').innerText = emptyError;
            doSubmit = false;
        }

        if (doSubmit)
            document.getElementById('f1').submit();
    }

    policeLoginButton(event) {
        event.preventDefault();
        let email = document.getElementById('f2_email').value.trim();
        let password = document.getElementById('f2_password').value.trim();

        let emptyError = 'This field cannot be empty';
        let doSubmit = true;

        if (email == '') {
            document.getElementById('f2_email_error').innerText = emptyError;
            doSubmit = false;
        }
        if (password == '') {
            document.getElementById('f2_password_error').innerText = emptyError;
            doSubmit = false;
        }

        if (doSubmit)
            document.getElementById('f2').submit();
    }
}

export default withRouter(LoginPage);