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

import { GlobalStyles } from './themeProvider/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themeProvider/theme';
import {
  dataCombine,
  dataFormatReddit,
  dataRequest,
  dataFormatTweets,
  uiToggleLights,
  usersGetList,
  userSignup,
} from './actions';
import './Main.css';

// Parameter state comes from index.js provider store state (rootReducers).
const mapStateToProps = (state) => {
  return {
    dataReducer: state.dataReducer,
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
    uiToggleLights: () => dispatch(uiToggleLights()),
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
      uiReducer,
      uiToggleLights,
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
              <Modal />
              <LoginBtn />
              <main
                className="flex-shrink-0"
                role="main"
                style={{ marginTop: 100 }}
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
                    <Route path="/gaming" component={Gaming} />
                    <Route path="/retrogaming" component={RetroGames} />
                    <Route path="/moderngaming" component={ModernGames} />
                    <Route path="/boardgaming" component={BoardGames} />
                    <Route path="/comics" component={Comics} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/sources" component={Sources} />
                    <Route
                      exact
                      path="/signup"
                      render={(props) => (
                        <SignUp userSignup={userSignup} {...props} />
                      )}
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
