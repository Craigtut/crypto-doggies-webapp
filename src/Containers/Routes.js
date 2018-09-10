import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Route containers
import Landing from './Landing';
import ErrorPage from './ErrorPage';
import BreedGrid from './BreedGrid';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/breed/:breed" component={BreedGrid} />
        <Route exact path="/breed/:breed/sub/:subBreed" component={BreedGrid} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}
