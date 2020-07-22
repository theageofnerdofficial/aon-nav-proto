/* Imports:
 ******************************************************/
import {
  DATA_COMBINE,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_FORMAT_REDDIT,
  DATA_FORMAT_TWEETS,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  UI_TOGGLE_LIGHTS,
} from './constants';

/* Data actions:
 ******************************************************/
//
export const dataCombine = () => ({
  type: DATA_COMBINE,
});

//
export const dataFormatReddit = (o) => ({
  type: DATA_FORMAT_REDDIT,
  payload: o,
});

//
export const dataFormatTweets = (o) => ({
  type: DATA_FORMAT_TWEETS,
  payload: o,
});

//
export const dataRequest = (o) => (dispatch) => {
  dispatch({ type: DATA_REQUEST_PENDING });
  const url = () => {
    if (o.src === SOURCE_TWITTER) {
      return `/api/request_data_twitter/${o.endpoint}/${o.user}/${o.q}/${o.count}`;
    } else if (o.src === SOURCE_REDDIT) {
      return `https://www.reddit.com/r/${o.user}/${o.endpoint}.json`;
    }
  };
  fetch(url(), {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        count: o.count,
        payload: data,
        source: o.src,
        type: DATA_REQUEST_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: DATA_REQUEST_FAILURE, payload: error }));
};

/* UI actions:
 ******************************************************/
//
export const uiToggleLights = (o) => ({
  type: UI_TOGGLE_LIGHTS,
  payload: o,
});
