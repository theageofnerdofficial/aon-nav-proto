import React, { Component } from 'react';

import Quiz from './Quiz';

class QuizPage extends Component {
  componentDidMount() {
    this.props.quizRequestData({ id: '5f58f9790a27010acad1d82e' });
  }
  render() {
    return (
      <Quiz
        quizReducer={this.props.quizReducer}
        quizUpdateQNumber={this.props.quizUpdateQNumber}
      />
    );
  }
}

export default QuizPage;
