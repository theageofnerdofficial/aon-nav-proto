/* Imports:
 ******************************************************/
import {
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_REDDIT_FORMAT,
  DATA_TWEETS_FORMAT,
} from './constants';

/* Data actions:
 ******************************************************/

/* 
 fetch('https://www.reddit.com/r/nintendo/hot.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  });
  */
export const dataRequest = (o) => (dispatch) => {
  dispatch({ type: DATA_REQUEST_PENDING });

  const url = () => {
    if (o.src === 'twitter') {
      return `/api/request_data_${o.src}/${o.endpoint}/${o.user}/${o.q}/${o.count}`;
    } else if (o.src === 'reddit') {
      return `https://www.reddit.com/r/${o.user}/${o.endpoint}.json`;
    }
  };
  fetch(url(), {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DATA_REQUEST_SUCCESS,
        payload: data,
        source: o.src,
        count: o.count,
      });
    })
    .catch((error) => dispatch({ type: DATA_REQUEST_FAILURE, payload: error }));
};

export const dataRedditFormat = (o) => ({
  type: DATA_REDDIT_FORMAT,
  payload: o,
});

//
export const dataTweetsFormat = (o) => ({
  type: DATA_TWEETS_FORMAT,
  payload: o,
});
