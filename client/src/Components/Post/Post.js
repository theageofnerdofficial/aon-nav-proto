/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import FontIcon from '../FontIcon/FontIcon';
import utils from '../Utils/utils/utils';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../constants';
import postElem from './PostElemBySource/PostElem';
import settings from '../../config/settings';

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
      //
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
          <div className="col-12 p-1" style={{ alignSelf: 'flex-start' }}>
            {getEmbeddedImages()}
          </div>
        );
      }
    };
    const getUsername = () => {
      if (this.props.source === SOURCE_TWITTER && this.props.userData) {
        return this.props.userData.screen_name + ' - Twitter (Official)';
      } else if (this.props.source === SOURCE_REDDIT && this.props.userData) {
        return this.props.userData;
      }
    };

    /* :
     ***************************************************************/
    const getIcon = () => {
      if (this.props.source === SOURCE_TWITTER) {
        return 'faTwitter';
      } else if (this.props.source === SOURCE_REDDIT) {
        return 'faRedditAlien';
      }
    };
    //
    const { source, userData } = this.props;
    /* :
     ***************************************************************/
    return (
      <div className="col-12 m-0 mb-2 p-0 py-2 post-wrapper rounded row shadow-sm">
        <div className="col-2 text-center p-0 m-0">
          {postElem.thumbnail.get({ source, userData }, settings)}
          <br />
        </div>
        <div className="col-10 py-2">
          <h6 className="font-weight-normal">
            {getUsername({ source, userData })}
          </h6>
          <h6 className="font-weight-light">
            {ReactHtmlParser(utils.urlify(this.props.text))}
          </h6>
          {/* <small style={{ fontWeight: 300 }} className="text-muted">
            {this.props.created_at}
          </small>*/}
        </div>
        <div className="col-12 m-0 p-2 row">{getEmbeddedMedia()}</div>
      </div>
    );
  }
}

export default Post;
