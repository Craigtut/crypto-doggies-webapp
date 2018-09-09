import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './Reducers';

const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default store;