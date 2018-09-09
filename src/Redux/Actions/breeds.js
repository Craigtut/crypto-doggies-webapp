import { getBreeds } from '../../Services/API';

export const types = {
  GET_BREAD_REQUEST: 'GET_BREAD_REQUEST',
  GET_BREAD_SUCCESS: 'GET_BREAD_SUCCESS',
  GET_BREAD_FAILURE: 'GET_BREAD_FAILURE',
};

function getBreedsRequest() {
  return {
    type: types.GET_BREAD_REQUEST,
  };
}

function getBreedsSuccess(breeds) {
  return {
    type: types.GET_BREAD_SUCCESS,
    payload: breeds,
  };
}

function getBreedsFailure(error) {
  return {
    type: types.GET_BREAD_FAILURE,
    payload: error,
  };
}

export function getBreedsAction() {
  return (dispatch) => {
    dispatch(getBreedsRequest());
    getBreeds().then((success) => {
      dispatch(getBreedsSuccess(success));
    }).catch((error) => {
      dispatch(getBreedsFailure(error));
    });
  };
}
