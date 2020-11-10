/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import {
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER_LABEL,
} from '../../constants';
import DotsMenu from './PostUI/DotsMenu';
import DotsMenuButton from './PostUI/DotsMenuButton';
import CreatedCaption from './PostUI/CreatedCaption';
import FontIcon from '../FontIcon/FontIcon';
import PostText from './PostUI/PostText';
import PostTitle from './PostUI/PostTitle';
import ReactHtmlParser from 'react-html-parser';
import postElem from './PostElemBySource/PostElem';
import settings from '../../config/settings';
import utils from '../Utils/utils/utils';
import format from '../../config/format';

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
    const formatDate = (created_at, source) => {
      const sourceLabel = format.source.labelFromConstant(source);

      if (sourceLabel === SOURCE_TWITTER_LABEL) {
        console.log('twitter...');
      }
      if (sourceLabel === SOURCE_INSTAGRAM_LABEL) {
        let uet = format.time.uetToHumanReadable(created_at).toString();
        return format.time.from(uet);
      } else if (sourceLabel === SOURCE_REDDIT_LABEL) {
        return format.time.from(created_at);
      } else if (sourceLabel === SOURCE_TWITTER_LABEL) {
        console.log(created_at);
        return created_at;
        return format.time.from(created_at);
      }
    };

    /* :
     ***************************************************************/
    const {
      id,
      c,
      source,
      source_data,
      text,
      profile_pic_url,
      userData,
      created_time_from,
    } = this.props;

    return (
      <div className="col-12 m-0 mb-2 p-0 pl-1 py-3 post-wrapper rounded row shadow-sm border">
        <div className="col-2 m-0 p-0 text-center">
          {postElem.thumbnail.get(
            { source, userData, profile_pic_url },
            settings
          )}
          <br />
          <CreatedCaption createdTimeFrom={created_time_from} />
        </div>
        <div className="col-10">
          <PostTitle
            postElem={postElem}
            source={source}
            source_data={source_data}
            userData={userData}
          />
          <DotsMenu id={id} />
          <DotsMenuButton FontIcon={FontIcon} id={id} />
          {/*
          <PostText
            postElem={postElem}
            ReactHtmlParser={ReactHtmlParser}
            source={source}
            userData={userData}
            utils={utils}
          />
          */}
          <p className="font-weight-light p-0 m-0">
            {postElem.text.get(
              { source, text, userData },
              utils,
              ReactHtmlParser
            )}
          </p>
          {postElem.accordion.get({ id, source, userData }, settings)}
        </div>
        <div className="col-12 m-0 p-0 row">{getEmbeddedMedia(source)}</div>
      </div>
    );
  }
}

export default Post;
