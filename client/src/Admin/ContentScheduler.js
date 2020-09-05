// Imports:
import React, { Component } from 'react';

import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Calendar from '../Components/Calendar/Calendar';
import SectionTitlePostsTitle from '../Components/SectionTitle/SectionTitlePostsTitle';
import FontIcon from '../Components/FontIcon/FontIcon';

class ContentScheduler extends Component {
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
              <Calendar />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8 m-0 p-0">
            <SectionTitlePostsTitle text="Specify Content" />
            <label>Date Selected</label>
            <br />
            {this.props.schedulerReducer.dateSelected}
            <input className="form-control" readOnly value="dd-mm-yy" />
            <br />
            Quiz:
            <select className="form-control">
              <option>ddddd</option>
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
