import React, { Component } from 'react';
import labels from '../../../config/labels';

class QuizCreationTips extends Component {
  render() {
    return (
      <div>
        Tips:
        <ul className="ul-tips-list text-muted">
          {labels.ui.quiz.tips.map((tip) => (
            <li>{`${tip}.`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QuizCreationTips;
