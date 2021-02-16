// Imports:
import React, { Component } from 'react';
import QuestionCard from './QuestionCard/QuestionCard';
import Answers from './Answers';
import HUD from './HUD/HUD';
import settings from '../../config/settings';

class Home extends Component {
  render() {
    return (
      <div className={`${settings.debug.guidelines ? 'guidelines' : null}`}>
        <HUD />
        <br />
        <QuestionCard />
        <br />
        <Answers />
        <div className="row col-12 m-0 my-1 p-0 text-center">
          <div className="progress col-12 p-0 m-0">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={10}
              style={{ width: '70%' }}
            >
              <span className="sr-only">70% Complete</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
