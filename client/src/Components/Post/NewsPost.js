import React, { Component } from 'react';
import FontIcon from '../../Components/FontIcon/FontIcon';

class NewsPost extends Component {
  render() {
    return (
      <div className="col-12 p-0 py-1 m-0 row shadow-sm">
        <div className="col-2 p-0 m-0 text-center">
          <div className="post-newspost-wrapper shadow-sm">
            {this.props.index + 1}
          </div>
          <img
            className="rounded ml-1 post-thumbnail p-1"
            src={`img/thumbnails/${this.props.thumbnail}.svg`}
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-9 font-weight-light post-newspost-content-wrapper">
          <b className="post-newspost-heading text-muted">
            {this.props.sourcename} - Source{' '}
            {this.props.isOfficial ? ' - Official' : null}
          </b>
          <br />
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
