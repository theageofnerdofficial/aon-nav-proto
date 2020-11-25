import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import Question from './Question';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';

class QuizTitle extends Component {
  componentDidMount() {
    if (this.props.quizId) {
      this.props.quizRequestData({ id: this.props.quizId });
    }
  }
  render() {
    const {
      quizAddAnswer,
      quizReducer,
      // quizReset,
      quizUpdateQNumber,
      quizUpdateScreen,
    } = this.props;

    return (
      <React.Fragment>
        <div className="rounded border" style={{ height: 300, width: '100%' }}>
          <div className="col-12 p-0 m-0" style={{ height: '100%' }}>
            <div style={{ height: '15%' }}></div>
            <div style={{ height: '70%' }}>
              <div
                className="p-0 m-0 vertical-center"
                style={{ fontWeight: '400 !important', height: '33.3%' }}
              >
                <h2>
                  {quizReducer && quizReducer.questionData
                    ? quizReducer.questionData.title
                    : null}
                </h2>
              </div>
              <div className="p-0 m-0 text-center" style={{ height: '33.3%' }}>
                An AON Quiz
              </div>
              <div
                className=" p-0 m-0 vertical-center"
                style={{ height: '33.3%' }}
              >
                <button
                  className="btn btn-light"
                  onClick={() => {
                    quizUpdateScreen(1);
                  }}
                >
                  Start Quiz {FontIcon('faChevronRight')}
                </button>
              </div>
            </div>
            <div style={{ height: '15%' }}></div>

            {/* <h1 className="text-center" style={{ width: '100%' }}>
              {quizReducer && quizReducer.questionData
                ? quizReducer.questionData.title
                : null} */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizTitle;
