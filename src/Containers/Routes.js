import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Route containers
import Home from './Home';
import ErrorPage from './ErrorPage';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}
