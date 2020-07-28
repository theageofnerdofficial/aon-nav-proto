/* Imports:
 *********************************************************/
import {
  DATA_COMBINE,
  DATA_FORMAT_REDDIT,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_FORMAT_TWEETS,
  MODAL_LOGIN_FORM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  UI_TOGGLE_LIGHTS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USERS_GET_FAILURE,
  USERS_GET_PENDING,
  USERS_GET_SUCCESS,
} from './constants';

import utils from './Components/Utils/utils/utils';
import loginCreds from './config/loginCreds';
import settings from './config/settings';

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

/* Data — setting the state for info obtained from APIs:
 *********************************************************/
const modal = {
  mode: MODAL_LOGIN_FORM,
};

export const modalReducer = (state = modal, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* Users:
 *********************************************************/
const users = {
  list: [],
  userAuth: {},
  userLoginPending: false,
  usersPending: false,
};

export const usersReducer = (state = users, action = {}) => {
  switch (action.type) {
    case USER_LOGOUT:
      // delete all local storage token stuff
      return Object.assign({}, state, {
        userAuth: {},
      });
    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        userLoginPending: false,
      });
    case USER_LOGIN_PENDING:
      return Object.assign({}, state, {
        userLoginPending: true,
      });

    case USER_LOGIN_SUCCESS:
      localStorage.setItem(settings.localStorage.token, action.payload.token);
      loginCreds.storageItem.set({
        id: action.payload.id,
        username: action.payload.username,
      });
      return Object.assign({}, state, {
        userAuth: action.payload,
        userLoginPending: false,
      });
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
