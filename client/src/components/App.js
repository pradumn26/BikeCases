import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import LandingPage from './LandingPage';
import UsersSignup from './UsersSignup';
import PoliceSignup from './PoliceSignup';
import {fetchUser} from "../actions";

//react.js router
class App extends Component{
  render() {
      return (
          <div>
              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route exact path='/' component={LandingPage}/>

                      <Route exact path='/usersSignUp' component={UsersSignup}/>
                      <Route exact path='/policeSignUp' component={PoliceSignup}/>
                  </div>
              </BrowserRouter>
          </div>
      )
  }

  componentDidMount() {
      this.props.fetchUser();
  }
}

export default connect(null, {fetchUser})(App);
