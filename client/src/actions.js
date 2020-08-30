/* Imports:
 ******************************************************/
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
  NERD_SETUP_UPDATE_PHASE,
  NERD_UPDATE_CHECK,
  SOURCES_COMBINE,
  SOURCES_COMBINED_ARRANGE_BY,
  SOURCES_FILTER_BY_CATEGORY,
  SOURCES_REDDIT_GET_FAILURE,
  SOURCES_REDDIT_GET_PENDING,
  SOURCES_REDDIT_GET_SUCCESS,
  SOURCES_RESET_FORM,
  SOURCES_TWITTER_GET_FAILURE,
  SOURCES_TWITTER_GET_PENDING,
  SOURCES_TWITTER_GET_SUCCESS,
  SOURCE_ADD_FAILURE,
  SOURCE_ADD_FORM_CAT,
  SOURCE_ADD_FORM_CAT_GM,
  SOURCE_ADD_FORM_FILTER,
  SOURCE_ADD_FORM_SELECT,
  SOURCE_ADD_PENDING,
  SOURCE_ADD_SUCCESS,
  SOURCE_GETBYID_FAILURE,
  SOURCE_GETBYID_PENDING,
  SOURCE_GETBYID_SUCCESS,
  SOURCE_GET_REDDITS_FAILURE,
  SOURCE_GET_REDDITS_PENDING,
  SOURCE_GET_REDDITS_SUCCESS,
  SOURCE_REDDIT,
  SOURCE_REMOVE,
  SOURCE_TWITTER,
  SOURCES_TOGGLE_SORT_UI,
  UI_BREADCRUMBS_SET_PATH,
  UI_TOGGLE_LIGHTS,
  USERS_GET_FAILURE,
  USERS_GET_PENDING,
  USERS_GET_SUCCESS,
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
} from './constants';

// :
import format from './config/format';
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

// replace???
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

/* Flash msg actions:
 ******************************************************/
export const flashMsgFlash = (o) => (dispatch) => {
  dispatch({ type: FLASH_MSG_SHOW });
  setTimeout(() => {
    dispatch({ type: FLASH_MSG_HIDE });
  }, 5000);
};

export const flashMsgUpdate = (o) => ({
  type: FLASH_MSG_UPDATE,
  payload: {
    msg: o.msg,
    style: o.style,
  },
});

/* Nerd actions:
 ******************************************************/
export const nerdUpdateCheck = (o) => ({
  type: NERD_UPDATE_CHECK,
  payload: o,
});

export const nerdSetupUpdatePhase = (o) => ({
  type: NERD_SETUP_UPDATE_PHASE,
  payload: o,
});

/* Source add form actions:
 ******************************************************/
export const sourceAdd = (source) => (dispatch, getState) => {
  let url;
  switch (source.service) {
    case SOURCE_REDDIT:
      url = '/source/reddit/';
      break;
    case SOURCE_TWITTER:
      url = '/source/twitter';
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
    .catch((error) => {
      dispatch({ type: SOURCE_ADD_FAILURE, payload: error });
    });
};

export const sourceRemove = (o) => ({
  type: SOURCE_REMOVE,
  payload: o,
});

export const sourceAddFormCategory = (category) => ({
  type: SOURCE_ADD_FORM_CAT,
  payload: category,
});

export const sourceAddFormCategoryGaming = (category) => ({
  type: SOURCE_ADD_FORM_CAT_GM,
  payload: category,
});

export const sourceAddFormFilter = (filter) => ({
  type: SOURCE_ADD_FORM_FILTER,
  payload: filter,
});

export const sourceAddService = (source) => ({
  type: SOURCE_ADD_FORM_SELECT,
  payload: source,
});

export const sourceGetById = (o) => (dispatch) => {
  const url = () => {
    if (o.service === 'reddit') {
      return `/source/getRedditSourceById/${o.id}`;
    } else if (o.service === 'twitter') {
      return `/source/getTwitterSourceById/${o.id}`;
    }
  };
  dispatch({ type: SOURCE_GETBYID_PENDING });
  fetch(url(), {
    headers: settings.network.headers,
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: SOURCE_GETBYID_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCE_GETBYID_FAILURE, payload: error })
    );
};

export const sourceGetRedditPosts = (o) => (dispatch) => {
  let redditUrl = `https://www.reddit.com/r/${o.subreddit}/${o.filter}.json?`;
  let params = [];
  //
  if (o.period) {
    if (o.period !== 'All time') {
      o.period = format.reddit.source.filter(o);
    }
    params.push(`t=${o.period}`);
  }
  //
  if (o.postsNumber) params.push(`limit=${o.postsNumber}`);
  //
  params = params.join('&');
  redditUrl = redditUrl + params;

  dispatch({ type: SOURCE_GET_REDDITS_PENDING });

  fetch(redditUrl, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SOURCE_GET_REDDITS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCE_GET_REDDITS_FAILURE, payload: error })
    );
};

export const sourcesCombine = () => ({
  type: SOURCES_COMBINE,
});

export const sourcesCombinedArrangeBy = (o) => ({
  type: SOURCES_COMBINED_ARRANGE_BY,
  payload: o,
});

export const sourcesFilterByCategory = (o) => ({
  type: SOURCES_FILTER_BY_CATEGORY,
  payload: o,
});

export const sourcesGetReddit = (cat) => (dispatch) => {
  const category = cat ? '/' + cat : '/all';
  console.log(category);
  dispatch({ type: SOURCES_REDDIT_GET_PENDING });
  fetch('/source/reddit' + category, {
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
  fetch('/source/twitter/', {
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

export const sourcesToggleSortUI = (o) => ({
  type: SOURCES_TOGGLE_SORT_UI,
  payload: o,
});

/* UI actions:
 ******************************************************/
export const uiSetBreadcrumbs = (o) => ({
  type: UI_BREADCRUMBS_SET_PATH,
  payload: o,
});

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
    .then((res) => {
      return res.json();
    })
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

/* Misc actions:
 ******************************************************/
export const fetchConstructor = (o, props) => {
  fetch(o.url, {
    body: o.body,
    headers: settings.network.headers,
    method: o.method,
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      if (o.func.checkDuplicate) o.func.checkDuplicate(res);
      if (o.func.checkErrors) o.func.checkErrors(res);
    })
    .catch((e) => {
      console.log(this);
      if (o.func.checkCatch) o.func.checkCatch(e);
    });
};
