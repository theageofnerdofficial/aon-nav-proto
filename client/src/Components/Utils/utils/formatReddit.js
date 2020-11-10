import format from '../../../config/format';
import utils from './utils';

const formatReddit = {
  formatRedditData(data) {
    return {
      id: data.id,
      created_at: new Date(data.created_utc * 1000),
      created_time_from: format.time.from(new Date(data.created_utc * 1000)),
      source: 'Reddit',
      source_data: data.sourceData,
      stickied: data.stickied ? true : false,
      user: `${utils.str.makeTitleCase(data.subreddit)}`,
      preview_img_arr: data.preview ? data.preview.images : [],
      text: data.title,
      description: data.selftext,
      lang: null,
      media_embed: data.media_embed,
      upvote_ratio: data.upvote_ratio,
      permalink: `https://reddit.com${data.permalink}`,
    };
  },
};

export default formatReddit;
