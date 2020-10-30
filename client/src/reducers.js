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
  NERD_SETUP_UPDATE_PHASE,
  NERD_UPDATE_CHECK,
  NEWSFEED_DATA_RESET,
  NEWSFEED_INC_SOURCE_COUNT,
  NEWSFEED_POSTS_HAVE_COMBINED,
  NEWSFEED_SERVICE_FORMAT,
  PROFILE_GETBYID_FAILURE,
  PROFILE_GETBYID_PENDING,
  PROFILE_GETBYID_SUCCESS,
  PROFILE_DATA_RESET,
  QUIZ_ANS_ADD,
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
  SOURCES_RESET_FORM,
  SOURCES_TOGGLE_SORT_UI,
  SOURCES_TOGGLE_SOURCE_MUTE,
  SOURCES_TWITTER_GET_FAILURE,
  SOURCES_TWITTER_GET_PENDING,
  SOURCES_TWITTER_GET_SUCCESS,
  SOURCES_YOUTUBE_GET_PENDING,
  SOURCES_YOUTUBE_GET_FAILURE,
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
  SOURCE_REDDIT,
  SOURCES_REFINE_BY_SERVICE,
  SOURCE_REMOVE,
  SOURCE_TWITTER,
  SOURCE_INSTAGRAM,
  SOURCE_YOUTUBE,
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

//
import levels from './MyNerd/levels/levels';
import loginCreds from './config/loginCreds';
import mynerd from './helpers/myNerd';
import settings from './config/settings';
import utils from './Components/Utils/utils/utils';

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
  instagramDataRaw: [],
  instagramDataFormatted: [],
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
      return Object.assign({}, state, { dataPending: false });

    case DATA_REQUEST_PENDING:
      return Object.assign({}, state, { dataPending: true });

    case DATA_REQUEST_SUCCESS:
      // let newState = { dataPending: false };
      stateCp = state;
      //
      //
      if (action.source === SOURCE_TWITTER) {
        stateCp.tweetDataRaw.push(action.payload);
      } else if (action.source === SOURCE_REDDIT) {
        /*
        newState.redditDataRaw = action.payload.data.children.slice(
          0,
          action.count
        );*/
      } else if (action.source === SOURCE_INSTAGRAM) {
        // newState.instagramDataRaw = action.payload;
      }
      stateCp.dataPending = false;
      return Object.assign({}, state, stateCp);

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

/* Scheduler:
 *********************************************************/
const scheduler = {
  dateSelected: 'hello',
};

export const schedulerReducer = (state = scheduler, action = {}) => {
  switch (action.type) {
    case SCHEDULER_SELECT_DATE:
      return Object.assign({}, state, { dateSelected: action.payload });
    default:
      return state;
  }
};

/* Nerd:
 *********************************************************/
export const nerdReducer = (state = levels, action = {}) => {
  switch (action.type) {
    case NERD_UPDATE_CHECK:
      const nerdCatCp = mynerd.checkSystem.update(state, action);
      return Object.assign({}, state, { category: nerdCatCp });
    default:
      return Object.assign({}, state);
  }
};

const nerdSetup = {
  phase: 0,
};

export const nerdSetupReducer = (state = nerdSetup, action = {}) => {
  switch (action.type) {
    case NERD_SETUP_UPDATE_PHASE:
      return Object.assign({}, state, { phase: action.payload.phase });
    default:
      return Object.assign({}, state);
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
  quizScreen: 1,
};

export const quizReducer = (state = quiz, action = {}) => {
  switch (action.type) {
    case QUIZ_RESET:
      stateCp = quiz;
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
      return Object.assign({}, state, {
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

/* Source form:
 *********************************************************/
const sourceAddForm = {
  category: null,
  categoryGaming: null,
  service: String,
  filter: String,
  sourceCategoryFilter: 'all',
  sourceAddPending: false,
  sourceInstagramGetPending: false,
  sourceInstagramPostsPending: false,
  sourceRedditGetPending: false,
  sourceRedditPostsPending: false,
  sourceTwitterGetPending: false,
  sourceYoutubeGetPending: false,
  sourcesCombined: null,
  sourcesRedditData: null,
  sourcesRedditPosts: null,
  sourcesTwitterData: null,
  sourcesInstagramData: null,
  sourcesYoutubeData: null,
  showRedditPeriod: true,
  sourceByIdPending: false,
  sourceById: {},
  sortUI: {
    source: { sortDirection: 0 },
    category: { sortDirection: 0 },
    service: { sortDirection: 0 },
    posts: { sortDirection: 0 },
    filter: { sortDirection: 0 },
    period: { sortDirection: 0 },
    addedBy: { sortDirection: 0 },
  },
  serviceShown: {
    SOURCE_INSTAGRAM: false,
    SOURCE_REDDIT: false,
    SOURCE_TWITTER: true,
    SOURCE_YOUTUBE: false,
  },
  sourceGenYoutubeIdPending: false,
  youtubeChannelId: null,
};

export const sourceReducer = (state = sourceAddForm, action = {}) => {
  switch (action.type) {
    case SOURCES_YOUTUBE_GET_PENDING:
      return Object.assign({}, state, { sourceYoutubeGetPending: true });

    case SOURCES_YOUTUBE_GET_FAILURE:
      return Object.assign({}, state, { sourceYoutubeGetPending: false });

    case SOURCES_YOUTUBE_GET_SUCCESS:
      return Object.assign({}, state, {
        sourcesYoutubeData: action.payload,
        sourceYoutubeGetPending: false,
      });

    case SOURCES_REFINE_BY_SERVICE:
      let serviceByName;
      switch (action.payload.service) {
        case 'reddit':
          serviceByName = SOURCE_REDDIT;
          break;
        case 'twitter':
          serviceByName = SOURCE_TWITTER;
          break;
        case 'instagram':
          serviceByName = SOURCE_INSTAGRAM;
          break;
        case 'youtube':
          serviceByName = SOURCE_YOUTUBE;
          break;
        default:
          serviceByName = null;
      }
      stateCp = state;
      stateCp.serviceShown[serviceByName] = action.payload.value ? true : false;
      return Object.assign({}, state, stateCp);

    case SOURCE_GET_REDDITS_PENDING:
      return Object.assign({}, state, { sourceRedditPostsPending: true });

    case SOURCE_GET_INSTAGRAM_PENDING:
      return Object.assign({}, state, { sourceInstagramPostsPending: true });

    case SOURCE_GET_INSTAGRAM_FAILURE:
      return Object.assign({}, state, { sourceInstagramPostsPending: false });

    case SOURCE_GET_INSTAGRAM_SUCCESS:
      return Object.assign({}, state, { sourceInstagramPostsPending: false });

    case SOURCE_GET_REDDITS_FAILURE:
      return Object.assign({}, state, { sourceRedditPostsPending: false });

    case SOURCE_GET_REDDITS_SUCCESS:
      let sourcesRedditPostsCp = state.sourcesRedditPosts;
      if (sourcesRedditPostsCp && sourcesRedditPostsCp.length >= 1) {
        action.payload.data.children.forEach((d) => {
          sourcesRedditPostsCp.push(d);
        });
      } else {
        sourcesRedditPostsCp = action.payload.data.children;
      }
      return Object.assign({}, state, {
        sourceRedditPostsPending: false,
        sourcesRedditPosts: sourcesRedditPostsCp,
      });

    case SOURCES_COMBINE:
      return Object.assign({}, state, {
        sourcesCombined: [
          ...state.sourcesInstagramData,
          ...state.sourcesRedditData,
          ...state.sourcesTwitterData,
          ...state.sourcesYoutubeData,
        ],
      });

    case SOURCES_FILTER_BY_CATEGORY:
      return Object.assign({}, state, { sourceCategoryFilter: action.payload });

    case SOURCES_TOGGLE_SORT_UI:
      stateCp = state;
      stateCp.sortUI[action.payload.name].sortDirection = !stateCp.sortUI[
        action.payload.name
      ].sortDirection;
      return Object.assign({}, state, stateCp);

    case SOURCES_TOGGLE_SOURCE_MUTE:
      stateCp = state;
      stateCp.sourcesCombined = state.sourcesCombined.map((s) => {
        if (s._id === action.payload.id) {
          s.muted = !s.muted;
        }
        return s;
      });
      return Object.assign({}, state, stateCp);

    case SOURCES_COMBINED_ARRANGE_BY:
      const name = action.payload.name;
      const nameSubtype = action.payload.nameSubtype;
      stateCp = state;
      if (stateCp.sortUI[name].sortDirection) {
        utils.arr.sort.byProperty.ascending(
          stateCp.sourcesCombined,
          nameSubtype ? nameSubtype : name
        );
      } else {
        utils.arr.sort.byProperty.descending(
          stateCp.sourcesCombined,
          nameSubtype ? nameSubtype : name
        );
      }
      return Object.assign({}, state, stateCp);

    case SOURCES_RESET_FORM:
      return Object.assign({}, state, sourceAddForm);

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

    case SOURCES_INSTAGRAM_GET_FAILURE:
      return Object.assign({}, state, {
        sourceInstagramGetPending: false,
      });

    case SOURCES_INSTAGRAM_GET_PENDING:
      return Object.assign({}, state, {
        sourceInstagramGetPending: true,
      });

    case SOURCES_INSTAGRAM_GET_SUCCESS:
      return Object.assign({}, state, {
        sourcesInstagramData: action.payload,
        sourceInstagramGetPending: false,
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

    case SOURCE_ADD_FORM_CAT:
      return Object.assign({}, state, {
        category: action.payload,
      });

    case SOURCE_ADD_FORM_CAT_GM:
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

    case SOURCE_GEN_YT_ID_FAILURE:
      return Object.assign({}, state, {
        sourceGenYoutubeIdPending: false,
      });

    case SOURCE_GEN_YT_ID_PENDING:
      return Object.assign({}, state, {
        sourceGenYoutubeIdPending: true,
        youtubeChannelId: 'Pending...',
      });

    case SOURCE_GEN_YT_ID_SUCCESS:
      return Object.assign({}, state, {
        youtubeChannelId: action.payload.items[0].id,
        sourceGenYoutubeIdPending: false,
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

/* Profile:
 *********************************************************/
const newsfeed = {
  dataPosts: {
    hasCombined: false,
    count: {
      twitter: 0,
    },
    hasFormatted: {
      reddit: false,
      twitter: false,
    },
  },
};

export const newsfeedReducer = (state = newsfeed, action = {}) => {
  switch (action.type) {
    case NEWSFEED_POSTS_HAVE_COMBINED:
      stateCp = state;
      stateCp.dataPosts.hasCombined = action.payload;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_DATA_RESET:
      stateCp = state;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_INC_SOURCE_COUNT:
      stateCp = state;
      stateCp.dataPosts.count[action.payload.service] += action.payload.value;
      return Object.assign({}, state, stateCp);
    case NEWSFEED_SERVICE_FORMAT:
      //
      stateCp = state;
      stateCp.dataPosts.hasFormatted[action.payload.service] =
        action.payload.value;
      return Object.assign({}, state, stateCp);
    default:
      return state;
  }
};
