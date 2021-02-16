// Imports:
import React, { Component } from 'react';

class QuestionText extends Component {
  render() {
    const { settings } = this.props;
    return (
      <div
        className="vertical-center"
        style={{ height: 190, margin: 'auto', padding: 0, width: '100%' }}
      >
        <h1
          className={`text-center ${
            settings.debug.guidelines ? 'guidelines' : null
          }`}
        >
          What is the capital of India?
        </h1>
      </div>
    );
  }
}

export default QuestionText;
