import { combineReducers } from 'redux';
import dogsReducer from './dogs';
import breedsReducer from './breeds';


export default combineReducers({
  dogs: dogsReducer,
  breeds: breedsReducer,
});
