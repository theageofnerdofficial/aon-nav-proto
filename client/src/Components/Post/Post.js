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

    const getAccordion = () => {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#collapse${this.props.id}`}
            >
              <button
                className="btn-link font-weight-light form-control panel-title"
                onClick={(e) => {
                  e.target.innerHTML =
                    e.target.innerHTML === settings.ui.labels.panel.expand
                      ? settings.ui.labels.panel.contract
                      : settings.ui.labels.panel.expand;
                }}
              >
                {settings.ui.labels.panel.expand}
              </button>
            </a>
          </div>
          <div
            id={`collapse${this.props.id}`}
            className="panel-collapse collapse in"
          >
            <br />
            <div className="panel-body font-weight-light font-italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      );
    };

    //
    const { source, text, userData } = this.props;
    /* :
     ***************************************************************/
    return (
      <div className="col-12 m-0 mb-2 p-0 py-2 post-wrapper rounded row shadow-sm">
        <div className="col-2 text-center p-0 m-0">
          {postElem.thumbnail.get({ source, userData }, settings)}
          <br />
        </div>
        <div className="col-10">
          <h6 className="font-weight-normal">
            {postElem.user.get({ source, userData })}
          </h6>
          <h6 className="font-weight-light">
            {postElem.text.get(
              { source, text, userData },
              utils,
              ReactHtmlParser
            )}
          </h6>
          {getAccordion()}
        </div>
        <div className="col-12 m-0 p-2 row">{getEmbeddedMedia()}</div>
        <small
          style={{ fontWeight: 300, opacity: 0.7 }}
          className="text-muted font-italic py-2"
        >
          2 hours ago
        </small>
      </div>
    );
  }
}

export default Post;
