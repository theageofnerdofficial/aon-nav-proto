import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
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
import './Main.css';

import { lightTheme, darkTheme } from './themeProvider/theme';
import { userSetTest } from './actions';
import { GlobalStyles } from './themeProvider/global';
import { ThemeProvider } from 'styled-components';

// Parameter state comes from index.js provider store state (rootReducers).
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

// Dispatch DOM changes to call an action.
// Note: mapStateToProps returns object, mapDispatchToProps returns function.
// Function returns an object then uses connect to change data from reducers.
const mapDispatchToProps = (dispatch) => {
  return {
    userSetTest: () => dispatch(userSetTest()),
  };
};

let navbarTopInit;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightsOff: false,
      twitterData: [],
    };
    this.toggleLights = this.toggleLights.bind(this);
    this.getTweetData = this.getTweetData.bind(this);
  }

  getTweetData() {
    return fetch('/api/getList')
      .then((response) => response.json())
      .then((data) => data);
  }

  toggleLights() {
    this.setState({ lightsOff: !this.state.lightsOff });
  }
  /* Dynamic navbar: fix the navbar top the top when user scrolls
     but "re-dock" it when they back up and the hero reappears:
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

    // Server fetch test:
    fetch('/api/getList')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ twitterData: data.statuses });
      });
  }
  render() {
    return (
      <HashRouter>
        <ThemeProvider theme={this.state.lightsOff ? darkTheme : lightTheme}>
          <GlobalStyles />
          <div>
            <Header
              lightsOff={this.state.lightsOff}
              toggleLights={this.toggleLights}
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
                      <Home twitterData={this.state.twitterData} {...props} />
                    )}
                  />
                  <Route path="/mynerd" component={MyNerd} />
                  <Route path="/tvfilm" component={TVFilm} />
                  <Route path="/gaming" component={Gaming} />
                  <Route path="/retrogaming" component={RetroGames} />
                  <Route path="/moderngaming" component={ModernGames} />
                  <Route path="/boardgaming" component={BoardGames} />
                  <Route path="/comics" component={Comics} />
                  <Route path="/contact" component={Contact} />
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
