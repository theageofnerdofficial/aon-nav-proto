import React, { Component } from 'react';

class QuestionCard extends Component {
  render() {
    const getAnswer = (answerIndex) => {
      if (!answerIndex) return false;
      if (this.props.quizReducer.quizFormQuestions) {
        if (this.props.quizReducer.quizFormQuestions[this.props.index]) {
          return this.props.quizReducer.quizFormQuestions[this.props.index]
            .answers[answerIndex];
        }
      }
    };
    return (
      <div className="p-2 col-12 m-0 my-1 p-0 bg-light text-dark shadow-sm rounded row quiz-question-card">
        <div className="col-10 m-0 my-2 p-0 row">
          <div
            className="form-control text-left border-0 text-uppercase"
            style={{ background: 'none', fontSize: '1.2rem' }}
          >
            Question {this.props.index + 1} of{' '}
            {this.props.quizReducer.quizFormQuestions.length}
          </div>
        </div>
        <div className="col-2 m-0 my-2 p-0 row">
          <button
            className="form-control btn btn-sm bg-white shadow-sm text-danger"
            name={`qq-${this.props.index}-remove`}
            onClick={(e) => {
              e.preventDefault();
              this.props.quizFormUpdate({
                name: e.target.name,
              });
            }}
          >
            Delete x
          </button>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">
            Q{this.props.index + 1}.
          </div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              name={`qq-${this.props.index}-question`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Your question here?"
              minLength="5"
              maxLength="100"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">A.</div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              name={`qq-${this.props.index}-0-answer`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Answer A"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">B.</div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              name={`qq-${this.props.index}-1-answer`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Answer B"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">C.</div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              name={`qq-${this.props.index}-2-answer`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Answer C"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">D.</div>
          <div className="col-11 m-0 p-0">
            <input
              className="form-control"
              name={`qq-${this.props.index}-3-answer`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Answer D"
              required
            />
          </div>
        </div>
        <div className="col-12 m-0 my-3 p-0 row">
          <div className="col-1 m-0 p-0 text-center vertical-center">
            Correct:
          </div>
          <div className="col-11 m-0 p-0">
            <select
              className="form-control"
              name={`qq-${this.props.index}-correct`}
              onChange={(e) => {
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              required
            >
              <option selected="true" disabled="disabled"></option>
              <option>A. {getAnswer(0)}</option>
              <option>B. {getAnswer(1)}</option>
              <option>C. {getAnswer(2)}</option>
              <option>D. {getAnswer(3)}</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
