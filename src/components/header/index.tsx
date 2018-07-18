import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { isLoggedIn } from "src/helpers/login-helpers";

import logo from "src/logo.png";

class Index extends React.Component<RouteComponentProps<null>> {
  public render() {
    if (!isLoggedIn()) {
      return null;
    }

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default withRouter(Index);