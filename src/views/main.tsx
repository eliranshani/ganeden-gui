import React from 'react';
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import { isLoggedIn } from "src/helpers/login-helpers";

class Main extends React.Component<RouteComponentProps<null>> {
  public render() {
    if (!isLoggedIn()) {
      return <Redirect to='/login' />;
    }

    return (
      <div className="main">
        Welcome to gan eden
      </div>
    )
  }
}

export default withRouter(Main);