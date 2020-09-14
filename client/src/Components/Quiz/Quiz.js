import React, { Component } from 'react';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
import Question from './Question';
import FontIcon from '../FontIcon/FontIcon';

class Quiz extends Component {
  componentDidMount() {
    if (this.props.quizId) {
      this.props.quizRequestData({ id: this.props.quizId });
    }
  }
  render() {
    const { quizReducer, quizUpdateQNumber } = this.props;

    //
    const getQNumber = () => (quizReducer ? quizReducer.questionNumber : null);

    //
    const getQPercentage = () =>
      quizReducer && quizReducer.questionData.questions
        ? (getQNumber() / quizReducer.questionData.questions.length) * 100
        : null;

    const isQLast = () => {
      if (quizReducer && quizReducer.questionData.questions) {
        return getQNumber() === quizReducer.questionData.questions.length - 1
          ? 'disabled'
          : null;
      } else {
        return null;
      }
    };
    return (
      <React.Fragment>
        <div className="rounded" style={{ height: 300, width: '100%' }}>
          <div className="col-12 p-0 m-0">
            <SectionTitlePostsTitle
              text={
                quizReducer && quizReducer.questionData
                  ? quizReducer.questionData.title
                  : null
              }
            />
          </div>
          <Question
            question={
              quizReducer && quizReducer.questionData.questions
                ? quizReducer.questionData.questions[getQNumber()].question
                : null
            }
            quizLength={
              quizReducer && quizReducer.questionData.questions
                ? quizReducer.questionData.questions.length
                : null
            }
            answers={{
              a:
                quizReducer && quizReducer.questionData.questions
                  ? quizReducer.questionData.questions[getQNumber()].answerA
                  : null,
              b:
                quizReducer && quizReducer.questionData.questions
                  ? quizReducer.questionData.questions[getQNumber()].answerB
                  : null,
              c:
                quizReducer && quizReducer.questionData.questions
                  ? quizReducer.questionData.questions[getQNumber()].answerC
                  : null,
              d:
                quizReducer && quizReducer.questionData.questions
                  ? quizReducer.questionData.questions[getQNumber()].answerD
                  : null,
            }}
            correct={
              quizReducer && quizReducer.questionData.questions
                ? quizReducer.questionData.questions[getQNumber()].correctAnswer
                : null
            }
            index={getQNumber()}
          />
          <div className="col-12 m-0 p-0 row">
            <div className="m-0 p-0 col-10">
              <progress
                style={{ height: 5, width: '100%' }}
                value={getQPercentage()}
              ></progress>
            </div>
            <div
              className="m-0 p-0 col-2 text-center text-muted vertical-center"
              style={{ fontSize: 14 }}
            >
              {getQPercentage()}%
            </div>
          </div>
        </div>

        <div className="rounded" style={{ height: 300, width: '100%' }}>
          <div className="col-12 p-0 m-0 row">
            <div className="col-6 p-0 m-0">
              <button
                className={`btn btn-sm btn-light form-control ${
                  quizReducer.questionNumber ? null : 'disabled'
                }`}
                onClick={(e) => {
                  if (!e.target.classList.contains('disabled')) {
                    quizUpdateQNumber({ inc: 0 });
                  }
                }}
              >
                {FontIcon('faChevronLeft')}&nbsp;Prev
              </button>
            </div>
            <div className="col-6 p-0 m-0">
              <button
                className={`btn btn-sm btn-light form-control ${isQLast()}`}
                onClick={(e) => {
                  if (!e.target.classList.contains('disabled')) {
                    quizUpdateQNumber({ inc: 1 });
                  }
                }}
              >
                Next&nbsp;{FontIcon('faChevronRight')}
              </button>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <br />
            <SectionTitlePostsTitle text="Quiz Archives" />
          </div>
          <ul className="font-weight-light">
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
