import React, { Component } from 'react';
import FontIcon from '../../Components/FontIcon/FontIcon';
import labels from '../../config/labels';
import '../../Main.css';

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
              {labels.ui.general.pageNotFound.title}
            </h4>
          </div>
          <div className="col-12 m-0 p-0 text-center text-muted">
            <p>
              {labels.ui.general.pageNotFound.message}
              <br />
              {labels.ui.general.pageNotFound.instruction}
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
