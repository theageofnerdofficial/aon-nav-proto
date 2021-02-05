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
    const { data, FontIcon, labels, labelsBySource } = this.props;
    const { settings, source, source_data } = this.props.data;
    return (
      <div className="feed-title font-weight-normal rounded m-0 p-0">
        <div className="col-12 m-0 p-0 row">
          <PostTitleText
            FontIcon={FontIcon}
            labelsBySource={labelsBySource}
            settings={settings}
            source_data={source_data}
            source={source}
            utils={utils}
          />
          <DotsMenuButton FontIcon={FontIcon} />
          <DotsMenu data={data} FontIcon={FontIcon} labels={labels} />
          <PostUpvoteBtn FontIcon={FontIcon} />
        </div>
      </div>
    );
  }
}

export default PostTitle;
