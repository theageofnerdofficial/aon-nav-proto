/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import postElem from './PostElemBySource/PostElem';
import settings from '../../config/settings';
import utils from '../Utils/utils/utils';
import FontIcon from '../FontIcon/FontIcon';

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
    const getEmbeddedImages = () => {
      if (this.props.entities_media) {
        return this.props.entities_media.map((m) => {
          if (m.media_url) {
            return (
              <div style={{ maxHeight: 200, overflow: 'scroll' }}>
                <img className="rounded" width="100%" src={m.media_url} />
              </div>
            );
          }
        });
      }
    };
    /* :
     ***************************************************************/
    const getEmbeddedMedia = () => {
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
            {getEmbeddedImages()}
          </div>
        );
      }
    };

    /* :
     ***************************************************************/
    const { id, source, text, userData } = this.props;

    return (
      <div className="col-12 m-0 mb-2 p-0 py-3 post-wrapper rounded row shadow-sm">
        <div className="col-2 text-center p-0 m-0">
          {postElem.thumbnail.get({ source, userData }, settings)}
        </div>
        <div className="col-10">
          <h6 className="font-weight-normal">
            {postElem.user.get({ source, userData })}
          </h6>
          <span style={{ position: 'absolute', right: 0, top: '0' }}>
            <button className="btn btn-sm text-muted" style={{ opacity: 0.8 }}>
              {FontIcon('faEllipsisV')}
            </button>
          </span>
          <h6 className="font-weight-light">
            {postElem.text.get(
              { source, text, userData },
              utils,
              ReactHtmlParser
            )}
          </h6>
          {postElem.accordion.get({ id, source, userData }, settings)}
        </div>
        <div className="col-12 m-0 p-2 row">{getEmbeddedMedia()}</div>
        <small
          style={{ fontWeight: 300, opacity: 0.5 }}
          className="text-muted font-italic px-2 pt-1"
        >
          2 hours ago
        </small>
      </div>
    );
  }
}

export default Post;
