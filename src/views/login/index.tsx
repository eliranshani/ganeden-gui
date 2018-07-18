import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";

import { isLoggedIn, login } from "src/helpers/login";

class Index extends React.Component<RouteComponentProps<null>> {
  private handleLogin = async () => {
    await login('husam');
    this.props.history.push('/');
  };

  public render() {
    if (isLoggedIn()) {
      return null;
    }

    return (
      <div>
          <button onClick={this.handleLogin}>Login with facebook</button>
      </div>
    );
  }
}

export default withRouter(Index);