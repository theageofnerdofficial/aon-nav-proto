import React, { Component } from 'react';
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
      //
      if (variants.length > 0) {
        const sources = variants.filter((v) => {
          if (v.content_type === 'video/mp4') return v;
        });
        return (
          <video width="200px" controls>
            {sources.map((s) => (
              <source type={s.content_type} src={s.url}></source>
            ))}
          </video>
        );
      }
    };

    /* :
     ***************************************************************/
    const getEmbeddedImages = () => {
      if (this.props.entities_media) {
        return this.props.entities_media.map((m) => {
          if (m.media_url) {
            return <img className="rounded" width="200px" src={m.media_url} />;
          }
        });
      }
    };
    return (
      <div className="bg-light shadow rounded col-12 row p-0 m-0 mb-2">
        <div className=" col-2 text-center p-0 m-0">
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
          <h6 style={{ fontWeight: 300 }}>{this.props.text}</h6>
          <p>{getEmbeddedImages()}</p>
          <small style={{ fontWeight: 300 }} className="text-muted">
            {this.props.created_at}
          </small>
        </div>
      </div>
    );
  }
}

export default Post;
