// Imports:
import React, { Component } from 'react';
import labels from '../../config/labels';
import settings from '../../config/settings';

class Answers extends Component {
  render() {
    return (
      <div className={`${settings.debug.guidelines ? 'guidelines' : null}`}>
        {labels.ui.quiz.ansLabels.map((element) => (
          <button className="col-12 my-1 btn btn-lg btn-answer shadow-sm">
            {element}. New Dehli
          </button>
        ))}
      </div>
    );
  }
}

export default Answers;
