import { SOURCE_TWITTER } from '../../../constants';

const formatTweet = {
  formatTweetData(tweet) {
    return {
      id: tweet.id,
      source: SOURCE_TWITTER,
      user: tweet.user,
      text: tweet.retweeted_status
        ? tweet.retweeted_status.full_text
        : tweet.full_text,
      created_at: tweet.created_at,
      lang: tweet.lang,
      retweet_count: tweet.retweet_count,
      favorite_count: tweet.favorite_count,
      entities_media: tweet.entities ? tweet.entities.media : null,
      extended_entities_media: tweet.extended_entities
        ? tweet.extended_entities.media
        : null,
    };
  },

  status: {
    format: {
      removeLinkSuffix(status) {
        if (status.substring(status.length - 23).indexOf('https://t.co') >= 0) {
          return status.substring(0, status.length - 23);
        }
        return status;
      },
    },
    get(o, status) {
      const s = status.retweeted_status
        ? status.retweeted_status.full_text
        : status.full_text;
      return formatTweet.status.format.removeLinkSuffix(s);
    },
  },
};

export default formatTweet;
