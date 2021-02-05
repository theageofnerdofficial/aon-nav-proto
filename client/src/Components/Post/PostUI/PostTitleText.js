/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import PostTitleIcons from './PostTitleIcons';

class PostTitleText extends Component {
  render() {
    const {
      FontIcon,
      // labelsBySource,
      settings,
      source,
      source_data,
      utils,
    } = this.props;

    // :
    const getUsername = () => {
      if (source_data) {
        if (source_data.twitterUser) {
          return source_data.twitterUser;
        } else if (source_data.subreddit) {
          return source_data.subreddit;
        } else if (source_data.youtubeUser) {
          return source_data.youtubeUser;
        } else {
          return source_data.username;
        }
      }
    };

    /*
    const getSourceIcon = (source) => {
      if (source === labelsBySource.SOURCE_TWITTER_LABEL) {
        return 'faTwitter';
      } else if (source === labelsBySource.SOURCE_REDDIT_LABEL) {
        return 'faRedditAlien';
      } else if (source === labelsBySource.SOURCE_INSTAGRAM_LABEL) {
        return 'faInstagramSquare';
      } else if (source === labelsBySource.SOURCE_YOUTUBE_LABEL) {
        return 'faYoutubeSquare';
      }
    };*/

    return (
      <div className="col-8 m-0 p-0">
        <div className="col-12 p-0 m-0 row">
          <div className="col-1 m-0 p-0 row">
            <PostTitleIcons
              FontIcon={FontIcon}
              settings={settings}
              source={source}
              source_data={source_data}
            />
          </div>
          <div className=" col-11 m-0 p-0">
            <button className="btn m-0 p-0" style={{ fontSize: '1.15rem' }}>
              {/*{FontIcon(`${getSourceIcon(source)}`)}*/}
              {source_data ? `${utils.str.makeTitleCase(getUsername())}` : null}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTitleText;
