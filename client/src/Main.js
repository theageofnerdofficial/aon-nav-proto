// Imports:
import Admin from './Admin/Admin';
import Contact from './Pages/Other/Contact';
import FlashMsg from './Components/FlashMsg/FlashMsg';
import FontIcon from './Components/FontIcon/FontIcon';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import KonamiCode from './Components/KonamiCode/KonamiCode';
import LoginBtn from './Components/LoginBtn/LoginBtn';
import LoginFormPage from './Components/LoginForm/LoginFormPage';
import Modal from './Components/Modal/Modal';
import NoMatch from './Pages/Other/NoMatch';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import React, { Component } from 'react';
import SignUp from './Pages/Other/SignUp';
import Unauthorised from './Pages/Other/Unauthorised';
import UserProfile from './Pages/Other/UserProfile';
import UserList from './Admin/UserList';

// Actions:
import {
  flashMsgFlash,
  flashMsgUpdate,
  modalUpdateMode,
  profileDataReset,
  profileGetByUserId,
  quizzesGetList,
  quizAddAnswer,
  quizCalculateScore,
  quizFormUpdate,
  quizGetById,
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
  // Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { GlobalStyles } from './themeProvider/global';
import { lightTheme, darkTheme } from './themeProvider/theme';
import { ThemeProvider } from 'styled-components';
import labels from './config/labels';
import settings from './config/settings';
import './Main.css';
import Navbar from './Components/Navbar/Navbar';

// Parameter state comes from index.js provider store state (rootReducers).
const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
    flashMsgReducer: state.flashMsgReducer,
    modalReducer: state.modalReducer,
    nerdReducer: state.nerdReducer,
    nerdSetupReducer: state.nerdSetupReducer,
    newsfeedReducer: state.newsfeedReducer,
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
    flashMsgFlash: (o) => dispatch(flashMsgFlash(o)),
    flashMsgUpdate: (o) => dispatch(flashMsgUpdate(o)),
    modalUpdateMode: (o) => dispatch(modalUpdateMode(o)),
    profileDataReset: () => dispatch(profileDataReset()),
    profileGetByUserId: (o) => dispatch(profileGetByUserId(o)),
    quizAddAnswer: (o) => dispatch(quizAddAnswer(o)),
    quizCalculateScore: (o) => dispatch(quizCalculateScore(o)),
    quizFormUpdate: (o) => dispatch(quizFormUpdate(o)),
    quizGetById: (o) => dispatch(quizGetById(o)),
    quizRequestData: (o) => dispatch(quizRequestData(o)),
    quizReset: (o) => dispatch(quizReset(o)),
    quizUpdateQNumber: (o) => dispatch(quizUpdateQNumber(o)),
    quizUpdateScreen: (o) => dispatch(quizUpdateScreen(o)),
    quizzesGetList: (o) => dispatch(quizzesGetList(o)),
    uiSetBreadcrumbs: (o) => dispatch(uiSetBreadcrumbs(o)),
    uiToggleLights: () => dispatch(uiToggleLights()),
    //
    userAuthenticate: () => dispatch(userAuthenticate()),
    userLogin: (o) => dispatch(userLogin(o)),
    userLogout: () => dispatch(userLogout()),
    userSignup: (o) => dispatch(userSignup(o)),
    usersGetList: () => dispatch(usersGetList()),
  };
};

class Main extends Component {
  render() {
    const {
      dataReducer,
      dotsMenuToggle,
      flashMsgFlash,
      flashMsgReducer,
      modalReducer,
      modalUpdateMode,
      newsfeedIncrSourceCount,
      newsfeedPostsHaveCombined,
      newsfeedReducer,
      newsfeedResetData,
      newsfeedServiceFormatted,
      quizAddAnswer,
      quizCalculateScore,
      quizReducer,
      quizRequestData,
      quizReset,
      quizUpdateQNumber,
      quizUpdateScreen,
      uiReducer,
      uiToggleLights,
      userLogin,
      userSignup,
      usersGetList,
      usersReducer,
    } = this.props;
    return (
      <Router>
        <ThemeProvider theme={uiReducer.lightsOff ? darkTheme : lightTheme}>
          <GlobalStyles />
          <div>
            <FlashMsg
              flashMsgFlash={flashMsgFlash}
              flashMsgReducer={flashMsgReducer}
            />
            <Navbar
              FontIcon={FontIcon}
              uiReducer={uiReducer}
              uiToggleLights={uiToggleLights}
            />
            <KonamiCode />
            <Modal
              FontIcon={FontIcon}
              modalReducer={modalReducer}
              modalUpdateMode={modalUpdateMode}
              userLogin={userLogin}
            />

            {/* Login/signup button:
             ****************************************************************
            <LoginBtn
              Link={Link}
              modalUpdateMode={modalUpdateMode}
              userAuthenticate={userAuthenticate}
              userLogout={userLogout}
              usersReducer={usersReducer}
            />*/}
            <main className="flex-shrink-0" role="main">
              <div
                className={`container vertical-center ${
                  settings.debug.guidelines ? 'guidelines' : null
                }`}
              >
                <div className="content">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={(props) => (
                        <Home
                          dataReducer={dataReducer}
                          dotsMenuToggle={dotsMenuToggle}
                          labels={labels}
                          modalReducer={modalReducer}
                          modalUpdateMode={modalUpdateMode}
                          newsfeedIncrSourceCount={newsfeedIncrSourceCount}
                          newsfeedPostsHaveCombined={newsfeedPostsHaveCombined}
                          newsfeedReducer={newsfeedReducer}
                          newsfeedResetData={newsfeedResetData}
                          newsfeedServiceFormatted={newsfeedServiceFormatted}
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
                    <Route path="/contact" component={withRouter(Contact)} />
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
                    <Route component={NoMatch} />
                  </Switch>
                </div>
              </div>
            </main>
            <Footer
              FontIcon={FontIcon}
              uiReducer={uiReducer}
              uiToggleLights={uiToggleLights}
            />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
