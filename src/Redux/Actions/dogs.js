import { getDogs } from '../../Services/API';

export const types = {
  GET_DOGS_REQUEST: 'GET_DOGS_REQUEST',
  GET_DOGS_SUCCESS: 'GET_DOGS_SUCCESS',
  GET_DOGS_FAILURE: 'GET_DOGS_FAILURE',
};

function getDogsRequest(breedId) {
  return {
    type: types.GET_DOGS_REQUEST,
    breedId,
  };
}

function getDogsSuccess(breedId, dogs) {
  return {
    type: types.GET_DOGS_SUCCESS,
    payload: dogs,
    breedId,
  };
}

function getDogsFailure(breedId, error) {
  return {
    type: types.GET_DOGS_FAILURE,
    payload: error,
    breedId,
  };
}

export function getDogsAction(breed, subBreed = null) {
  return (dispatch) => {
    const id = (subBreed) ? `${breed}-${subBreed}` : breed;

    dispatch(getDogsRequest(id));
    getDogs(breed, subBreed).then((success) => {
      dispatch(getDogsSuccess(id, success));
    }).catch((error) => {
      dispatch(getDogsFailure(id, error));
    });
  };
}
