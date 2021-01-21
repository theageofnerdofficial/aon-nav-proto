/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import PostTitleText from './PostTitleText';
import utils from '../../Utils/utils/utils';

class PostTitle extends Component {
  render() {
    const { FontIcon } = this.props;
    const { settings, source, source_data } = this.props.data;
    return (
      <div className="feed-title font-weight-normal rounded m-0 p-0">
        <div className=" col-12 row m-0 p-0">
          <div className=" col-8 m-0 p-0">
            <PostTitleText
              FontIcon={FontIcon}
              settings={settings}
              source_data={source_data}
              source={source}
              utils={utils}
            />
          </div>
          <div className=" col-1 m-0 p-0 text-right">
            <button className="btn btn-sm col-12">
              {FontIcon('faEllipsisV')}
            </button>
          </div>
          <div className=" col-3 m-0 p-0 text-center">
            <button className="btn btn-sm col-12">
              33 {FontIcon('faArrowUp')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTitle;
