import React from 'react';
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import { isLoggedIn } from "src/helpers/login-helpers";

import List from 'src/views/list';
import Footer from 'src/components/footer';

class Main extends React.Component<RouteComponentProps<null>> {
  public render() {
    if (!isLoggedIn()) {
      return <Redirect to='/login' exact={true} />;
    }

    return (
      <div className="main">
        <List />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Main);