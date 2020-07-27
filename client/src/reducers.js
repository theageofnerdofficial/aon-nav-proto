/* Imports:
 *********************************************************/
import {
  DATA_COMBINE,
  DATA_FORMAT_REDDIT,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_FORMAT_TWEETS,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  UI_TOGGLE_LIGHTS,
  USERS_GET_FAILURE,
  USERS_GET_PENDING,
  USERS_GET_SUCCESS,
} from './constants';

import utils from './Components/Utils/utils/utils';

/* Visuals — e.g. lights on/off for dark & light mode:
 *********************************************************/
const ui = {
  lightsOff: false,
};

export const uiReducer = (state = ui, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LIGHTS:
      console.log(state.lightsOff);
      return Object.assign({}, state, { lightsOff: !state.lightsOff });
    default:
      return state;
  }
};

/* Data — setting the state for info obtained from APIs:
 *********************************************************/
const data = {
  allData: [],
  dataPending: false,
  redditDataFormatted: [],
  redditDataRaw: [],
  tweetDataFormatted: [],
  tweetDataRaw: [],
};

export const dataReducer = (state = data, action = {}) => {
  switch (action.type) {
    case DATA_COMBINE:
      let newAllData = state.redditDataFormatted.concat(
        state.tweetDataFormatted
      );
      newAllData = utils.arr.randomize(newAllData);
      return Object.assign({}, state, { allData: newAllData });
    case DATA_REQUEST_FAILURE:
      console.log('Data request failure');
      return Object.assign({}, state, { dataPending: false });
    case DATA_REQUEST_PENDING:
      console.log('Data request pending');
      return Object.assign({}, state, { dataPending: true });
    case DATA_REQUEST_SUCCESS:
      console.log('Data request success');
      let newState = { dataPending: false };
      if (action.source === SOURCE_TWITTER) {
        newState.tweetDataRaw = action.payload;
      } else if (action.source === SOURCE_REDDIT) {
        newState.redditDataRaw = action.payload.data.children.slice(
          0,
          action.count
        );
      }
      return Object.assign({}, state, newState);
    case DATA_FORMAT_REDDIT:
      return Object.assign({}, state, {
        redditDataFormatted: action.payload,
      });
    case DATA_FORMAT_TWEETS:
      return Object.assign({}, state, {
        tweetDataFormatted: action.payload,
      });
    default:
      return state;
  }
};

/* Users:
 *********************************************************/
const users = {
  list: [],
  usersPending: false,
};

export const usersReducer = (state = users, action = {}) => {
  switch (action.type) {
    case USERS_GET_PENDING:
      return Object.assign({}, state, {
        usersPending: true,
      });
    case USERS_GET_FAILURE:
      return Object.assign({}, state, {
        usersPending: false,
      });
    case USERS_GET_SUCCESS:
      return Object.assign({}, state, {
        list: action.payload,
        usersPending: false,
      });
    default:
      return state;
  }
};
