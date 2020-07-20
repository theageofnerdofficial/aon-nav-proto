import React, { Component } from 'react';

const formatReddit = {
  formatRedditData(reddit) {
    const { data } = reddit;
    return {
      id: data.id,
      created_at: new Date(data.created_utc * 1000),
      source: 'reddit',
      stickied: data.stickied,
      user: data.subreddit,
      preview_img_arr: data.preview ? data.preview.images : [],
      text: data.title,
      description: data.selftext,
      lang: null,
      media_embed: data.media_embed,
      upvote_ratio: data.upvote_ratio,
    };
  },
};

export default formatReddit;
