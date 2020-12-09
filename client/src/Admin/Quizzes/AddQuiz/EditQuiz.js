// Imports:
import React, { Component } from 'react';
import FontIcon from '../../../Components/FontIcon/FontIcon';
import QuestionCard from './QuestionCard';
import QuizCreationTips from './QuizCreationTips';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import labels from '../../../config/labels';
import settings from '../../../config/settings';

class EditQuiz extends Component {
  componentDidMount() {
    this.props.quizReset();
    const path = window.location.href.split('editquiz/')[1];
    this.props.quizRequestData({
      addQuestions: true,
      id: path.split('/')[0],
      service: path.split('/')[1],
    });
  }

  render() {
    const { quizFormUpdate, quizReducer } = this.props;

    // Submit quiz functionality — tidying up form data:
    const submitQuiz = (e) => {
      const questions = quizReducer.quizFormQuestions.map((q, index) => {
        return {
          question: q.question,
          answerA: q.answers[0],
          answerB: q.answers[1],
          answerC: q.answers[2],
          answerD: q.answers[3],
          correctAnswer:
            e.target.elements[`qq-${index}-correct`].selectedIndex - 1,
        };
      });
      fetch('/quiz', {
        body: JSON.stringify({
          id: window.location.href.split('editquiz/')[1],
          title: e.target.elements['qq-title'].value,
          questions,
        }),
        headers: settings.network.headers,
        method: 'PUT',
      })
        .then((response) => {
          const { props } = this;
          if (!response.ok) {
            props.flashMsgUpdate({
              msg: `${labels.response.error}: quiz could not be updated.`,
              style: 'danger',
            });
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            props.flashMsgUpdate({
              msg: `${labels.response.success}: quiz was successfully updated.`,
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
        <SectionTitle title="Edit Quiz" />
        <QuizCreationTips />
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
              defaultValue={quizReducer.questionData.title}
              name="qq-title"
              onChange={(e) => {
                e.preventDefault();
                quizFormUpdate({
                  name: e.target.name,
                  value: e.target.value,
                });
              }}
              placeholder="Quiz title"
            />
            <br />
            <br />
            {quizReducer
              ? quizReducer.quizFormQuestions.map((questionData, index) => {
                  return (
                    <QuestionCard
                      index={index}
                      quizFormUpdate={quizFormUpdate}
                      quizReducer={quizReducer}
                    />
                  );
                })
              : null}
            <br />
            <button
              className="btn btn-light form-control mt-2"
              name="qq-add"
              onClick={(e) => {
                e.preventDefault();
                quizFormUpdate({
                  name: e.target.name,
                });
              }}
            >
              Add Question +
            </button>
          </div>
          <br />
          {quizReducer.quizFormQuestions.length ? (
            <button className="form-control btn btn-primary" type="submit">
              Update Quiz {FontIcon('faChevronRight')}
            </button>
          ) : null}
        </form>
      </div>
    );
  }
}

export default EditQuiz;
