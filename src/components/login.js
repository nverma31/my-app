import React from "react";
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';

const fakeAuthCentralState = {
    isAuthenticated: false,
    authenticate(callback) {
      this.isAuthenticated = true;
      setTimeout(callback, 300);
    },
    signout(callback) {
      this.isAuthenticated = false;
      setTimeout(callback, 300);
    }
  };

  const AuthButton = withRouter(({ history }) => (
    fakeAuthCentralState.isAuthenticated ? (
      <p>
        Welcome to this amazing content! <button onClick={() => {
          fakeAuthCentralState.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  ));
class Login extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        redirectToReferrer: false
      };
    }
    
    login = () => {
      fakeAuthCentralState.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }));
      });
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { redirectToReferrer } = this.state;
  
      if (redirectToReferrer === true) {
        this.props.history.push(from.pathname);
      }
  
      return (
        <div>
            <AuthButton/>
            <ul>
              <li><Link to="/public">Public Content</Link></li>
              <li><Link to="/protected">Protected Content</Link></li>
            </ul>
          <p>Please, you need to be authenticated to to view this content</p>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }

  export default Login
