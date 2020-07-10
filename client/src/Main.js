import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Home';
import TV from './TV';
import Film from './Film';
import Gaming from './Gaming';
import RetroGames from './RetroGames';
import ModernGames from './ModernGames';
import BoardGames from './BoardGames';
import Comics from './Comics';
import Contact from './Contact';
import Footer from './Components/Footer/Footer';
import KonamiCode from './Components/KonamiCode/KonamiCode';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <KonamiCode />
          <main
            className="flex-shrink-0"
            role="main"
            style={{ marginTop: 100 }}
          >
            <div className="container">
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/tv" component={TV} />
                <Route path="/film" component={Film} />
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
      </HashRouter>
    );
  }
}

export default Main;
