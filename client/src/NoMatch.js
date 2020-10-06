import React, { Component } from 'react';
import FontIcon from './Components/FontIcon/FontIcon';
import './Main.css';

class NoMatch extends Component {
  render() {
    return (
      <div
        className="horizontal-center vertical-center"
        style={{ height: 430 }}
      >
        <div className="col-12 m-0 p-0 row">
          <div className="col-12 m-0 p-0 text-center">
            <h1
              className="horizontal-center font-weight-light text-muted"
              style={{ width: '100%' }}
            >
              {FontIcon('faBug')}&nbsp;<span>404</span>
            </h1>
          </div>
          <div className="col-12 m-0 p-0 text-center">
            <h4
              className="horizontal-center font-weight-light"
              style={{ width: '100%' }}
            >
              Page Not Found
            </h4>
          </div>
          <div className="col-12 m-0 p-0 text-center text-muted">
            <p>
              We are sorry but the page you requested could not be found.
              <br />
              Try again or click below to go back to the homepage.
            </p>
            <br />
            <button
              className="btn btn-light"
              onClick={() => {
                window.history.back();
              }}
            >
              {FontIcon('faChevronLeft')}&nbsp;Go back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;
