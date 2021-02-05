/* Imports:
 ***************************************************************/
import React, { Component } from 'react';

class PostTitleIcons extends Component {
  render() {
    const { FontIcon, settings, source_data } = this.props;

    // :
    const getOfficialSrcCheckmark = () => {
      if (!source_data) return false;
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
      ) : (
        '~' // <-------------------------- move to
      );
    };

    return (
      <div className="col-12 m-0 p-0 row">
        <button className="btn btn-sm m-0 p-0 col-12">
          {getOfficialSrcCheckmark()}
        </button>
      </div>
    );
  }
}

export default PostTitleIcons;
