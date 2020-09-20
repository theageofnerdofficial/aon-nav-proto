import React, { Component } from 'react';
import CompletionScreen from './CompletionScreen';
import Quiz from './Quiz';
import LoaderCentered from '../Loader/LoaderCentered';

class QuizPage extends Component {
  componentDidMount() {
    const hasQuizId = window.location.href.split('/')[3] === 'quiz';
    if (hasQuizId) {
      this.props.quizRequestData({ id: window.location.href.split('/')[4] });
    } else {
      this.props.quizRequestData({ id: this.props.quizId });
    }
  }
  render() {
    const {
      quizAddAnswer,
      quizCalculateScore,
      quizReducer,
      quizReset,
      quizUpdateQNumber,
      quizUpdateScreen,
    } = this.props;

    // :
    const screen = {
      0: () => {
        // titlescreen??
      },
      1: () => {
        return quizReducer && quizReducer.questionData.questions ? (
          <Quiz
            quizAddAnswer={quizAddAnswer}
            quizReducer={quizReducer}
            quizUpdateQNumber={quizUpdateQNumber}
            quizUpdateScreen={quizUpdateScreen}
          />
        ) : (
          <LoaderCentered />
        );
      },
      2: () => {
        return (
          <CompletionScreen
            quizCalculateScore={quizCalculateScore}
            quizReducer={quizReducer}
            quizReset={quizReset}
            quizUpdateScreen={quizUpdateScreen}
          />
        );
      },
    };
    return <div>{screen[quizReducer.quizScreen]()}</div>;
  }
}

export default QuizPage;
