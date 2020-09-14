// Imports:
import React, { Component } from 'react';

class ContentSchedulerKey extends Component {
  render() {
    return (
      <table>
        <tr>
          <td style={{ color: 'lime' }}>■</td>
          <td>
            <small className="text-muted">Has Quiz</small>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td style={{ color: 'cornflower' }}>■</td>
          <td>
            <small className="text-muted">Today</small>
          </td>
        </tr>
      </table>
    );
  }
}

export default ContentSchedulerKey;
