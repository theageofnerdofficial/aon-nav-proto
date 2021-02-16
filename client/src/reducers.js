/* Imports:
 *********************************************************/
import {
  DATA_COMBINE,
  FLASH_MSG_HIDE,
  FLASH_MSG_SHOW,
  FLASH_MSG_UPDATE,
  MODAL_LOGIN_FORM,
  MODAL_UPDATE_MODE,
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
  SOURCE_DATA_COUNT,
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
  SOURCE_GEN_YT_ID_FAILURE,
  SOURCE_GEN_YT_ID_PENDING,
  SOURCE_GEN_YT_ID_SUCCESS,
  SOURCE_GETBYID_FAILURE,
  SOURCE_GETBYID_PENDING,
  SOURCE_GETBYID_SUCCESS,
  SOURCE_GET_INSTAGRAM_FAILURE,
  SOURCE_GET_INSTAGRAM_PENDING,
  SOURCE_GET_INSTAGRAM_SUCCESS,
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
} from './constants';

// :
import levels from './MyNerd/levels/levels';
import localData from './config/localData';
import mynerd from './helpers/myNerd';
import settings from './config/settings';
import utils from './config/utils';

// :
let stateCp;

/* Datas:
 *********************************************************/
const data = {};

export const dataReducer = (state = data, action = {}) => {
  switch (action.type) {
    case DATA_COMBINE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

/* Data — setting the state for info obtained from APIs:
 *********************************************************/
const modal = {
  mode: MODAL_LOGIN_FORM,
  data: {},
  size: String,
};

export const modalReducer = (state = modal, action = {}) => {
  switch (action.type) {
    case MODAL_UPDATE_MODE:
      return Object.assign({}, state, {
        mode: action.payload.mode,
        data: action.payload.data,
        size: action.payload.size,
      });
    default:
      return state;
  }
};

/* Scheduler:
 *********************************************************/
const scheduler = {
  dateSelected: '',
};

export const schedulerReducer = (state = scheduler, action = {}) => {
  switch (action.type) {
    case SCHEDULER_SELECT_DATE:
      return Object.assign({}, state, { dateSelected: action.payload });
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

const quiz = {
  title: String,
  subtitle: String,
  quizNumber: Number,
  score: Number,
  questionNumber: 0,
  questionData: [],
  quizFormQuestions: [],
  quizListData: [],
  quizListPending: false,
  quizRequestPending: false,
  quizScreen: 0,
};

export const quizReducer = (state = quiz, action = {}) => {
  switch (action.type) {
    case QUIZ_RESET:
      stateCp = state;
      if (action.payload && action.payload.keepRequestQData) {
        stateCp.questionNumber = 0;
        stateCp.quizScreen = 0;
        stateCp.score = 0;
        stateCp.questionData.questions.map(
          (element) => (element.userAnswer = null)
        );
      } else {
        stateCp = quiz;
      }
      return Object.assign({}, state, stateCp);

    case QUIZ_ANS_ADD:
      stateCp = state;
      stateCp.questionData.questions[state.questionNumber].userAnswer =
        action.payload.answerIndex;
      return Object.assign({}, state, stateCp);

    case QUIZ_Q_NUMBER_UPDATE:
      stateCp = state;
      if (action.payload.inc) {
        if (state.questionNumber < stateCp.questionData.questions.length)
          stateCp.questionNumber += 1;
      } else {
        if (stateCp.questionNumber >= 0) stateCp.questionNumber -= 1;
      }
      return Object.assign({}, state, {
        state: stateCp,
        quizListPending: false,
      });

    case QUIZ_SCORE_CALCULATE:
      return Object.assign({}, state, {
        score: action.payload,
      });

    case QUIZ_SCREEN_UPDATE:
      return Object.assign({}, state, {
        state: stateCp,
        quizScreen: action.payload,
      });

    case QUIZ_LIST_FAILURE:
      return Object.assign({}, state, { quizListPending: false });

    case QUIZ_LIST_PENDING:
      return Object.assign({}, state, { quizListPending: true });

    case QUIZ_LIST_SUCCESS:
      return Object.assign({}, state, {
        quizListData: action.payload,
        quizListPending: false,
      });

    case QUIZ_FORM_UPDATE:
      stateCp = state;
      const questionIndex = action.payload.name.split('-')[1];
      const answerIndex = action.payload.name.split('-')[2];
      const isQuestion = action.payload.name.split('-')[2] === 'question';
      const isAnswer = action.payload.name.split('-')[3] === 'answer';
      const isCorrect = action.payload.name.split('-')[2] === 'correct';
      const isQuizTitle = action.payload.name.split('-')[1] === 'title';
      const addQuestion = action.payload.name === 'qq-add';
      const removeQuestion = action.payload.name.split('-')[2] === 'remove';
      if (isQuizTitle) stateCp.title = action.payload.value;
      if (removeQuestion)
        stateCp.quizFormQuestions.splice(action.payload.name.split('-')[1], 1);
      if (addQuestion) {
        stateCp.quizFormQuestions.push({
          question: null,
          answers: [null, null, null, null],
          correct: null,
        });
      }
      if (isAnswer)
        stateCp.quizFormQuestions[questionIndex].answers[answerIndex] =
          action.payload.value;

      if (isQuestion) {
        stateCp.quizFormQuestions[questionIndex].question =
          action.payload.value;
      }
      if (isCorrect) {
        stateCp.quizFormQuestions[questionIndex].correct = action.payload.value;
      }
      return Object.assign({}, state, stateCp);

    case QUIZ_REQUEST_FAILURE:
      return Object.assign({}, state, { quizRequestPending: false });

    case QUIZ_REQUEST_PENDING:
      return Object.assign({}, state, { quizRequestPending: true });

    case QUIZ_REQUEST_SUCCESS:
      const addQuesForEditForm = () => {
        let quesEditForm = [];
        if (action.addQuestions) {
          action.payload.questions.forEach((el) => {
            quesEditForm.push({
              question: el.question,
              answers: [el.answerA, el.answerB, el.answerC, el.answerD],
              correct: el.correctAnswer,
            });
          });
          return quesEditForm;
        }
      };
      return Object.assign({}, state, {
        quizFormQuestions: addQuesForEditForm(),
        questionData: action.payload,
        quizRequestPending: false,
      });
    default:
      return Object.assign({}, state);
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
      localStorage.removeItem(settings.localStorage.token);
      localStorage.removeItem(settings.localStorage.login.id);
      localStorage.removeItem(settings.localStorage.login.username);
      window.location.href = '/';
      return Object.assign({}, state, {
        userAuth: {},
      });

    case USER_LOGIN_FAILURE:
      window.alert('Bad login');
      return Object.assign({}, state, {
        userLoginPending: false,
      });

    case USER_LOGIN_PENDING:
      return Object.assign({}, state, {
        userLoginPending: true,
      });

    case USER_LOGIN_SUCCESS:
      if (!action.payload.auth) {
        window.alert('Bad login');
      } else {
        localStorage.setItem(settings.localStorage.token, action.payload.token);
        window.location.href = '/mynerd';
      }
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

/* Visuals — e.g. lights on/off for dark & light mode.
   Here we use localStorage item so on page refresh when
   stage is lost we can persist the user's preference:
 *********************************************************/
const ui = {
  lightsOff:
    localData.darkMode.get() !== null
      ? localData.darkMode.get() === 'false'
        ? false
        : true
      : false,
  breadcrumbsPath: [],
};

export const uiReducer = (state = ui, action = {}) => {
  switch (action.type) {
    case UI_TOGGLE_LIGHTS:
      localStorage.setItem(settings.localStorage.darkmode, !state.lightsOff);
      return Object.assign({}, state, { lightsOff: !state.lightsOff });

    case UI_BREADCRUMBS_SET_PATH:
      return Object.assign({}, state, { breadcrumbsPath: action.payload });

    default:
      return state;
  }
};

/* Profile:
 *********************************************************/
const profile = {
  username: String,
  nationality: String,
  profileGetByIdPending: false,
  profileData: {},
};

export const profileReducer = (state = profile, action = {}) => {
  switch (action.type) {
    case PROFILE_DATA_RESET:
      return Object.assign({}, state, { profileData: {} });
    case PROFILE_GETBYID_FAILURE:
      return Object.assign({}, state, { profileGetByIdPending: false });
    case PROFILE_GETBYID_PENDING:
      return Object.assign({}, state, { profileGetByIdPending: true });
    case PROFILE_GETBYID_SUCCESS:
      return Object.assign({}, state, {
        profileData: action.payload,
        profileGetByIdPending: false,
      });
    default:
      return state;
  }
};

/* Newsfeed:
 *********************************************************/
const newsfeed = {
  dataPosts: {
    hasCombined: false,
    count: {
      twitter: 0,
      reddit: 0,
      instagram: 0,
      youtube: 0,
    },
    hasFormatted: {
      reddit: false,
      twitter: false,
      instagram: false,
      youtube: false,
    },
  },
  dotsMenu: {
    visibleMenusById: [],
  },
};

export const newsfeedReducer = (state = newsfeed, action = {}) => {
  switch (action.type) {
    case NEWSFEED_DOTSMENU_TOGGLE:
      stateCp = state;
      const id = action.payload.id.split('dotsmenu-')[1];
      if (stateCp.dotsMenu.visibleMenusById.includes(id)) {
        var index = stateCp.dotsMenu.visibleMenusById.indexOf(id);
        stateCp.dotsMenu.visibleMenusById.splice(index, 1);
      } else {
        stateCp.dotsMenu.visibleMenusById.push(id);
      }
      return Object.assign({}, state, stateCp);

    case NEWSFEED_POSTS_HAVE_COMBINED:
      stateCp = state;
      stateCp.dataPosts.hasCombined = action.payload;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_DATA_RESET:
      stateCp = state;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_INC_SOURCE_COUNT:
      stateCp = state;
      console.log(action.payload);
      stateCp.dataPosts.count[action.payload.service] += action.payload.value;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_SERVICE_FORMAT:
      stateCp = state;
      stateCp.dataPosts.hasFormatted[action.payload.service] =
        action.payload.value;
      return Object.assign({}, state, stateCp);
    default:
      return state;
  }
};
