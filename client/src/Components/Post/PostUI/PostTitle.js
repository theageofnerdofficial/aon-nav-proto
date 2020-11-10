/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../../FontIcon/FontIcon';
import utils from '../../Utils/utils/utils';

class PostTitle extends Component {
  render() {
    let { source, source_data, userData } = this.props;
    const getUsername = () => {
      if (source_data) {
        if (source_data.twitterUser) {
          return source_data.twitterUser;
        } else if (source_data.subreddit) {
          return source_data.subreddit;
        } else {
          return source_data.username;
        }
      }
    };
    return (
      <p className="feed-title font-weight-normal mb-2 mr-3 pl-1 rounded">
        <span style={{ color: source_data.brandColor }}>
          {/* ONLY ADD CHECK IF IS OFFICIAL... ALSO ADD HOVERTIP */}
          {FontIcon('faCheckCircle')}
        </span>
        &nbsp;
        {source_data
          ? `${utils.str.makeTitleCase(getUsername())} - ${source}`
          : null}
      </p>
    );
  }
}

export default PostTitle;
