// Imports:
import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../constants';
import utils from '../../../Components/Utils/utils/utils';

class Source extends Component {
  render() {
    const getTableCellsByService = (src) => {
      if (src.service === SOURCE_REDDIT) {
        return utils.str.makeTitleCase(src.subreddit);
      } else if (src.service === SOURCE_TWITTER) {
        //
        return utils.str.makeTitleCase(src.twitterUser);
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
            <br />(
            {this.props.src.categoryGaming
              ? utils.str.makeTitleCase(this.props.src.categoryGaming)
              : ''}
            )
          </td>
          <td>{getSource(this.props.src)}</td>
          <td>{getTableCellsByService(this.props.src)}</td>
          <td>{this.props.src.postsNumber}</td>
          <td>{utils.str.makeTitleCase(this.props.src.filter)}</td>
          <td>{this.props.src.period ? this.props.src.period : 'N/A'}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Source;
