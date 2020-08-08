/* Imports:
 *********************************************************/
import {
  DATA_COMBINE,
  DATA_FORMAT_REDDIT,
  DATA_FORMAT_TWEETS,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  FLASH_MSG_HIDE,
  FLASH_MSG_SHOW,
  FLASH_MSG_UPDATE,
  MODAL_LOGIN_FORM,
  SOURCE_ADD_FAILURE,
  SOURCE_ADD_FORM_CATEGORY,
  SOURCE_ADD_FORM_CATEGORY_GAMING,
  SOURCE_ADD_FORM_FILTER,
  SOURCE_ADD_FORM_SELECT,
  SOURCE_ADD_PENDING,
  SOURCE_ADD_SUCCESS,
  SOURCE_GETBYID_FAILURE,
  SOURCE_GETBYID_PENDING,
  SOURCE_GETBYID_SUCCESS,
  SOURCE_REDDIT,
  SOURCE_REMOVE,
  SOURCE_TWITTER,
  SOURCES_RESET_FORM,
  SOURCES_COMBINE,
  SOURCES_REDDIT_GET_FAILURE,
  SOURCES_REDDIT_GET_PENDING,
  SOURCES_REDDIT_GET_SUCCESS,
  SOURCES_TWITTER_GET_FAILURE,
  SOURCES_TWITTER_GET_PENDING,
  SOURCES_TWITTER_GET_SUCCESS,
  UI_TOGGLE_LIGHTS,
  USER_AUTH_FAILURE,
  USER_AUTH_PENDING,
  USER_AUTH_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USERS_GET_FAILURE,
  USERS_GET_PENDING,
  USERS_GET_SUCCESS,
} from './constants';

import utils from './Components/Utils/utils/utils';
import settings from './config/settings';
import loginCreds from './config/loginCreds';

//
let stateCp;

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
      return Object.assign({}, state, {
        allData: utils.arr.randomize([
          ...state.redditDataFormatted,
          ...state.tweetDataFormatted,
        ]),
      });
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

/* Data — setting the state for info obtained from APIs:
 *********************************************************/
const flashMsg = {
  msg: String,
  showFlashMsg: false,
  style: 'success',
};

export const flashMsgReducer = (state = flashMsg, action = {}) => {
  switch (action.type) {
    case FLASH_MSG_SHOW:
      return Object.assign({}, state, { showFlashMsg: true });
    case FLASH_MSG_HIDE:
      return Object.assign({}, state, { showFlashMsg: false });
    case FLASH_MSG_UPDATE:
      return Object.assign({}, state, {
        msg: action.payload.msg,
        style: action.payload.style,
      });
    default:
      return state;
  }
};

/* Users:
 *********************************************************/
const users = {
  username: String,
  password: String,
  email: String,
  accessLevel: 0,
  list: [],
  loggedIn: false,
  userAuth: {},
  userLoginPending: false,
  usersPending: false,
  authenticationPending: false,
  authenticationSuccess: false,
  authenticationFailure: false,
};

export const usersReducer = (state = users, action = {}) => {
  switch (action.type) {
    case USER_AUTH_FAILURE:
      stateCp = state;
      stateCp.authenticationPending = false;
      stateCp.authenticationSuccess = false;
      return Object.assign({}, state, stateCp);
    case USER_AUTH_PENDING:
      return Object.assign({}, state, { authenticationPending: true });
    case USER_AUTH_SUCCESS:
      stateCp = state;
      stateCp.authenticationPending = false;
      stateCp.authenticationSuccess = true;
      stateCp.id = action.payload._id;
      stateCp.location = action.payload.location;
      stateCp.email = action.payload.email;
      stateCp.username = action.payload.username;
      stateCp.accessLevel = action.payload.accessLevel;
      stateCp.likes = action.payload.likes;
      stateCp.dislikes = action.payload.dislikes;
      stateCp.submissions = action.payload.quizSubmissions;
      stateCp.loggedIn = action.payload.auth === false ? false : true;
      return Object.assign({}, state, stateCp);
    case USER_LOGOUT:
      // delete all local storage token stuff
      localStorage.removeItem(settings.localStorage.token);
      localStorage.removeItem(settings.localStorage.login.id);
      localStorage.removeItem(settings.localStorage.login.username);
      window.location.href = '/';
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
      window.location.href = '/';
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

/* Source form:
 *********************************************************/
const sourceAddForm = {
  category: null,
  categoryGaming: null,
  service: String,
  filter: String,
  sourceAddPending: false,
  sourceRedditGetPending: false,
  sourceTwitterGetPending: false,
  sourcesCombined: null,
  sourcesRedditData: null,
  sourcesTwitterData: null,
  showRedditPeriod: true,
  sourceByIdPending: false,
  sourceById: {},
};

export const sourceReducer = (state = sourceAddForm, action = {}) => {
  switch (action.type) {
    case SOURCES_COMBINE:
      //return Object.assign({}, state);
      return Object.assign({}, state, {
        sourcesCombined: [
          ...state.sourcesRedditData,
          ...state.sourcesTwitterData,
        ],
      });
    case SOURCES_RESET_FORM:
      return Object.assign({}, state, {
        category: null,
        categoryGaming: null,
        service: String,
        filter: String,
        sourceAddPending: false,
        sourceRedditGetPending: false,
        sourceTwitterGetPending: false,
        sourcesCombined: null,
        sourcesRedditData: null,
        sourcesTwitterData: null,
        showRedditPeriod: true,
        sourceByIdPending: false,
        sourceById: {},
      });
    case SOURCES_TWITTER_GET_FAILURE:
      return Object.assign({}, state, {
        sourceTwitterGetPending: false,
      });
    case SOURCES_TWITTER_GET_PENDING:
      return Object.assign({}, state, {
        sourceTwitterGetPending: true,
      });
    case SOURCES_TWITTER_GET_SUCCESS:
      return Object.assign({}, state, {
        sourcesTwitterData: action.payload,
        sourceTwitterGetPending: false,
      });
    case SOURCES_REDDIT_GET_FAILURE:
      return Object.assign({}, state, {
        sourceRedditGetPending: false,
      });
    case SOURCES_REDDIT_GET_PENDING:
      return Object.assign({}, state, {
        sourceRedditGetPending: true,
      });
    case SOURCES_REDDIT_GET_SUCCESS:
      return Object.assign({}, state, {
        sourcesRedditData: action.payload,
        sourceRedditGetPending: false,
      });
    case SOURCE_ADD_FAILURE:
      return Object.assign({}, state, {
        sourceAddPending: false,
      });
    case SOURCE_ADD_PENDING:
      return Object.assign({}, state, {
        sourceAddPending: true,
      });
    case SOURCE_ADD_SUCCESS:
      return Object.assign({}, state, {
        sourceAddPending: false,
      });
    case SOURCE_ADD_FORM_CATEGORY:
      return Object.assign({}, state, {
        category: action.payload,
      });
    case SOURCE_ADD_FORM_CATEGORY_GAMING:
      return Object.assign({}, state, {
        categoryGaming: action.payload,
      });
    case SOURCE_ADD_FORM_FILTER:
      return Object.assign({}, state, {
        filter: action.payload,
      });
    case SOURCE_ADD_FORM_SELECT:
      return Object.assign({}, state, {
        service: action.payload,
      });
    case SOURCE_REMOVE:
      const { sourceId } = action.payload;
      const sourcesCombinedCp = state.sourcesCombined.filter((source) => {
        return source._id !== sourceId;
      });
      return Object.assign({}, state, {
        sourcesCombined: sourcesCombinedCp,
      });
    case SOURCE_GETBYID_FAILURE:
      return Object.assign({}, state, {
        sourceByIdPending: false,
      });
    case SOURCE_GETBYID_PENDING:
      return Object.assign({}, state, {
        sourceByIdPending: true,
      });
    case SOURCE_GETBYID_SUCCESS:
      return Object.assign({}, state, {
        sourceById: action.payload,
        sourceByIdPending: false,
      });
    default:
      return state;
  }
};

/* Visuals — e.g. lights on/off for dark & light mode.
   Here we use localStorage item so on page refresh when
   stage is lost we can persist the user's preference:
 *********************************************************/
const ui = {
  lightsOff:
    loginCreds.storageItem.getDarkmode() !== null
      ? loginCreds.storageItem.getDarkmode() === 'false'
        ? false
        : true
      : false,
};

export const uiReducer = (state = ui, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LIGHTS:
      localStorage.setItem(settings.localStorage.darkmode, !state.lightsOff);
      return Object.assign({}, state, { lightsOff: !state.lightsOff });
    default:
      return state;
  }
};
