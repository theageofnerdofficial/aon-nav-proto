/* Imports:
 *********************************************************/
import {
  DATA_REDDIT_FORMAT,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_TWEETS_FORMAT,
} from './constants';

/* Visuals — e.g. lights on/off for dark & light mode:
 *********************************************************/
const visuals = {
  lightsOff: false,
};

/*
export const visualsReducer = (state = visuals, action = {}) => {
  switch (action.type) {
    case TOGGLE_LIGHTS:
      return Object.assign({}, state, { lightsOff: !this.state.lightsOff });
    default:
      return state;
  }
};*/

/* Data — setting the state for info obtained from APIs:
 *********************************************************/
const data = {
  dataPending: false,
  allData: [],
  tweetDataFormatted: [],
  tweetDataRaw: [],
  redditDataFormatted: [],
  redditDataRaw: [],
};

// .... switch isn't working... just does first
export const dataReducer = (state = data, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case DATA_REQUEST_FAILURE:
      console.log('Data failure');
      return Object.assign({}, state, { dataPending: false });

    case DATA_REQUEST_PENDING:
      console.log('Data pending');
      return Object.assign({}, state, { dataPending: true });

    case DATA_REDDIT_FORMAT:
      return Object.assign({}, state, {
        redditDataFormatted: action.payload,
        allData: [...action.payload],
      });
    case DATA_TWEETS_FORMAT:
      return Object.assign({}, state, {
        tweetDataFormatted: action.payload,
        allData: [...action.payload],
      });

    case DATA_REQUEST_SUCCESS:
      console.log('Success');
      let newState = { dataPending: false };
      if (action.source === 'twitter') {
        newState.tweetDataRaw = action.payload;
      } else if (action.source === 'reddit') {
        newState.redditDataRaw = action.payload.data.children.slice(
          0,
          action.count
        );
      }
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};
