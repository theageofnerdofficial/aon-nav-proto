/* Imports:
 ******************************************************/
import {
  DATA_COMBINE,
  FLASH_MSG_HIDE,
  FLASH_MSG_SHOW,
  FLASH_MSG_UPDATE,
  MODAL_UPDATE_MODE,
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
