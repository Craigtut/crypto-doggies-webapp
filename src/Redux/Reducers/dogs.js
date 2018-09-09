import Immutable from 'seamless-immutable';
import { types } from '../Actions/dogs';

const initState = Immutable({});

export default function dogsReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_DOGS_REQUEST:
      return state.merge([action.breedId], { loading: true, error: false });
    case types.GET_DOGS_SUCCESS:
      return state.setIn([action.breedId], { loading: false, data: action.payload, error: false });
    case types.GET_DOGS_FAILURE:
      return state.merge([action.breedId], { loading: false, error: action.payload });
    default:
      return state;
  }
}
