/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import { SOURCE_YOUTUBE_LABEL } from '../../../constants';

class Thumbnail extends Component {
  render() {
    const { profile_pic_url, settings, source, userData } = this.props;

    // Get source URL for thumbnail:
    const getThumbnailSrc = () => {
      const {
        SOURCE_INSTAGRAM_LABEL,
        SOURCE_REDDIT_LABEL,
        SOURCE_TWITTER_LABEL,
      } = this.props;

      // :
      let src;
      switch (source) {
        case SOURCE_REDDIT_LABEL:
          src = settings ? settings.ui.defaultPostThumbs.reddit.default : null;
          break;

        case SOURCE_TWITTER_LABEL:
          if (settings.ui.defaultPostThumbs.useDefaultPostThumbs) {
            const hasCustomThumb = userData && userData.profile_image_url;
            src = hasCustomThumb
              ? userData.profile_image_url
              : settings.ui.defaultPostThumbs.twitter.default;
          } else {
            src = settings
              ? settings.ui.defaultPostThumbs.twitter.default
              : null;
          }
          break;

        case SOURCE_YOUTUBE_LABEL:
          src = settings ? settings.ui.defaultPostThumbs.youtube.default : null;
          break;

        case SOURCE_INSTAGRAM_LABEL:
          if (settings.ui.defaultPostThumbs.useDefaultPostThumbs) {
            const hasCustomThumb = userData && profile_pic_url;
            src = hasCustomThumb
              ? profile_pic_url
              : settings.ui.defaultPostThumbs.instagram.default;
          } else {
            src = settings.ui.defaultPostThumbs.instagram.default;
          }
          break;

        default:
          src = settings.ui.defaultPostThumbs.general;
      }
      return src;
    };
    return (
      <React.Fragment>
        <img
          alt={`Thumbnail for ${source} post`}
          className="mx-1 rounded post-thumbnail"
          src={getThumbnailSrc()}
        />
      </React.Fragment>
    );
  }
}

export default Thumbnail;
