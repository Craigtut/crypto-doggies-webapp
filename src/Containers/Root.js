import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Routes from './Routes';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}
