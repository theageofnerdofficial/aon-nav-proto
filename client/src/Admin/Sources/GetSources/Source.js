// Imports:
import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../constants';
import utils from '../../../Components/Utils/utils/utils';
import FontIcon from '../../../Components/FontIcon/FontIcon';

class Source extends Component {
  render() {
    const getTableCellsByService = (src) => {
      if (src.service === SOURCE_REDDIT) {
        return (
          <a href={`https://www.reddit.com/r/${src.subreddit}`} target="_blank">
            {utils.str.makeTitleCase(src.subreddit)}
          </a>
        );
      } else if (src.service === SOURCE_TWITTER) {
        return (
          <a
            href={`https://www.twitter.com/${src.twitterUser}`}
            target="_blank"
          >
            {utils.str.makeTitleCase(src.twitterUser)}
          </a>
        );
      }
    };
    const getSource = (src) => {
      if (src.service === SOURCE_REDDIT) {
        return 'Reddit';
      } else if (src.service === SOURCE_TWITTER) {
        return 'Twitter';
      }
    };
    return (
      <React.Fragment>
        <tr>
          <td>
            {utils.str.makeTitleCase(this.props.src.category)}
            <br />
            <small className="font-weight-light">
              {this.props.src.categoryGaming
                ? `(${utils.str.makeTitleCase(this.props.src.categoryGaming)})`
                : ''}
            </small>
          </td>
          <td>{getSource(this.props.src)}</td>
          <td>{getTableCellsByService(this.props.src)}</td>
          <td>{this.props.src.postsNumber}</td>
          <td>{utils.str.makeTitleCase(this.props.src.filter)}</td>
          <td>{this.props.src.period ? this.props.src.period : 'N/A'}</td>
          <td style={{ width: 60 }}>
            <button className="btn btn-sm btn-secondary form-control mb-1">
              {FontIcon('faEdit')}
            </button>
            <br />
            <button className="btn btn-sm btn-danger form-control">
              {FontIcon('faTrashAlt')}
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Source;
