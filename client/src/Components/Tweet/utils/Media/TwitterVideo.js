import React, { Component } from 'react';
import formatTweet from '../formatTweet';

class TwitterVideo extends Component {
  render() {
    const { video } = formatTweet.entities;
    return video.getPlayer(video.getArr(this.props.status));
  }
}

export default TwitterVideo;
