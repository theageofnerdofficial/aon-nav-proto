import React, { Component } from 'react';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
import utils from '../Utils/utils/utils';

class CompletionScreen extends Component {
  componentDidMount() {
    const calculateScore = () => {
      let score = 0;
      if (this.props.quizReducer && this.props.quizReducer.questionData) {
        this.props.quizReducer.questionData.questions.map((question) => {
          if (question.correctAnswer === question.userAnswer) {
            score += 1;
          }
          return 0;
        });
      }
      this.props.quizCalculateScore(score);
    };
    calculateScore();
  }
  render() {
    const { quizReducer, quizReset, quizUpdateScreen } = this.props;
    return (
      <React.Fragment>
        <div className="rounded" style={{ height: 300, width: '100%' }}>
          <div className="col-12 m-0 p-0">
            <SectionTitlePostsTitle text="Quiz Completed" />
          </div>
          <div
            className="col-12 m-0 p-0 row vertical-center"
            style={{ height: '200px' }}
          >
            <div className="col-12 row">
              {/* Score — You got x out of x correct!:
               *********************************************/}

              <h4 className="col-12 font-weight-light text-center">
                You got{' '}
                {quizReducer && quizReducer.questionData
                  ? `${quizReducer.score} out of ${quizReducer.questionData.questions.length} correct`
                  : null}{' '}
                {/* Percentage (in brackets):
                 *********************************************/}
                (
                {quizReducer
                  ? utils.num.percentage(
                      quizReducer.score,
                      quizReducer.questionData.questions.length
                    )
                  : null}
                % )
              </h4>
              <h6 className="col-12 font-weight-light text-center">
                Good going. This was an impressive score
              </h6>
            </div>
          </div>
          <div
            className="col-2 m-0 p-0 text-center text-muted vertical-center"
            style={{ fontSize: 14 }}
          ></div>
        </div>

        <div className="rounded" style={{ width: '100%' }}>
          <div className="col-12 m-0 p-0 row">
            <div className="col-12 m-0 p-0">
              <button
                className={`btn btn-light btn-sm form-control`}
                onClick={(e) => {
                  quizReset();
                  quizUpdateScreen(1);
                }}
              >
                Retry quiz?
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompletionScreen;
