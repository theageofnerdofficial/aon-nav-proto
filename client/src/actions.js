/* Imports:
 ******************************************************/
import {
  DATA_COMBINE,
  DATA_FORMAT_INSTAGRAM,
  DATA_FORMAT_REDDIT,
  DATA_FORMAT_TWEETS,
  DATA_FORMAT_UPDATE_INSTAGRAM,
  DATA_FORMAT_UPDATE_REDDIT,
  DATA_FORMAT_UPDATE_TWITTER,
  DATA_FORMAT_UPDATE_YOUTUBE,
  DATA_FORMAT_YOUTUBE,
  DATA_RAW_UPDATE_INSTAGRAM,
  DATA_RAW_UPDATE_REDDIT,
  DATA_RAW_UPDATE_TWITTER,
  DATA_RAW_UPDATE_YOUTUBE,
  DATA_REQUEST_FAILURE,
  DATA_REQUEST_PENDING,
  DATA_REQUEST_SUCCESS,
  FLASH_MSG_HIDE,
  FLASH_MSG_SHOW,
  FLASH_MSG_UPDATE,
  MODAL_UPDATE_MODE,
  NERD_SETUP_UPDATE_PHASE,
  NERD_UPDATE_CHECK,
  NEWSFEED_DATA_RESET,
  NEWSFEED_DOTSMENU_TOGGLE,
  NEWSFEED_INC_SOURCE_COUNT,
  NEWSFEED_POSTS_HAVE_COMBINED,
  NEWSFEED_SERVICE_FORMAT,
  PROFILE_DATA_RESET,
  PROFILE_GETBYID_FAILURE,
  PROFILE_GETBYID_PENDING,
  PROFILE_GETBYID_SUCCESS,
  QUIZ_ANS_ADD,
  QUIZ_EDIT_BY_ID_FAILURE,
  QUIZ_EDIT_BY_ID_PENDING,
  QUIZ_EDIT_BY_ID_SUCCESS,
  QUIZ_FORM_UPDATE,
  QUIZ_LIST_FAILURE,
  QUIZ_LIST_PENDING,
  QUIZ_LIST_SUCCESS,
  QUIZ_Q_NUMBER_UPDATE,
  QUIZ_REQUEST_FAILURE,
  QUIZ_REQUEST_PENDING,
  QUIZ_REQUEST_SUCCESS,
  QUIZ_RESET,
  QUIZ_SCORE_CALCULATE,
  QUIZ_SCREEN_UPDATE,
  SCHEDULER_SELECT_DATE,
  SOURCES_COMBINE,
  SOURCES_COMBINED_ARRANGE_BY,
  SOURCES_FILTER_BY_CATEGORY,
  SOURCES_INSTAGRAM_GET_FAILURE,
  SOURCES_INSTAGRAM_GET_PENDING,
  SOURCES_INSTAGRAM_GET_SUCCESS,
  SOURCES_REDDIT_GET_FAILURE,
  SOURCES_REDDIT_GET_PENDING,
  SOURCES_REDDIT_GET_SUCCESS,
  SOURCES_REFINE_BY_SERVICE,
  SOURCES_RESET_FORM,
  SOURCES_TOGGLE_SORT_UI,
  SOURCES_TOGGLE_SOURCE_MUTE,
  SOURCES_TWITTER_GET_FAILURE,
  SOURCES_TWITTER_GET_PENDING,
  SOURCES_TWITTER_GET_SUCCESS,
  SOURCES_YOUTUBE_GET_FAILURE,
  SOURCES_YOUTUBE_GET_PENDING,
  SOURCES_YOUTUBE_GET_SUCCESS,
  SOURCE_ADD_FAILURE,
  SOURCE_ADD_FORM_CAT,
  SOURCE_ADD_FORM_CAT_GM,
  SOURCE_ADD_FORM_FILTER,
  SOURCE_ADD_FORM_SELECT,
  SOURCE_ADD_PENDING,
  SOURCE_ADD_SUCCESS,
  SOURCE_DATA_COUNT,
  SOURCE_GEN_YT_ID_FAILURE,
  SOURCE_GEN_YT_ID_PENDING,
  SOURCE_GEN_YT_ID_SUCCESS,
  SOURCE_GETBYID_FAILURE,
  SOURCE_GETBYID_PENDING,
  SOURCE_GETBYID_SUCCESS,
  SOURCE_GET_REDDITS_FAILURE,
  SOURCE_GET_REDDITS_PENDING,
  SOURCE_GET_REDDITS_SUCCESS,
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT,
  SOURCE_REDDIT_LABEL,
  SOURCE_REMOVE,
  SOURCE_TWITTER,
  SOURCE_TWITTER_LABEL,
  SOURCE_YOUTUBE,
  SOURCE_YOUTUBE_LABEL,
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
import sourceDBCache from './helpers/sourceDBCache';

/* Data actions:
 ******************************************************/
export const dataCombine = () => ({
  type: DATA_COMBINE,
});

export const dataFormatReddit = (o) => ({
  type: DATA_FORMAT_REDDIT,
  payload: o,
});

export const dataFormatRedditStatus = (o) => ({
  type: DATA_FORMAT_UPDATE_REDDIT,
  payload: o,
});

export const dataFormatYoutubeStatus = (o) => ({
  type: DATA_FORMAT_UPDATE_YOUTUBE,
  payload: o,
});

export const dataFormatInstagramStatus = (o) => ({
  type: DATA_FORMAT_UPDATE_INSTAGRAM,
  payload: o,
});

export const dataFormatTwitterStatus = (o) => ({
  type: DATA_FORMAT_UPDATE_TWITTER,
  payload: o,
});

export const dataRawRedditStatus = (o) => ({
  type: DATA_RAW_UPDATE_REDDIT,
  payload: o,
});

export const dataRawTwitterStatus = (o) => ({
  type: DATA_RAW_UPDATE_TWITTER,
  payload: o,
});

export const dataRawYoutubeStatus = (o) => ({
  type: DATA_RAW_UPDATE_YOUTUBE,
  payload: o,
});

export const dataRawInstagramStatus = (o) => ({
  type: DATA_RAW_UPDATE_INSTAGRAM,
  payload: o,
});

export const dataFormatTweets = (o) => ({
  type: DATA_FORMAT_TWEETS,
  payload: o,
});

export const dataFormatInstagram = (o) => ({
  type: DATA_FORMAT_INSTAGRAM,
  payload: o,
});

export const dataFormatYoutube = (o) => ({
  type: DATA_FORMAT_YOUTUBE,
  payload: o,
});

//
export const dataRequest = (o) => (dispatch) => {
  dispatch({ type: DATA_REQUEST_PENDING });
  // If data needs to be "fresh" rather than from cache:
  const getFreshAPIData = (o, shouldCache) => {
    console.log(o);
    sourceDBCache.get.apiData
      .fresh(o)
      .then((data) => {
        if (shouldCache) {
          alert('SHOULD NOT SEE... yet');
          sourceDBCache
            .create(o, data)
            .then((res) => console.log(res))
            .catch((error) => window.alert(error));
        }
        // Don't create DB entry, ONLY dispatch data to store:
        dispatch({
          count: o.count,
          payload: data,
          source: o.src,
          sourceData: o.sourceData,
          type: DATA_REQUEST_SUCCESS,
        });
      })
      .catch((error) =>
        dispatch({ type: DATA_REQUEST_FAILURE, payload: error })
      );
  };

  // If source is cacheable to DB rather than fetching fresh data every time:
  if (sourceDBCache.isCacheable(o.src)) {
    sourceDBCache.get.apiData
      .cached(o)
      .then((cachedSourceData) => {
        console.log(cachedSourceData);
        // sourcedatas is the collection (yes, data is plural of datum, s added automatically - fix later)
        // later add AND to this if to check if there are no sourcedatas in db belonging to this service
        //
        //
        console.log(cachedSourceData.length);

        if (cachedSourceData.length <= 0) {
          getFreshAPIData(o, true);
        } else {
          // getCachedAPIData();
        }
      })
      .catch((error) => console.log(error));
  } else {
    console.log(o);
    getFreshAPIData(o, false);
  }
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

export const profileDataReset = () => ({
  type: PROFILE_DATA_RESET,
});

export const profileGetByUserId = (id) => (dispatch) => {
  dispatch({ type: PROFILE_GETBYID_PENDING });
  fetch('/user/getUserById/' + id, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: PROFILE_GETBYID_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: PROFILE_GETBYID_FAILURE, payload: error })
    );
};

/* Modal actions:
 ******************************************************/
export const modalUpdateMode = (o) => ({
  type: MODAL_UPDATE_MODE,
  payload: o,
});

/* Nerd actions:
 ******************************************************/
export const nerdSetupUpdatePhase = (o) => ({
  type: NERD_SETUP_UPDATE_PHASE,
  payload: o,
});

export const nerdUpdateCheck = (o) => ({
  type: NERD_UPDATE_CHECK,
  payload: o,
});

/* Nerd actions:
 ******************************************************/
export const dotsMenuToggle = (o) => ({
  type: NEWSFEED_DOTSMENU_TOGGLE,
  payload: o,
});

export const newsfeedResetData = () => ({
  type: NEWSFEED_DATA_RESET,
});

export const newsfeedServiceFormatted = (o) => ({
  type: NEWSFEED_SERVICE_FORMAT,
  payload: {
    service: o.service,
    value: o.value,
  },
});

export const newsfeedIncrSourceCount = (o) => ({
  type: NEWSFEED_INC_SOURCE_COUNT,
  payload: {
    service: o.service,
    value: o.value,
  },
});

export const newsfeedPostsHaveCombined = (o) => ({
  type: NEWSFEED_POSTS_HAVE_COMBINED,
  payload: o,
});

/* Quiz actions:
 ******************************************************/
export const quizAddAnswer = (o) => ({
  type: QUIZ_ANS_ADD,
  payload: o,
});

export const quizCalculateScore = (o) => ({
  type: QUIZ_SCORE_CALCULATE,
  payload: o,
});

export const quizFormUpdate = (o) => ({
  type: QUIZ_FORM_UPDATE,
  payload: o,
});

export const quizGetById = (o) => (dispatch) => {
  dispatch({ type: QUIZ_EDIT_BY_ID_PENDING });
  console.log(o.id);
  fetch(`/quiz/${o.id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: QUIZ_EDIT_BY_ID_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: QUIZ_EDIT_BY_ID_FAILURE, payload: error })
    );
};

export const quizRequestData = (o) => (dispatch) => {
  dispatch({ type: QUIZ_REQUEST_PENDING });
  console.log(o.id);
  fetch(`/quiz/${o.id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        addQuestions: o.addQuestions,
        type: QUIZ_REQUEST_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: QUIZ_REQUEST_FAILURE, payload: error }));
};

export const quizReset = (o) => ({
  type: QUIZ_RESET,
  payload: o,
});

export const quizUpdateQNumber = (o) => ({
  type: QUIZ_Q_NUMBER_UPDATE,
  payload: o,
});

export const quizUpdateScreen = (o) => ({
  type: QUIZ_SCREEN_UPDATE,
  payload: o,
});

export const quizzesGetList = () => (dispatch) => {
  dispatch({ type: QUIZ_LIST_PENDING });
  fetch('/quiz/list', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        payload: data,
        type: QUIZ_LIST_SUCCESS,
      });
    })
    .catch((error) => dispatch({ type: QUIZ_LIST_FAILURE, payload: error }));
};

/* Scheduler actions:
 ******************************************************/
export const schedulerSelectDate = (o) => ({
  type: SCHEDULER_SELECT_DATE,
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
    case SOURCE_INSTAGRAM:
      url = '/source/instagram';
      break;
    case SOURCE_YOUTUBE:
      url = '/source/youtube';
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

export const sourceDataCount = (o) => ({
  type: SOURCE_DATA_COUNT,
  payload: o,
});

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

export const sourcesRefineByService = (o) => ({
  type: SOURCES_REFINE_BY_SERVICE,
  payload: o,
});

export const sourceGenerateYoutubeId = (o) => (dispatch) => {
  dispatch({ type: SOURCE_GEN_YT_ID_PENDING });
  fetch('/youtubeid/' + o.user, {
    headers: settings.network.headers,
    method: 'GET',
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({
        payload: data,
        type: SOURCE_GEN_YT_ID_SUCCESS,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCE_GEN_YT_ID_FAILURE, payload: error })
    );
};

export const sourceGetById = (o) => (dispatch) => {
  const url = () => {
    if (o.service === SOURCE_REDDIT_LABEL.toLowerCase()) {
      return `/source/getRedditSourceById/${o.id}`;
    } else if (o.service === SOURCE_TWITTER_LABEL.toLowerCase()) {
      return `/source/getTwitterSourceById/${o.id}`;
    } else if (o.service === SOURCE_INSTAGRAM_LABEL.toLowerCase()) {
      return `/source/getInstagramSourceById/${o.id}`;
    } else if (o.service === SOURCE_YOUTUBE_LABEL.toLowerCase()) {
      return `/source/getYoutubeSourceById/${o.id}`;
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

export const sourcesGetYoutube = () => (dispatch) => {
  dispatch({ type: SOURCES_YOUTUBE_GET_PENDING });
  fetch('/source/youtube/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SOURCES_YOUTUBE_GET_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCES_YOUTUBE_GET_FAILURE, payload: error })
    );
};

// sourcesGet gets all whereas sourceGetPosts gets posts by username or id or category
export const sourcesGetInstagram = (o) => (dispatch) => {
  dispatch({ type: SOURCES_INSTAGRAM_GET_PENDING });
  fetch('/source/instagram/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SOURCES_INSTAGRAM_GET_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCES_INSTAGRAM_GET_FAILURE, payload: error })
    );
};

export const sourcesGetInstagramPosts = (o) => (dispatch) => {
  dispatch({ type: SOURCES_INSTAGRAM_GET_PENDING });
  fetch('/source/instagram/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: SOURCES_INSTAGRAM_GET_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({ type: SOURCES_INSTAGRAM_GET_FAILURE, payload: error })
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

  console.log(redditUrl);
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

export const sourcesToggleSourceMute = (o) => ({
  type: SOURCES_TOGGLE_SOURCE_MUTE,
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
      console.log(response);
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
