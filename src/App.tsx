import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Login from 'src/views/login';
import Header from 'src/components/header';
import Main from 'src/views/main';

import './App.css';

const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Route exact={true} path='/login' component={Login} />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
