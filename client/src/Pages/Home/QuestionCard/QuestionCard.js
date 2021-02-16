// Imports:
import React, { Component } from 'react';
import QuestionText from './QuestionText';
import settings from '../../../config/settings';

class QuestionCard extends Component {
  render() {
    return (
      <div
        className={`border question-card shadow-sm ${
          settings.debug.guidelines ? 'guidelines' : null
        }`}
      >
        <QuestionText settings={settings} />
      </div>
    );
  }
}

export default QuestionCard;
