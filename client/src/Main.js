// Imports:
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import MyNerd from './MyNerd';
import TVFilm from './TVFilm';
import Gaming from './Gaming';
import RetroGames from './RetroGames';
import ModernGames from './ModernGames';
import BoardGames from './BoardGames';
import Comics from './Comics';
import Contact from './Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import KonamiCode from './Components/KonamiCode/KonamiCode';
import LoginBtn from './Components/LoginBtn/LoginBtn';
import Modal from './Components/Modal/Modal';
import Sources from './Sources';
import SignUp from './SignUp';
import UserList from './Admin/UserList';
import Admin from './Admin/Admin';
import AddApiSource from './Admin/Sources/AddSource';
import GetSources from './Admin/Sources/GetSources/GetSources';
import { GlobalStyles } from './themeProvider/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeProvider/theme';
import {
  dataCombine,
  dataFormatReddit,
  dataRequest,
  dataFormatTweets,
  sourceAdd,
  sourceAddFormCategory,
  sourceAddFormCategoryGaming,
  sourceAddFormFilter,
  sourceAddFormSelect,
  sourcesReset,
  sourcesCombine,
  sourcesGetReddit,
  sourcesGetTwitter,
  uiToggleLights,
  userAuthenticate,
  userLogin,
  userLogout,
  usersGetList,
  userSignup,
} from './actions';
import './Main.css';

// Parameter state comes from index.js provider store state (rootReducers).
const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
    modalReducer: state.modalReducer,
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
    sourceAdd: (sourceForm) => dispatch(sourceAdd(sourceForm)),
    sourceAddFormCategory: (cat) => dispatch(sourceAddFormCategory(cat)),
    sourceAddFormCategoryGaming: (cat) =>
      dispatch(sourceAddFormCategoryGaming(cat)),
    sourceAddFormFilter: (filter) => dispatch(sourceAddFormFilter(filter)),
    sourceAddFormSelect: (source) => dispatch(sourceAddFormSelect(source)),
    sourcesCombine: () => dispatch(sourcesCombine()),
    sourcesReset: () => dispatch(sourcesReset()),
    sourcesGetReddit: () => dispatch(sourcesGetReddit()),
    sourcesGetTwitter: () => dispatch(sourcesGetTwitter()),
    uiToggleLights: () => dispatch(uiToggleLights()),
    userAuthenticate: () => dispatch(userAuthenticate()),
    userLogin: (o) => dispatch(userLogin(o)),
    userLogout: () => dispatch(userLogout()),
    usersGetList: () => dispatch(usersGetList()),
    userSignup: (o) => dispatch(userSignup(o)),
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
      dataReducer,
      dataRequest,
      dataFormatTweets,
      modalReducer,
      sourceAdd,
      sourceAddFormCategory,
      sourceAddFormCategoryGaming,
      sourceAddFormFilter,
      sourcesCombine,
      sourceReducer,
      sourcesReset,
      sourceAddFormSelect,
      sourcesGetReddit,
      sourcesGetTwitter,
      uiReducer,
      uiToggleLights,
      userAuthenticate,
      userLogin,
      userLogout,
      usersGetList,
      usersReducer,
      userSignup,
    } = this.props;
    return (
      <Router>
        <Switch>
          <ThemeProvider theme={uiReducer.lightsOff ? darkTheme : lightTheme}>
            <GlobalStyles />
            <div>
              <Header
                lightsOff={uiReducer.lightsOff}
                Link={Link}
                toggleLights={uiToggleLights}
              />
              <KonamiCode />
              <Modal userLogin={userLogin} modalReducer={modalReducer} />
              <LoginBtn
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
                          {...props}
                        />
                      )}
                    />
                    <Route path="/mynerd" component={withRouter(MyNerd)} />
                    <Route path="/tvfilm" component={withRouter(TVFilm)} />
                    <Route path="/gaming" component={withRouter(Gaming)} />
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
                      path="/admin"
                      render={(props) => <Admin Link={Link} {...props} />}
                    />
                    <Route
                      exact
                      path="/admin/userlist"
                      render={(props) => (
                        <UserList
                          usersGetList={usersGetList}
                          usersReducer={usersReducer}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/admin/addsource"
                      render={(props) => (
                        <AddApiSource
                          sourceAdd={sourceAdd}
                          sourceAddFormCategory={sourceAddFormCategory}
                          sourceAddFormCategoryGaming={
                            sourceAddFormCategoryGaming
                          }
                          sourceAddFormFilter={sourceAddFormFilter}
                          sourceReducer={sourceReducer}
                          sourcesReset={sourcesReset}
                          sourceAddFormSelect={sourceAddFormSelect}
                          {...props}
                        />
                      )}
                    />

                    <Route
                      exact
                      path="/admin/getsources"
                      render={(props) => (
                        <GetSources
                          sourceReducer={sourceReducer}
                          sourcesCombine={sourcesCombine}
                          sourcesGetReddit={sourcesGetReddit}
                          sourcesGetTwitter={sourcesGetTwitter}
                          sourcesReset={sourcesReset}
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
