import React, { Component } from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
//import ModifyBtn from '../Components/Button/ModifyBtn';
import FontIcon from '../Components/FontIcon/FontIcon';

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
            <th>Title</th>
            <th className="text-center">Number of Questions</th>
            <th className="text-center">Added By</th>
            <th>-</th>
          </tr>
          <tbody>
            {this.props.quizReducer.quizListData.map((q) => {
              return (
                <tr>
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
