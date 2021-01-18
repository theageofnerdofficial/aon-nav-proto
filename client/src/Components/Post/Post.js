/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import Accordion from './PostUI/Accordion/Accordion';
import CreatedCaption from './PostUI/CreatedCaption';
import PostText from './PostUI/PostText';
import PostTitle from './PostUI/PostTitle';
import ReactHtmlParser from 'react-html-parser';
import settings from '../../config/settings';
import UIControlPanel from './PostUI/UIControlPanel/UIControlPanel';
import Thumbnail from './PostUI/Thumbnail';
import {
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../constants';

class Post extends Component {
  render() {
    /* :
     ***************************************************************/
    const getEmbeddedVideos = () => {
      let variants = [];
      if (this.props.extended_entities_media !== null) {
        this.props.extended_entities_media.forEach((m) => {
          if (m.video_info) {
            m.video_info.variants.forEach((variant) => variants.push(variant));
          }
        });
      }
      if (variants.length > 0) {
        const sources = variants.filter((v) => {
          if (v.content_type === 'video/mp4') return v;
        });
        return (
          <video className="rounded" width="100%" controls>
            {sources.map((s) => (
              <source type={s.content_type} src={s.url}></source>
            ))}
          </video>
        );
      } else {
        return false;
      }
    };
    /* :
     ***************************************************************/
    const getEmbeddedImages = (source) => {
      if (this.props.entities_media) {
        return this.props.entities_media.map((m, index) => {
          // Instagram thumbnail:
          if (source === SOURCE_INSTAGRAM) {
            return (
              <div
                key={`embedded-img-${index}`}
                style={{ maxHeight: 200, overflow: 'scroll' }}
              >
                <img
                  alt="Embedded media"
                  className="rounded lazy"
                  src={m}
                  width="100%"
                />
              </div>
            );
          }

          //
          if (m.media_url) {
            return (
              <div
                key={`embedded-img-${index}`}
                style={{ maxHeight: 200, overflow: 'scroll' }}
              >
                <img
                  alt="Embedded media"
                  className="rounded lazy"
                  src={m.media_url}
                  width="100%"
                />
              </div>
            );
          }
        });
      }
    };
    /* :
     ***************************************************************/
    const getEmbeddedMedia = (source) => {
      const embeddedVideos = getEmbeddedVideos();
      if (embeddedVideos) {
        return (
          <React.Fragment>
            <div className="col-6 p-1" style={{ alignSelf: 'flex-start' }}>
              {getEmbeddedImages()}
            </div>
            <div className="col-6 p-1" style={{ alignSelf: 'flex-start' }}>
              {embeddedVideos}
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <div className="col-12 p-0" style={{ alignSelf: 'flex-start' }}>
            {getEmbeddedImages(source)}
          </div>
        );
      }
    };

    /* :
     ***************************************************************/
    const {
      description,
      id,
      labels,
      permalink,
      source,
      source_data,
      text,
      preview_img_arr,
      profile_pic_url,
      userData,
      upvote_ratio,
      created_time_from,
      //
      FontIcon,
      modalReducer,
      modalUpdateMode,
      utils,
    } = this.props;

    return (
      <div className="col-12 m-0 mb-2 p-0 pl-1 py-3 post-wrapper rounded row shadow-sm">
        <div className="col-2 m-0 p-0 text-center">
          <Thumbnail
            profile_pic_url={profile_pic_url}
            source={source}
            settings={settings}
            userData={userData}
            SOURCE_INSTAGRAM_LABEL={SOURCE_INSTAGRAM_LABEL}
            SOURCE_REDDIT_LABEL={SOURCE_REDDIT_LABEL}
            SOURCE_TWITTER_LABEL={SOURCE_TWITTER_LABEL}
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
          <UIControlPanel FontIcon={FontIcon} />
        </div>
        <div className="col-12 m-0 p-0 row">{getEmbeddedMedia(source)}</div>
      </div>
    );
  }
}

export default Post;
