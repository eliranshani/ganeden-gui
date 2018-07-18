import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { isLoggedIn, loginHelpers } from 'src/helpers/login-helpers';

import './login.css';
import logo from "src/logo.png";

class Index extends React.Component<RouteComponentProps<null>> {
  private handleLogin = async () => {
    await loginHelpers('husam');
    this.props.history.push('/');
  };

  public render() {
    if (isLoggedIn()) {
      return null;
    }

    return (
      <div className="login-page">
        <div className="logo-container">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <button onClick={this.handleLogin} className="login-button">Login with facebook</button>
      </div>
    );
  }
}

export default withRouter(Index);