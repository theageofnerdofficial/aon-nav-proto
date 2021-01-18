/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import utils from '../../Utils/utils/utils';

class PostTitle extends Component {
  render() {
    const { FontIcon } = this.props;
    const { settings, source, source_data } = this.props.data;

    // Official sources, e.g. Sony's official Twitter should have checkmark:
    const getOfficialSrcCheckmark = () => {
      return settings.ui.labeling.post.officialSrc.checkmarkEnabled &&
        source_data.isOfficial ? (
        <span
          style={{
            color: settings.ui.labeling.post.officialSrc.brandColourEnabled
              ? source_data.brandColor
              : null,
          }}
        >
          {FontIcon('faCheckCircle')}
        </span>
      ) : null;
    };

    // Get name of source user — where available:
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
      <p className="feed-title font-weight-normal mb-1 pl-2 py-1 rounded">
        {getOfficialSrcCheckmark()}
        &nbsp;
        {source_data
          ? `${utils.str.makeTitleCase(getUsername())} - ${source}`
          : null}
      </p>
    );
  }
}

export default PostTitle;
