import React, { Component } from 'react';
import labels from '../../../config/labels';

class QuestionCard extends Component {
  render() {
    const { index, quizFormUpdate, quizReducer } = this.props;

    // Get the content each answer from quiz reducer:
    const getAnswer = (answerIndex) => {
      // if (!answerIndex) return false;
      if (quizReducer.quizFormQuestions) {
        if (quizReducer.quizFormQuestions[index]) {
          return quizReducer.quizFormQuestions[index].answers[answerIndex];
        }
      }
    };

    // Get default answer value for "select":
    const getDefaultAnsValue = () => {
      const { correct } = quizReducer.quizFormQuestions[index];
      return `${labels.ui.quiz.ansLabels[correct]}. ${quizReducer.quizFormQuestions[index].answers[correct]}`;
    };

    return (
      <div className="bg-light col-12 m-0 my-1 p-2 text-dark shadow-sm rounded row quiz-question-card">
        <div className="col-10 m-0 my-2 p-0 row">
          <div
            className="border-0 form-control text-left text-uppercase"
            style={{ background: 'none', fontSize: '1.2rem' }}
          >
            Question {index + 1} of {quizReducer.quizFormQuestions.length}
          </div>
        </div>
        <div className="col-2 m-0 my-2 p-0 row">
          <button
            className="form-control btn btn-sm bg-white shadow-sm text-danger"
            name={`qq-${index}-remove`}
            onClick={(e) => {
              e.preventDefault();
              quizFormUpdate({
                name: e.target.name,
              });
            }}
          >
            Delete x
          </button>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">
            Q{index + 1}.
          </div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              defaultValue={quizReducer.quizFormQuestions[index].question}
              maxLength="100"
              minLength="5"
              name={`qq-${index}-question`}
              onChange={(e) => {
                quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Your question here?"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          {labels.ui.quiz.ansLabels.map((letter, ansIndex) => {
            return (
              <React.Fragment>
                <div className="col-1 m-0 p-0 text-center vertical-center">
                  {`${letter}.`}
                </div>
                <div className="col-11 m-0 p-0">
                  <input
                    className="form-control"
                    defaultValue={
                      quizReducer.quizFormQuestions[index].answers[ansIndex]
                    }
                    name={`qq-${index}-${ansIndex}-answer`}
                    onChange={(e) => {
                      quizFormUpdate({
                        name: e.target.name,
                        value: e.target.value,
                      });
                    }}
                    placeholder={`Answer ${letter}`}
                    required
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="col-12 m-0 my-3 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">
            Correct:
          </div>
          <div className="col-11 m-0 p-0">
            <select
              className="form-control"
              defaultValue={getDefaultAnsValue()}
              name={`qq-${index}-correct`}
              onChange={(e) => {
                quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              required
            >
              <option selected="true" disabled="disabled"></option>
              {labels.ui.quiz.ansLabels.map((elem, index) => (
                <option>
                  {elem}. {getAnswer(index)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
