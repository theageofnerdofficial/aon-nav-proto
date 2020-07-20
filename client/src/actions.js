/* Imports:
 ******************************************************/
import {
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_TWEETS_FORMAT,
} from './constants';

/* Data actions:
 ******************************************************/
export const dataRequest = (o) => (dispatch) => {
  dispatch({ type: DATA_REQUEST_PENDING });
  fetch(
    `/api/request_data_${o.src}/${o.endpoint}/${o.user}/${o.q}/${o.count}`,
    {
      method: 'GET',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: DATA_REQUEST_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: DATA_REQUEST_FAILURE, payload: error }));
};

//
export const dataTweetsFormat = (o) => ({
  type: DATA_TWEETS_FORMAT,
  payload: o,
});
