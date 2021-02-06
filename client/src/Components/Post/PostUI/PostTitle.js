/* Imports:
 ***************************************************************/
import React, { Component } from 'react';
import DotsMenu from './DotsMenu';
import DotsMenuButton from './DotsMenuButton';
import PostTitleText from './PostTitleText';
import PostUpvoteBtn from './PostUpvoteBtn';
import utils from '../../../config/utils';

class PostTitle extends Component {
  render() {
    const {
      data,
      dotsMenuToggle,
      FontIcon,
      labels,
      labelsBySource,
      newsfeedReducer,
    } = this.props;
    const { settings, source, source_data } = this.props.data;
    return (
      <div
        className="feed-title font-weight-normal rounded m-0 p-0"
        id={`feed-title-${data.id}`}
      >
        <div className="col-12 m-0 p-0 row">
          <PostTitleText
            FontIcon={FontIcon}
            labelsBySource={labelsBySource}
            settings={settings}
            source_data={source_data}
            source={source}
            utils={utils}
          />
          <DotsMenuButton
            data={data}
            dotsMenuToggle={dotsMenuToggle}
            FontIcon={FontIcon}
            newsfeedReducer={newsfeedReducer}
          />
          <DotsMenu
            data={data}
            FontIcon={FontIcon}
            labels={labels}
            newsfeedReducer={newsfeedReducer}
          />
          <PostUpvoteBtn FontIcon={FontIcon} />
        </div>
      </div>
    );
  }
}

export default PostTitle;
