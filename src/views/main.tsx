import React from 'react';
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import { isLoggedIn } from "src/helpers/login";

class Main extends React.Component<RouteComponentProps<null>> {
  public render() {
    if (!isLoggedIn()) {
      return <Redirect to='/login' />;
    }

    return (
      <div>
        Welcome to gan eden
      </div>
    )
  }
}

export default withRouter(Main);