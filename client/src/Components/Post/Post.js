/* :
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import ReactHtmlParser from 'react-html-parser';
import utils from '../Utils/utils/utils';

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

    const getProfileImgSrc = () => {
      const { profile_image_url } = this.props.userData;
      let src, style;
      if (this.props.source === 'tweet') {
        style = { borderRadius: '100px', width: '40px' };
        if (profile_image_url) {
          src = profile_image_url;
        } else {
          // return some placeholder image in public folder
        }
      } else if (this.props.source === 'reddit') {
        style = { borderRadius: '10px', width: '40px', height: '60px' };
        if (this.props.preview_img_arr && this.props.preview_img_arr[0]) {
          src = new DOMParser().parseFromString(
            this.props.preview_img_arr[0].source.url,
            'text/html'
          ).body.textContent;
        }
      }
      return <img style={style} src={src} />;
    };

    const getIcon = () => {
      if (this.props.source === 'twitter') {
        return 'faTwitter';
      } else if (this.props.source === 'reddit') {
        return 'faReddit';
      }
    };
    return (
      <div className="bg-light shadow-sm rounded col-12 row p-0 py-2 m-0 mb-2">
        <div className="col-2 text-center p-0 m-0">
          {getProfileImgSrc()}
          <br />
        </div>
        <div className="col-10 py-2">
          <h6 className="font-weight-normal">
            {this.props.userData.screen_name}{' '}
            <span
              className="text-secondary"
              style={{
                fontSize: 25,
                opacity: '0.3',
                textAlign: 'right',
                float: 'right',
              }}
            >
              {FontIcon(getIcon())}
            </span>
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
