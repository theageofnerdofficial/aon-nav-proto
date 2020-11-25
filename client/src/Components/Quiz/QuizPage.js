import React, { Component } from 'react';
import CompletionScreen from './CompletionScreen';
import Quiz from './Quiz';
import LoaderCentered from '../Loader/LoaderCentered';
import QuizTitle from './QuizTitle';

class QuizPage extends Component {
  componentDidMount() {
    const { quizId, quizRequestData } = this.props;
    if (window.location.href.split('/')[3] === 'quiz') {
      quizRequestData({ id: window.location.href.split('/')[4] });
    } else {
      quizRequestData({ id: quizId });
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
        return (
          <QuizTitle
            quizAddAnswer={quizAddAnswer}
            quizReducer={quizReducer}
            quizUpdateScreen={quizUpdateScreen}
          />
        );
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
