import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { isLoggedIn, logout } from "src/helpers/login";
import logo from 'src/logo.svg';

class Index extends React.Component<RouteComponentProps<null>> {
  private handleLogout = () => {
    logout();
    this.props.history.push('/login');
  };


  public render() {
    let loggedIn = false;
    if (isLoggedIn()) {
      loggedIn = true;
    }

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to GanEden</h1>
        {
          loggedIn && <button onClick={this.handleLogout}>Logout</button>
        }
      </header>
    );
  }
}

export default withRouter(Index);