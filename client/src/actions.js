/* Imports:
 ******************************************************/
import {
  DATA_COMBINE,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  DATA_FORMAT_REDDIT,
  DATA_FORMAT_TWEETS,
  SOURCE_ADD_FAILURE,
  SOURCE_ADD_PENDING,
  SOURCE_ADD_SUCCESS,
  SOURCE_ADD_FORM_CATEGORY,
  SOURCE_ADD_FORM_CATEGORY_GAMING,
  SOURCE_ADD_FORM_FILTER,
  SOURCE_ADD_FORM_SELECT,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCES_REDDIT_GET_FAILURE,
  SOURCES_REDDIT_GET_PENDING,
  SOURCES_REDDIT_GET_SUCCESS,
  SOURCES_TWITTER_GET_FAILURE,
  SOURCES_TWITTER_GET_PENDING,
  SOURCES_TWITTER_GET_SUCCESS,
  SOURCES_RESET_FORM,
  UI_TOGGLE_LIGHTS,
  USER_AUTH_FAILURE,
  USER_AUTH_PENDING,
  USER_AUTH_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USERS_GET_FAILURE,
  USERS_GET_PENDING,
  USERS_GET_SUCCESS,
  SOURCES_COMBINE,
} from './constants';

// :
import settings from './config/settings';

/* Data actions:
 ******************************************************/
export const dataCombine = () => ({
  type: DATA_COMBINE,
});

export const dataFormatReddit = (o) => ({
  type: DATA_FORMAT_REDDIT,
  payload: o,
});

export const dataFormatTweets = (o) => ({
  type: DATA_FORMAT_TWEETS,
  payload: o,
});

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

/* Source add form actions:
 ******************************************************/
export const sourceAdd = (source) => (dispatch) => {
  let url;
  switch (source.service) {
    case SOURCE_REDDIT:
      url = '/source/reddit/add';
      break;
    case SOURCE_TWITTER:
      url = '/source/twitter/add';
      break;
    default:
      url = '/source/add';
  }
  dispatch({ type: SOURCE_ADD_PENDING });
  fetch(url, {
    body: JSON.stringify(source),
    headers: settings.network.headers,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: SOURCE_ADD_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: SOURCE_ADD_FAILURE, payload: error }));
};

export const sourceAddFormCategory = (category) => ({
  type: SOURCE_ADD_FORM_CATEGORY,
  payload: category,
});

export const sourceAddFormCategoryGaming = (category) => ({
  type: SOURCE_ADD_FORM_CATEGORY_GAMING,
  payload: category,
});

export const sourceAddFormFilter = (filter) => ({
  type: SOURCE_ADD_FORM_FILTER,
  payload: filter,
});

export const sourceAddFormSelect = (source) => ({
  type: SOURCE_ADD_FORM_SELECT,
  payload: source,
});

export const sourcesCombine = () => ({
  type: SOURCES_COMBINE,
});

//
export const sourcesGetReddit = () => (dispatch) => {
  dispatch({ type: SOURCES_REDDIT_GET_PENDING });
  fetch('/sources/reddit/get', {
    headers: settings.network.headers,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: SOURCES_REDDIT_GET_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCES_REDDIT_GET_FAILURE, payload: error })
    );
};

export const sourcesGetTwitter = () => (dispatch) => {
  dispatch({ type: SOURCES_TWITTER_GET_PENDING });
  fetch('/sources/twitter/get', {
    headers: settings.network.headers,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: SOURCES_TWITTER_GET_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCES_TWITTER_GET_FAILURE, payload: error })
    );
};

export const sourcesReset = () => ({
  type: SOURCES_RESET_FORM,
});

/* UI actions:
 ******************************************************/
export const uiToggleLights = (o) => ({
  type: UI_TOGGLE_LIGHTS,
  payload: o, // REMOVE???
});

/* User actions:
 ******************************************************/
export const userAuthenticate = (o) => (dispatch) => {
  const headersCp = settings.network.headers;
  headersCp['x-access-token'] = localStorage.getItem(
    settings.localStorage.token
  );
  dispatch({ type: USER_AUTH_PENDING });
  fetch('/user/authenticate', {
    method: 'GET',
    headers: headersCp,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Cannot authenticate');
      }
    })
    .then((data) => {
      return dispatch({ type: USER_AUTH_SUCCESS, payload: data });
    })
    .catch((error) => dispatch({ type: USER_AUTH_FAILURE, payload: error }));
};

export const userLogin = (o) => (dispatch) => {
  dispatch({ type: USER_LOGIN_PENDING });
  fetch('/user/login', {
    body: JSON.stringify(o),
    headers: settings.network.headers,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: USER_LOGIN_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: USER_LOGIN_FAILURE, payload: error }));
};

export const userLogout = (o) => ({
  type: USER_LOGOUT,
  payload: o,
});

export const userSignup = (o) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_PENDING });
  fetch('/user/create', {
    body: JSON.stringify(o),
    headers: settings.network.headers,
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: USER_SIGNUP_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: USER_SIGNUP_FAILURE, payload: error }));
};

export const usersGetList = () => (dispatch) => {
  dispatch({ type: USERS_GET_PENDING });
  fetch('/users/list', {
    headers: settings.network.headers,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: USERS_GET_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: USERS_GET_FAILURE, payload: error }));
};
