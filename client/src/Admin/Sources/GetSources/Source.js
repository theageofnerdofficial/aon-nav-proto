// Imports:
import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../constants';
import utils from '../../../Components/Utils/utils/utils';

class Source extends Component {
  render() {
    const formatService = (source) => {
      if (source === SOURCE_REDDIT) {
        return 'Reddit';
      } else if (source === SOURCE_TWITTER) {
        return 'Twitter';
      }
    };
    return (
      <div>
        <table className="table table-striped">
          <tr>
            <th>Category</th>
            <th>Service</th>
            <th>Source</th>
            <th>Posts</th>
            <th>Filter</th>
            <th>Period</th>
          </tr>
          <tr>
            <td>
              {utils.str.makeTitleCase(this.props.src.category)}
              <br />(
              {this.props.src.categoryGaming
                ? utils.str.makeTitleCase(this.props.src.categoryGaming)
                : ''}
              )
            </td>

            <td>{formatService(this.props.src.service)}</td>
            <td>{utils.str.makeTitleCase(this.props.src.subreddit)}</td>
            <td>{this.props.src.postsNumber}</td>
            <td>{utils.str.makeTitleCase(this.props.src.filter)}</td>
            <td>{this.props.src.period ? this.props.src.period : 'N/A'}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Source;
