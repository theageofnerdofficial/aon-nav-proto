/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import FontIcon from '../FontIcon/FontIcon';
import ReactHtmlParser from 'react-html-parser';
import format from '../../config/format';
import settings from '../../config/settings';
import utils from '../Utils/utils/utils';

class RedditPost extends Component {
  render() {
    const getImgs = (data) => {
      if (data.preview) {
        return data.preview.images.map((d) => {
          return (
            <img
              src={d.source.url.replace(/&amp;/g, '&')}
              className="rounded shadow"
              style={{ height: 200 }}
            />
          );
        });
      }
    };
    const getMore = (data, index) => {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#collapse${index}`}
            >
              <button
                className="btn-link text-left font-weight-light form-control panel-title"
                style={{ background: 'none', border: '0' }}
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
          <div id={`collapse${index}`} className="collapse in panel-collapse">
            <div className="pt-1 font-italic font-weight-light panel-body">
              {getImgs(data)}
              <br />
              {data.selftext}
              <br />
              <button className="btn btn-sm btn-light">View Full thread</button>
            </div>
          </div>
        </div>
      );
    };
    /* :
     ***************************************************************/
    const { index } = this.props;

    return (
      <div className="col-12 m-0 mb-2 p-0 py-3 post-wrapper rounded row shadow-sm">
        <div className=" col-2 text-center p-0 m-0">
          <img
            className="mb-2"
            src={format.reddit.source.thumbnail(this.props.data.subreddit)}
            width="65px"
          />
          <br />
          <small
            className="text-muted font-italic px-2 pt-1"
            style={{ fontWeight: 300, opacity: 0.5 }}
          >
            {format.time.from(
              new Date(format.time.uetToHumanReadable(this.props.data.created))
            )}
          </small>
        </div>
        <div className="col-10 ">
          <h6 className="font-weight-normal">
            {utils.str.makeTitleCase(this.props.data.subreddit)} - Reddit
          </h6>
          <div
            className="rounded shadow"
            id={'panel-' + index}
            style={{
              background: 'white',
              display: 'none',
              height: 120,
              padding: 5,
              position: 'absolute',
              right: 10,
              top: 15,
              transform: 'scale(0.92)',
              width: 150,
              zIndex: 100,
            }}
          >
            <button
              className="btn-sm form-control font-weight-light"
              style={{ letterSpacing: '-1' }}
            >
              Option 1
            </button>
            <button
              className="btn-sm form-control font-weight-light"
              style={{ letterSpacing: '-1' }}
            >
              Option 1
            </button>
            <button
              className="btn-sm form-control font-weight-light"
              style={{ letterSpacing: '-1' }}
            >
              Option 1
            </button>
          </div>
          {/* */}
          <span style={{ position: 'absolute', right: 0, top: '0' }}>
            <button
              className="btn btn-sm text-muted"
              onClick={() => {
                const panel = document.getElementById(`panel-${index}`);
                panel.style.display =
                  panel.style.display === 'none' ? 'block' : 'none';
              }}
              style={{ marginTop: '-15px', opacity: 0.8 }}
            >
              {FontIcon('faEllipsisV')}
            </button>
          </span>
          <h6 className="font-weight-light">{this.props.data.title}</h6>
          {getMore(this.props.data, this.props.index)}
        </div>
      </div>
    );
  }
}

export default RedditPost;
