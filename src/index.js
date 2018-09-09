import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Root from './Containers/Root';

import './styles.scss';

ReactDOM.render(<Root />, document.querySelector('#root'));  // eslint-disable-line
