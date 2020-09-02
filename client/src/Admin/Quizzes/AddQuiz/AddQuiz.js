import React, { Component } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import QuestionCard from './QuestionCard';
import FontIcon from '../../../Components/FontIcon/FontIcon';
import settings from '../../../config/settings';
import labels from '../../../config/labels';

class AddQuiz extends Component {
  componentDidMount() {
    console.log(this.props.Link);
  }
  render() {
    const submitQuiz = (e) => {
      const getAnsIndex = (ans) => {
        if (!ans) return false;
        switch (ans.split('.')[0]) {
          case 'A':
            return 0;
          case 'B':
            return 1;
          case 'C':
            return 2;
          case 'D':
            return 3;
          default:
            return false;
        }
      };
      const questions = this.props.quizReducer.quizFormQuestions.map((q) => {
        return {
          question: q.question,
          answerA: q.answers[0],
          answerB: q.answers[1],
          answerC: q.answers[2],
          answerD: q.answers[3],
          correctAnswer: getAnsIndex(q.correct),
        };
      });

      fetch('/quiz', {
        body: JSON.stringify({
          title: this.props.quizReducer.title,
          questions,
          createdBy: localStorage.getItem('aon_user_id'),
        }),
        headers: settings.network.headers,
        method: 'POST',
      })
        .then((response) => {
          const { props } = this;
          if (!response.ok) {
            props.flashMsgUpdate({
              msg: `${labels.response.error}: quiz could not be added.`,
              style: 'danger',
            });
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            props.flashMsgUpdate({
              msg: `${labels.response.success}: quiz was successfully added.`,
              style: 'success',
            });
            props.flashMsgFlash();
            window.setTimeout(() => {
              window.location.reload();
            }, 1000);
            return response.json();
          }
        })
        .catch((e) => {
          alert(
            'There has been a problem with your quiz submission: ' + e.message
          );
        });
    };

    return (
      <div>
        <SectionTitle title="Add Quiz" />
        <div>
          Tips:
          <ul className="ul-tips-list text-muted">
            <li>Proof-read your quiz for mistakes in spelling & grammar.</li>
            <li>
              Keep formatting consistent. Use British-English with sentence
              casing and the Oxford comma.
            </li>
            <li>
              Ensure you have checked the actual correct answer is selected.
            </li>
            <li>
              If doubts arise, ask for a second-opinion from another mod/admin.
            </li>
            <li>Test your quiz to see how it plays.</li>
          </ul>
        </div>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitQuiz(e);
          }}
        >
          <div className="col-12 row p-0 m-0">
            <input
              className="form-control"
              name="qq-title"
              placeholder="Quiz title"
              onChange={(e) => {
                e.preventDefault();
                this.props.quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
            />
            <br />
            <br />
            {this.props.quizReducer
              ? this.props.quizReducer.quizFormQuestions.map(
                  (questionData, index) => {
                    return (
                      <QuestionCard
                        index={index}
                        quizFormUpdate={this.props.quizFormUpdate}
                        quizReducer={this.props.quizReducer}
                      />
                    );
                  }
                )
              : null}
            <br />
            <button
              className="btn btn-light form-control mt-2"
              name="qq-add"
              onClick={(e) => {
                e.preventDefault();
                this.props.quizFormUpdate({
                  name: e.target.name,
                });
              }}
            >
              Add Question +
            </button>
          </div>
          <br />

          {this.props.quizReducer.quizFormQuestions.length ? (
            <button className="form-control btn btn-primary" type="submit">
              Submit Quiz {FontIcon('faChevronRight')}
            </button>
          ) : null}
        </form>
      </div>
    );
  }
}

export default AddQuiz;
