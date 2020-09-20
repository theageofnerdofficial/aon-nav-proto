import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
  render() {
    const {
      answers,
      index,
      question,
      quizAddAnswer,
      quizLength,
      quizReducer,
      quizUpdateQNumber,
      quizUpdateScreen,
    } = this.props;

    return (
      <div style={{ minHeight: 220 }}>
        <div id="quiz-qa-wrapper" className="quiz-qa-wrapper">
          <div className="col-12 p-0 m-0 mb-2 vertical-center">
            <p className="font-weight-light text-left p-0 m-0">
              Q{index + 1} of {quizLength}. {question}
            </p>
          </div>

          {/* Dynamically create A-D answers for users to select from:
           **********************************************************/}
          {['a', 'b', 'c', 'd'].map((answerLetter, answerIndex) => {
            return (
              <Answer
                answerLetter={answerLetter}
                answers={answers}
                answerIndex={answerIndex}
                questionIndex={index}
                quizAddAnswer={quizAddAnswer}
                quizReducer={quizReducer}
                quizUpdateQNumber={quizUpdateQNumber}
                quizUpdateScreen={quizUpdateScreen}
              />
            );
          })}
          <br />
        </div>
      </div>
    );
  }
}

export default Question;
