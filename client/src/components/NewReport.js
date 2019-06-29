import React, {Component} from 'react';

class NewReport extends Component{
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return (
                    <div id="users_signup">
                        <div id="user_signup_card">
                            <h1>
                                New Report
                            </h1>

                            <form id="f5" method="POST" action="/usersSignup">
                                <span id="f5_error" className="error_span"/>
                                <input id="f5_reg_no" name="reg_no" type="text" placeholder="Registration Number"/>
                                <input id="f5_model" name="model" type="text" placeholder="Bike model"/>
                                <input id="f5_color" name="color" type="text" placeholder="Color of bike"/>
                                <input id="f4_area" name="area" type="text" placeholder="Area in which bike stolen"/>
                                <button className="login_button" onClick={this.onSubmit}>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                );
            default:
                return <Redirect to="/"/>;
        }
    }

    onSubmit(event) {
        event.preventDefault();
        let regNo = document.getElementById('f5_req_no').value.trim();
        let model = document.getElementById('f5_model').value.trim();
        let color = document.getElementById('f5_color').value.trim();
        let area = document.getElementById('f5_area').value.trim();

        if (!regNo || !model || !color || !area)
            document.getElementById('f5_error').innerText = 'Some of the fields are empty!!';
        else
            document.getElementById('f5').submit();
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(NewReport);