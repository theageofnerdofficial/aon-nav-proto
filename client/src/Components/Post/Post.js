/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import Accordion from './PostUI/Accordion/Accordion';
import CreatedCaption from './PostUI/CreatedCaption';
import PostText from './PostUI/PostText';
import PostTitle from './PostUI/PostTitle';
import ReactHtmlParser from 'react-html-parser';
import settings from '../../config/settings';
import Thumbnail from './PostUI/Thumbnail';
import {
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../constants';

class Post extends Component {
  render() {
    const {
      created_time_from,
      description,
      entities_media,
      extended_entities_media,
      FontIcon,
      id,
      labels,
      modalReducer,
      modalUpdateMode,
      permalink,
      preview_img_arr,
      profile_pic_url,
      source,
      source_data,
      text,
      upvote_ratio,
      userData,
      utils,
    } = this.props;

    return (
      <div className=" col-12 m-0 mb-2 p-0 pl-1 py-3 post-wrapper rounded row shadow-sm">
        <div className="col-2 m-0 p-0 text-center">
          <Thumbnail
            profile_pic_url={profile_pic_url}
            settings={settings}
            source={source}
            SOURCE_INSTAGRAM_LABEL={SOURCE_INSTAGRAM_LABEL}
            SOURCE_REDDIT_LABEL={SOURCE_REDDIT_LABEL}
            SOURCE_TWITTER_LABEL={SOURCE_TWITTER_LABEL}
            userData={userData}
          />
          <br />
          <CreatedCaption
            createdTimeFrom={created_time_from}
            labels={labels}
            settings={settings}
          />
        </div>
        <div className="col-10 p-0">
          <PostTitle
            data={{ settings, source, source_data, userData }}
            FontIcon={FontIcon}
          />
          <PostText
            data={{ settings, source, text, userData }}
            ReactHtmlParser={ReactHtmlParser}
            utils={utils}
          />
          <Accordion
            data={{
              description,
              entities_media,
              extended_entities_media,
              id,
              permalink,
              preview_img_arr,
              source,
              source_data,
              text,
              upvote_ratio,
              userData,
            }}
            FontIcon={FontIcon}
            labels={labels}
            modalReducer={modalReducer}
            modalUpdateMode={modalUpdateMode}
            settings={settings}
            utils={utils}
          />
        </div>
      </div>
    );
  }
}

export default Post;
