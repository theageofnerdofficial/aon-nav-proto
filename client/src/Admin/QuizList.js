import React, { Component } from 'react';
import FontIcon from '../Components/FontIcon/FontIcon';
//import ModifyBtn from '../Components/Button/ModifyBtn';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import utils from '../Components/Utils/utils/utils';

class QuizList extends Component {
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
        <table className="table table-striped">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th className="text-center">Number of Questions</th>
            <th className="text-center">Added By</th>
            <th>-</th>
          </tr>
          <tbody>
            {this.props.quizReducer.quizListData.map((q, index) => {
              return (
                <tr>
                  <td>
                    #
                    {utils.num.zeroPad(
                      this.props.quizReducer.quizListData.length - index,
                      7
                    )}
                    <br />
                    <small className="text-muted">{q._id}</small>
                  </td>
                  <td>{q.title}</td>
                  <td className="text-center">{q.questions.length}</td>
                  <td className="text-center">{q.createdBy}</td>
                  <td style={{ width: 60 }}>
                    <this.props.Link to="/">
                      <button className="btn btn-sm btn-secondary form-control mb-1">
                        {FontIcon('faEdit')}
                      </button>
                    </this.props.Link>
                    <br />
                    <button
                      className="btn btn-sm btn-danger form-control"
                      onClick={() => {
                        const hasConfirmed = window.confirm(
                          'Are you bloody sure you want to do that, mate?'
                        );
                        if (hasConfirmed) {
                          //
                        }
                      }}
                    >
                      {FontIcon('faTrashAlt')}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default QuizList;
