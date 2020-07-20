/* :
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import ReactHtmlParser from 'react-html-parser';
import utils from '../Tweet/utils/utils';

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

    return (
      <div className="bg-light shadow-sm rounded col-12 row p-0 py-2 m-0 mb-2">
        <div className="col-2 text-center p-0 m-0">
          <img
            style={{ borderRadius: '100px', width: '40px' }}
            src={this.props.userData.profile_image_url}
          />
          <br />
          <span
            className="text-secondary"
            style={{
              fontSize: 30,
              opacity: '0.5',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {FontIcon('faTwitter')}
          </span>
        </div>
        <div className="col-10 py-2">
          <h6 className="font-weight-normal">
            {this.props.userData.screen_name}
          </h6>
          <h6 className="font-weight-light">
            {ReactHtmlParser(utils.urlify(this.props.text))}
          </h6>

          {/* <small style={{ fontWeight: 300 }} className="text-muted">
            {this.props.created_at}
          </small>*/}
        </div>
        <div className="col-12 row m-0 p-2">{getEmbeddedMedia()}</div>
      </div>
    );
  }
}

export default Post;
