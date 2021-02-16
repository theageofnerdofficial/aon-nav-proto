// Imports:
import React, { Component } from 'react';
import DarkModeBtn from './NavBtns/DarkModeBtn';
import labels from '../../config/labels';

class Navbar extends Component {
  render() {
    const { FontIcon, uiReducer, uiToggleLights } = this.props;
    return (
      <nav
        className={`shadow-sm navbar navbar-expand-lg ${
          uiReducer.lightsOff
            ? 'navbar-dark navbar-inverse'
            : 'navbar-light bg-custom'
        }`}
      >
        <a
          className=" navbar-brand text-center"
          href="#"
          style={{ border: '0px solid lime !important' }}
        >
          <img src="./img/log.svg" style={{ height: '30px', width: '120px' }} />
          {/*{labels.ui.siteInfo.name} */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Options
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <DarkModeBtn
                  FontIcon={FontIcon}
                  uiReducer={uiReducer}
                  uiToggleLights={uiToggleLights}
                />
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
