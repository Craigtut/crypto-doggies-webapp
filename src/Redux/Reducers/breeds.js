import Immutable from 'seamless-immutable';
import { types } from '../Actions/breeds';

const initState = Immutable({
  loading: false,
  error: false,
});

export default function breedsReducer(state = initState, action) {
  switch (action.type) {
    case types.GET_BREAD_REQUEST:
      return state.set('loading', true);
    case types.GET_BREAD_SUCCESS:
      return state.merge({ loading: false, error: false, data: action.payload });
    case types.GET_BREAD_FAILURE:
      return state.merge({ loading: false, error: action.payload });
    default:
      return state;
  }
}
