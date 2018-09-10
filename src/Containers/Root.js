import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Routes from './Routes';
import { Breakpoints, Colors } from '../Theme';

import BreedNavigation from './BreedNavigation';


export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
    this.windowResized = this.windowResized.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResized);
  }

  windowResized(e) {
    this.setState({ width: e.target.innerWidth });
  }

  render() {
    const { width } = this.state;

    return (
      <Provider store={store}>
        <Router>
          <div style={{ display: 'flex' }}>
            <BreedNavigation style={{ zIndex: 1 }} mobile={(width < Breakpoints.sm)} />
            <div style={{ display: 'flex', flex: 4, padding: '36px', background: Colors.darkGrey, zIndex: '0' }}>
              <Routes />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
