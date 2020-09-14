// Imports:
import React, { Component } from 'react';
import Calendar from '../Components/Calendar/Calendar';
import ContentSchedulerKey from './ContentSchedulerKey';
import FontIcon from '../Components/FontIcon/FontIcon';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import labels from '../config/labels';
import utils from '../Components/Utils/utils/utils';
import { fetchConstructor } from '../actions';

class ContentScheduler extends Component {
  componentDidMount() {
    if (this.props.quizzesGetList) {
      this.props.quizzesGetList();
    }
  }
  render() {
    return (
      <React.Fragment>
        <SectionTitle title="Content Scheduler" />
        <div className="col-12 p-0 m-0 row">
          <div
            className="col-12 col-md-6 col-lg-4 m-0 p-0 text-center"
            style={{ minHeight: 280 }}
          >
            <div style={{ height: '100%', width: '100%' }}>
              <ContentSchedulerKey />
              <Calendar
                quizReducer={this.props.quizReducer}
                schedulerSelectDate={this.props.schedulerSelectDate}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8 m-0 p-0">
            <SectionTitlePostsTitle text="Specify Content" />
            <p>
              Note:::: Not working yet but you can see how it will function. If
              date has no quiz, then a random one will be chosen.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const { props } = this;
                const { elements } = e.target;
                const formatElement = (elem) => elem.replace(/^\s+|\s+$/g, '');
                const quizId = formatElement(elements['quiz-scheduled'].value);
                const quizDate = formatElement(
                  elements['date-scheduled'].value
                );

                fetchConstructor(
                  {
                    url: '/quiz/schedule',

                    body: JSON.stringify({
                      quizDate,
                      quizId,
                    }),
                    method: 'PUT',
                    func: {
                      checkErrors: (res) => {
                        if (res.errors) {
                          const warnings = res.message;
                          props.flashMsgUpdate({
                            msg: warnings.split(',')[0],
                            style: 'danger',
                          });
                          props.flashMsgFlash();
                          return false;
                        } else {
                          props.flashMsgUpdate({
                            msg: `${labels.response.success}: content was successfully scheduled.`,
                            style: 'success',
                          });
                          props.flashMsgFlash();
                          if (props.sourcesReset) props.sourcesReset();
                        }
                      },
                      checkCatch: (e) => {
                        props.flashMsgUpdate({
                          msg: e.message,
                          style: 'danger',
                        });
                        props.flashMsgFlash();
                      },
                    },
                  },
                  this.props
                );
              }}
            >
              <label>Date Selected</label>
              <br />
              <input
                className="form-control"
                name="date-scheduled"
                type="date"
                readOnly
                value={this.props.schedulerReducer.dateSelected}
              />
              <br />
              Quiz:
              <select className="form-control" name="quiz-scheduled">
                {this.props.quizReducer.quizListData
                  ? this.props.quizReducer.quizListData.map((q, index) => {
                      return (
                        <option value={q._id}>
                          #
                          {utils.num.zeroPad(
                            this.props.quizReducer.quizListData.length - index,
                            7
                          )}
                          {' - '}
                          {q.title}
                        </option>
                      );
                    })
                  : null}
              </select>
              <br />
              <button
                className="btn btn-light form-control shadow-sm"
                type="submit"
              >
                Submit {FontIcon('faChevronRight')}
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentScheduler;
