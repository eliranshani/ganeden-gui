import React from 'react';
import {Redirect, RouteComponentProps, withRouter, Route, Switch} from "react-router-dom";
import { isLoggedIn } from "src/helpers/login-helpers";

import List from 'src/views/list';
import Match from 'src/views/match/match';
import Footer from 'src/components/footer';

class Main extends React.Component<RouteComponentProps<null>> {
  public render() {
    if (!isLoggedIn()) {
      return <Redirect to='/login' exact={true} />;
    }

    return (
      <div className="main">
        <Switch>
          <Route exact={true} path='/'>
            <List history={this.props.history} />
          </Route>
          <Route exact={true} path='/match'>
            <Match />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Main);