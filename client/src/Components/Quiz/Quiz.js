import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import Question from './Question';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
class Quiz extends Component {
  componentDidMount() {
    if (this.props.quizId) {
      this.props.quizRequestData({ id: this.props.quizId });
    }
  }
  render() {
    const {
      quizAddAnswer,
      quizReducer,
      quizReset,
      quizUpdateQNumber,
      quizUpdateScreen,
    } = this.props;

    // :
    const hasLastQuestion = () => {
      if (quizReducer && quizReducer.questionData.questions) {
        return getQNumber() === quizReducer.questionData.questions.length - 1
          ? 'disabled'
          : null;
      } else {
        return null;
      }
    };

    // :
    const getQNumber = () => (quizReducer ? quizReducer.questionNumber : null);

    // :
    const getQPercentage = () =>
      quizReducer && quizReducer.questionData.questions
        ? (getQNumber() / quizReducer.questionData.questions.length) * 100
        : null;

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
            question={
              quizReducer && quizReducer.questionData.questions
                ? quizReducer.questionData.questions[getQNumber()].question
                : null
            }
            quizAddAnswer={quizAddAnswer}
            quizLength={
              quizReducer && quizReducer.questionData.questions
                ? quizReducer.questionData.questions.length
                : null
            }
            quizReducer={quizReducer}
            quizUpdateQNumber={quizUpdateQNumber}
            quizUpdateScreen={quizUpdateScreen}
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
        <div className="rounded" style={{ width: '100%' }}>
          <div className="col-12 m-0 p-0 row">
            <div className="col-6 m-0 p-0">
              <button
                className={`btn btn-light btn-sm form-control ${
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
            <div className="col-6 m-0 p-0">
              <button
                className={`btn btn-light btn-sm form-control ${hasLastQuestion()}`}
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
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
