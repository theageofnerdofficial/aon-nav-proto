import React, { Component } from 'react';
import FontIcon from '../../Components/FontIcon/FontIcon';

class NewsPost extends Component {
  render() {
    return (
      <div className="col-12 p-0 py-1 m-0 shadow-sm col-12 m-0 mb-2 p-0 pl-1 py-3 post-wrapper rounded row shadow-sm border">
        <div className="col-2 p-0 m-0 text-center">
          <div className="post-newspost-wrapper shadow-sm">
            {this.props.index + 1}
          </div>
          <img
            alt="Source thumbnail"
            className="rounded ml-1 post-thumbnail"
            src={`img/thumbnails/${this.props.thumbnail}.svg`}
            style={{ width: '60px' }}
          />
        </div>
        <div className="col-9 border font-weight-light post-newspost-content-wrapper">
          <p className="pl-1 rounded mr-3 mb-2 font-weight-normal feed-title">
            Source - -
          </p>
          <p>{this.props.sourcepost}</p>
          <br />
        </div>
        <div className="col-1 p-0 m-0">
          <div style={{ height: '50%' }}>
            <button className="btn btn-light btn-sm form-control text-muted">
              {FontIcon('faArrowUp')}
            </button>
          </div>
          <div className="vertical-bottom" style={{ height: '50%' }}>
            <button className="btn btn-light btn-sm form-control vertical-bottom text-muted">
              {FontIcon('faEllipsisV')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPost;
