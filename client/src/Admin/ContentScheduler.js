// Imports:
import React, { Component } from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Calendar from '../Components/Calendar/Calendar';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import FontIcon from '../Components/FontIcon/FontIcon';
import utils from '../Components/Utils/utils/utils';

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
              <table>
                <tr>
                  <td style={{ color: 'lime' }}>■</td>
                  <td>
                    <small className="text-muted">Quiz Chosen</small>
                    &nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{ color: 'cornflower' }}>■</td>
                  <td>
                    <small className="text-muted">Today</small>
                  </td>
                </tr>
              </table>
              <Calendar schedulerSelectDate={this.props.schedulerSelectDate} />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8 m-0 p-0">
            <SectionTitlePostsTitle text="Specify Content" />
            <p>
              Note:::: Not working yet but you can see how it will function. If
              date has no quiz, then a random one will be chosen.
            </p>
            <label>Date Selected</label>
            <br />
            <input
              className="form-control"
              type="date"
              readOnly
              value={this.props.schedulerReducer.dateSelected}
            />
            <br />
            Quiz:
            <select className="form-control">
              {this.props.quizReducer.quizListData
                ? this.props.quizReducer.quizListData.map((q, index) => {
                    return (
                      <option>
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
            <button className="btn btn-light form-control shadow-sm">
              Submit {FontIcon('faChevronRight')}
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentScheduler;
