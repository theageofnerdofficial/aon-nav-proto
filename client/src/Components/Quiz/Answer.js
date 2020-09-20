import React, { Component } from 'react';

class Answer extends Component {
  render() {
    const {
      answerIndex,
      answerLetter,
      answers,
      questionIndex,
      quizAddAnswer,
      quizReducer,
      quizUpdateQNumber,
      quizUpdateScreen,
    } = this.props;

    const hasLastQuestion = () =>
      questionIndex >= quizReducer.questionData.questions.length - 1;

    /* If the answer has a "userAnswer" property, i.e. the user
       has already chosen an answer for the question, apply a
       style class to highlight it:
     *************************************************************/
    const hasUserAnswer = () => {
      if (
        quizReducer.questionData.questions &&
        quizReducer.questionData.questions[questionIndex]
      ) {
        return (
          answerIndex ===
          quizReducer.questionData.questions[questionIndex].userAnswer
        );
      }
    };

    return (
      <div className="col-12 p-0 m-0">
        <button
          className={`btn btn-sm btn-light form-control ${
            hasUserAnswer() ? 'quiz-user-answer' : null
          }`}
          onClick={() => {
            const qawrapper = document.getElementById('quiz-qa-wrapper');
            if (qawrapper) qawrapper.style.display = 'none';
            window.setTimeout(() => {
              qawrapper.style.display = 'block';
            }, 300);

            //
            quizAddAnswer({
              answerIndex: answerIndex,
            });
            if (!hasLastQuestion()) {
              quizUpdateQNumber({
                inc: 1,
              });
            } else {
              quizUpdateScreen(2);
            }
          }}
        >
          <span className="text-uppercase">{answerLetter}.&nbsp;</span>
          {answers[answerLetter]}
        </button>
      </div>
    );
  }
}

export default Answer;
