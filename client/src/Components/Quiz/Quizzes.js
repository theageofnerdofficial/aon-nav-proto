import React, { Component } from 'react';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
import SectionTitle from '../SectionTitle/SectionTitle';
import utils from '../../config/utils';

class Quizzes extends Component {
  componentDidMount() {
    if (this.props.quizzesGetList) {
      this.props.quizzesGetList();
    }
  }

  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Quiz List" />
        <SectionTitlePostsTitle
          text={`Quizzes (${this.props.quizReducer.quizListData.length})`}
        />

        {this.props.quizReducer.quizListData.map((q, index) => {
          return (
            <React.Fragment>
              <p>
                <this.props.Link to={`/quiz/${q._id}`}>
                  #
                  {utils.num.zeroPad(
                    this.props.quizReducer.quizListData.length - index,
                    7
                  )}
                  {' - '}
                  {q.title}
                </this.props.Link>
              </p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Quizzes;
