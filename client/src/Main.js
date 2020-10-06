// Imports:
import AddSource from './Admin/Sources/AddSource';
import Admin from './Admin/Admin';
import BoardGames from './BoardGames';
import Comics from './Comics';
import Contact from './Contact';
import EditSource from './Admin/Sources/EditSource';
import FlashMsg from './Components/FlashMsg/FlashMsg';
import Footer from './Components/Footer/Footer';
import Gaming from './Gaming';
import GetSources from './Admin/Sources/GetSources/GetSources';
import Header from './Components/Header/Header';
import Home from './Home';
import KonamiCode from './Components/KonamiCode/KonamiCode';
import LoginBtn from './Components/LoginBtn/LoginBtn';
import LoginFormPage from './Components/LoginForm/LoginFormPage';
import Modal from './Components/Modal/Modal';
import ModernGames from './ModernGames';
import MyNerd from './MyNerd/MyNerd';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import React, { Component } from 'react';
import RetroGames from './RetroGames';
import SignUp from './SignUp';
import Sources from './Sources';
import TVFilm from './TVFilm';
import Unauthorised from './Unauthorised';
import UserList from './Admin/UserList';

// Actions:
import {
  dataCombine,
  dataFormatReddit,
  dataFormatTweets,
  dataRequest,
  flashMsgFlash,
  flashMsgUpdate,
  nerdSetupUpdatePhase,
  nerdUpdateCheck,
  quizzesGetList,
  schedulerSelectDate,
  sourceAdd,
  sourceAddFormCategory,
  sourceAddFormCategoryGaming,
  sourceAddFormFilter,
  sourceAddService,
  sourceGetById,
  sourceGetRedditPosts,
  sourceRemove,
  sourcesCombine,
  sourcesCombinedArrangeBy,
  sourcesFilterByCategory,
  sourcesGetInstagram,
  sourcesGetReddit,
  sourcesGetTwitter,
  sourcesReset,
  sourcesToggleSortUI,
  sourcesToggleSourceMute,
  quizAddAnswer,
  quizCalculateScore,
  quizFormUpdate,
  quizRequestData,
  quizReset,
  quizUpdateQNumber,
  quizUpdateScreen,
  uiSetBreadcrumbs,
  uiToggleLights,
  userAuthenticate,
  userLogin,
  userLogout,
  userSignup,
  usersGetList,
} from './actions';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyles } from './themeProvider/global';
import { lightTheme, darkTheme } from './themeProvider/theme';
import { ThemeProvider } from 'styled-components';
import './Main.css';
import settings from './config/settings';
import AddQuiz from './Admin/Quizzes/AddQuiz/AddQuiz';
import ContentScheduler from './Admin/ContentScheduler';
import QuizList from './Admin/QuizList';
import QuizPage from './Components/Quiz/QuizPage';
import Quizzes from './Components/Quiz/Quizzes';
import UserProfile from './UserProfile';

// Parameter state comes from index.js provider store state (rootReducers).
const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
    flashMsgReducer: state.flashMsgReducer,
    modalReducer: state.modalReducer,
    nerdReducer: state.nerdReducer,
    nerdSetupReducer: state.nerdSetupReducer,
    profileReducer: state.profileReducer,
    quizReducer: state.quizReducer,
    schedulerReducer: state.schedulerReducer,
    sourceReducer: state.sourceReducer,
    uiReducer: state.uiReducer,
    usersReducer: state.usersReducer,
  };
};

// Dispatch DOM changes to call an action.
// Note: mapStateToProps returns object, mapDispatchToProps returns function.
// Function returns an object then uses connect to change data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    dataCombine: () => dispatch(dataCombine()),
    dataFormatReddit: (o) => dispatch(dataFormatReddit(o)),
    dataFormatTweets: (o) => dispatch(dataFormatTweets(o)),
    dataRequest: (o) => dispatch(dataRequest(o)),
    flashMsgFlash: (o) => dispatch(flashMsgFlash(o)),
    flashMsgUpdate: (o) => dispatch(flashMsgUpdate(o)),
    nerdSetupUpdatePhase: (o) => dispatch(nerdSetupUpdatePhase(o)),
    nerdUpdateCheck: (o) => dispatch(nerdUpdateCheck(o)),
    quizAddAnswer: (o) => dispatch(quizAddAnswer(o)),
    quizCalculateScore: (o) => dispatch(quizCalculateScore(o)),
    quizFormUpdate: (o) => dispatch(quizFormUpdate(o)),
    quizRequestData: (o) => dispatch(quizRequestData(o)),
    quizReset: () => dispatch(quizReset()),
    quizUpdateQNumber: (o) => dispatch(quizUpdateQNumber(o)),
    quizUpdateScreen: (o) => dispatch(quizUpdateScreen(o)),
    quizzesGetList: (o) => dispatch(quizzesGetList(o)),
    schedulerSelectDate: (o) => dispatch(schedulerSelectDate(o)),
    sourceAdd: (source) => dispatch(sourceAdd(source)),
    sourceAddFormCategory: (cat) => dispatch(sourceAddFormCategory(cat)),
    sourceAddFormCategoryGaming: (cat) =>
      dispatch(sourceAddFormCategoryGaming(cat)),
    sourceAddFormFilter: (filter) => dispatch(sourceAddFormFilter(filter)),
    sourceAddService: (source) => dispatch(sourceAddService(source)),
    sourceGetById: (o) => dispatch(sourceGetById(o)),
    sourceGetRedditPosts: (o) => dispatch(sourceGetRedditPosts(o)),
    sourceRemove: (source) => dispatch(sourceRemove(source)),
    sourcesCombine: () => dispatch(sourcesCombine()),
    sourcesCombinedArrangeBy: (o) => dispatch(sourcesCombinedArrangeBy(o)),
    sourcesFilterByCategory: (o) => dispatch(sourcesFilterByCategory(o)),
    sourcesGetReddit: (cat) => dispatch(sourcesGetReddit(cat)),
    sourcesGetInstagram: (o) => dispatch(sourcesGetInstagram(o)),
    sourcesGetTwitter: () => dispatch(sourcesGetTwitter()),
    sourcesReset: () => dispatch(sourcesReset()),
    sourcesToggleSortUI: (o) => dispatch(sourcesToggleSortUI(o)),
    sourcesToggleSourceMute: (o) => dispatch(sourcesToggleSourceMute(o)),
    uiSetBreadcrumbs: (o) => dispatch(uiSetBreadcrumbs(o)),
    uiToggleLights: () => dispatch(uiToggleLights()),
    userAuthenticate: () => dispatch(userAuthenticate()),
    userLogin: (o) => dispatch(userLogin(o)),
    userLogout: () => dispatch(userLogout()),
    userSignup: (o) => dispatch(userSignup(o)),
    usersGetList: () => dispatch(usersGetList()),
  };
};

let navbarTopInit;

class Main extends Component {
  /* Dynamic navbar: fix the navbar top to the top when user scrolls
     but "re-dock" it when they scroll back up & the hero reappears:
   *****************************************************************/
  dynamicNavbar = {
    handleScroll() {
      const navbar = document.getElementById('navbar-custom');
      const navbarHasFixed = navbar.classList.contains('fixed-top');
      const y = window.pageYOffset;
      if (y <= navbarTopInit && navbarHasFixed) {
        navbar.classList.remove('fixed-top');
      } else if (y > navbarTopInit && !navbarHasFixed) {
        navbar.classList.add('fixed-top');
      }
    },
    // Cache the initial position of navbar:
    cache: {
      top() {
        const navbar = document.getElementById('navbar-custom');
        if (!navbarTopInit) {
          navbarTopInit =
            navbar.getBoundingClientRect().top + window.pageYOffset;
        }
      },
    },
  };

  componentDidMount() {
    this.dynamicNavbar.cache.top();
    window.addEventListener('scroll', this.dynamicNavbar.handleScroll, {
      passive: true,
    });
  }

  render() {
    const {
      dataCombine,
      dataFormatReddit,
      dataFormatTweets,
      dataReducer,
      dataRequest,
      flashMsgFlash,
      flashMsgReducer,
      flashMsgUpdate,
      modalReducer,
      nerdReducer,
      nerdSetupReducer,
      nerdSetupUpdatePhase,
      nerdUpdateCheck,
      profileReducer,
      quizAddAnswer,
      quizCalculateScore,
      quizFormUpdate,
      quizReducer,
      quizRequestData,
      quizReset,
      quizUpdateQNumber,
      quizUpdateScreen,
      quizzesGetList,
      schedulerReducer,
      schedulerSelectDate,
      sourceAdd,
      sourceAddFormCategory,
      sourceAddFormCategoryGaming,
      sourceAddFormFilter,
      sourceAddService,
      sourceGetById,
      sourcesGetInstagram,
      sourceGetRedditPosts,
      sourceReducer,
      sourceRemove,
      sourcesCombine,
      sourcesCombinedArrangeBy,
      sourcesFilterByCategory,
      sourcesGetReddit,
      sourcesGetTwitter,
      sourcesReset,
      sourcesToggleSortUI,
      sourcesToggleSourceMute,
      uiReducer,
      // uiSetBreadcrumbs,
      uiToggleLights,
      userAuthenticate,
      userLogin,
      userLogout,
      userSignup,
      usersGetList,
      usersReducer,
    } = this.props;
    return (
      <Router>
        <Switch>
          <ThemeProvider theme={uiReducer.lightsOff ? darkTheme : lightTheme}>
            <GlobalStyles />
            <div>
              <FlashMsg
                flashMsgFlash={flashMsgFlash}
                flashMsgReducer={flashMsgReducer}
              />
              <Header
                lightsOff={uiReducer.lightsOff}
                Link={Link}
                toggleLights={uiToggleLights}
              />

              <KonamiCode />

              <Modal userLogin={userLogin} modalReducer={modalReducer} />

              {/* Login/signup button:
               *****************************************************************/}
              <LoginBtn
                Link={Link}
                userAuthenticate={userAuthenticate}
                userLogout={userLogout}
                usersReducer={usersReducer}
              />
              <main
                className="flex-shrink-0"
                role="main"
                style={{ marginTop: 110 }}
              >
                <div className="container">
                  <div className="content">
                    <Route
                      exact
                      path="/"
                      render={(props) => (
                        <Home
                          dataCombine={dataCombine}
                          dataFormatReddit={dataFormatReddit}
                          dataFormatTweets={dataFormatTweets}
                          dataReducer={dataReducer}
                          dataRequest={dataRequest}
                          quizAddAnswer={quizAddAnswer}
                          quizCalculateScore={quizCalculateScore}
                          quizId="5f58f9790a27010acad1d82e"
                          quizReducer={quizReducer}
                          quizRequestData={quizRequestData}
                          quizReset={quizReset}
                          quizUpdateQNumber={quizUpdateQNumber}
                          quizUpdateScreen={quizUpdateScreen}
                          usersReducer={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/login"
                      render={(props) => (
                        <LoginFormPage userLogin={userLogin} {...props} />
                      )}
                    />
                    <Route path="/tvfilm" component={withRouter(TVFilm)} />
                    <Route
                      exact
                      path="/gaming"
                      render={(props) => (
                        <Gaming
                          sourceGetRedditPosts={sourceGetRedditPosts}
                          sourceReducer={sourceReducer}
                          sourcesGetReddit={sourcesGetReddit}
                          sourcesReset={sourcesReset}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      exact
                      path="/profile/:id"
                      render={(props) => (
                        <UserProfile
                          profileReducer={profileReducer}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      path="/retrogaming"
                      component={withRouter(RetroGames)}
                    />
                    <Route
                      path="/moderngaming"
                      component={withRouter(ModernGames)}
                    />
                    <Route
                      path="/boardgaming"
                      component={withRouter(BoardGames)}
                    />
                    <Route path="/comics" component={withRouter(Comics)} />
                    <Route path="/contact" component={withRouter(Contact)} />
                    <Route path="/sources" component={withRouter(Sources)} />
                    <Route
                      exact
                      path="/signup"
                      render={(props) => (
                        <SignUp
                          userLogin={userLogin}
                          usersGetList={usersGetList}
                          userSignup={userSignup}
                          usersReducer={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/unauthorised"
                      component={withRouter(Unauthorised)}
                    />

                    <Route
                      exact
                      path="/quizzes"
                      render={(props) => (
                        <Quizzes
                          Link={Link}
                          quizReducer={quizReducer}
                          quizzesGetList={quizzesGetList}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/quiz/:id"
                      render={(props) => (
                        <QuizPage
                          quizAddAnswer={quizAddAnswer}
                          quizCalculateScore={quizCalculateScore}
                          quizId="5f58f9790a27010acad1d82e"
                          quizReducer={quizReducer}
                          quizRequestData={quizRequestData}
                          quizReset={quizReset}
                          quizUpdateQNumber={quizUpdateQNumber}
                          quizUpdateScreen={quizUpdateScreen}
                          {...props}
                        />
                      )}
                    />

                    {/* Component: Admin:
                      - Route type: Protected
                      - Access: logged in with level 3 or up:
                     *****************************************************************/}
                    <Route
                      exact
                      path="/admin"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={Admin}
                          data={{
                            Link,
                          }}
                          login={usersReducer}
                          path="/admin"
                          usersGetList={usersGetList}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/scheduler"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={ContentScheduler}
                          data={{
                            flashMsgFlash,
                            flashMsgUpdate,
                            Link,
                            quizReducer,
                            quizzesGetList,
                            schedulerReducer,
                            schedulerSelectDate,
                          }}
                          login={usersReducer}
                          path="/admin/scheduler"
                          usersGetList={usersGetList}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/userlist"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={UserList}
                          data={{
                            Link,
                            usersGetList,
                            usersReducer,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/addsource"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={AddSource}
                          data={{
                            Link,
                            flashMsgFlash,
                            flashMsgUpdate,
                            sourceAdd,
                            sourceAddFormCategory,
                            sourceAddFormCategoryGaming,
                            sourceAddFormFilter,
                            sourceAddService,
                            sourceReducer,
                            sourcesReset,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/editsource/:id/:service"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={EditSource}
                          data={{
                            Link,
                            flashMsgFlash,
                            flashMsgUpdate,
                            sourceAdd,
                            sourceAddFormCategory,
                            sourceAddFormCategoryGaming,
                            sourceAddFormFilter,
                            sourceAddService,
                            sourceGetById,
                            sourceReducer,
                            sourcesReset,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/getsources"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={GetSources}
                          data={{
                            Link,
                            flashMsgFlash,
                            flashMsgUpdate,
                            sourceAdd,
                            sourceAddFormCategory,
                            sourceAddFormCategoryGaming,
                            sourceAddFormFilter,
                            sourceAddService,
                            sourceGetById,
                            sourceReducer,
                            sourcesCombine,
                            sourcesCombinedArrangeBy,
                            sourcesFilterByCategory,
                            sourcesGetInstagram,
                            sourcesGetReddit,
                            sourcesGetTwitter,
                            sourceRemove,
                            sourcesReset,
                            sourcesToggleSortUI,
                            sourcesToggleSourceMute,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/quizlist"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={QuizList}
                          data={{
                            Link,
                            quizReducer,
                            quizzesGetList,
                            usersGetList,
                            usersReducer,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/addQuiz"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={AddQuiz}
                          data={{
                            Link,
                            flashMsgFlash,
                            flashMsgReducer,
                            flashMsgUpdate,
                            quizFormUpdate,
                            quizReducer,
                            usersGetList,
                            usersReducer,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    {/* Component: MyNerd:
                      - Route type: Protected
                      - Access: logged in:
                     *****************************************************************/}
                    <Route
                      exact
                      path="/mynerd"
                      render={(props) => (
                        <ProtectedRoute
                          exact
                          accessLevel={settings.permissions.accessLevel.admin}
                          component={MyNerd}
                          data={{
                            userLogin,
                            nerdReducer,
                            nerdSetupReducer,
                            nerdSetupUpdatePhase,
                            nerdUpdateCheck,
                            userAuthenticate,
                            usersReducer,
                          }}
                          login={usersReducer}
                          {...props}
                        />
                      )}
                    />
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
