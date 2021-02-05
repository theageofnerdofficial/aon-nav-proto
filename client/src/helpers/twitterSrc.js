// Imports:
import { SOURCE_TWITTER, SOURCE_TWITTER_LABEL } from '../constants';
import format from '../config/format';

const twitterSrc = {
  format(props) {
    const { shouldPushData } = twitterSrc;
    let formattedTweetData = [];
    let unformattedTweetData = [];
    // 1. Format raw data and push to arr:
    props.dataReducer.tweetDataRaw.forEach((t, index) => {
      t.statuses.forEach((s) => {
        s.sourceData = t.sourceData;
      });
      if (t.statuses) unformattedTweetData.push(t.statuses);
    });
    // 2. Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
    unformattedTweetData.flat(1).forEach((t, index) => {
      formattedTweetData.push(twitterSrc.schemify(t));
    });
    // 3. If data is now formatted such that it should be assigned to state, do so:
    if (shouldPushData(props, formattedTweetData)) {
      props.dataFormatTweets(formattedTweetData);
      props.dataFormatTwitterStatus(true);
    }
  },

  getRawData(props) {
    props.dataRawTwitterStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: 'twitter',
        value: count,
      });
      obj.count = count;
      props.dataRequest(obj);
    };
    props.sourceReducer.sourcesTwitterData.forEach((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          endpoint: 'search%2Ftweets',
          sourceData: source,
          src: SOURCE_TWITTER,
          user: source.twitterUser,
          // Refinements/queries if necessary: q: 'zelda since:2019-07-11',
        });
      }
    });
  },

  hasAllF(tweetDataFormatted, sourcesEnabled) {
    return sourcesEnabled.twitter
      ? tweetDataFormatted && tweetDataFormatted.length > 0
      : true;
  },

  hasAllPostData(props, formattedTweetData) {
    return (
      props.dataReducer.tweetDataRaw.length &&
      formattedTweetData.length ===
        props.newsfeedReducer.dataPosts.count.twitter
    );
  },

  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.twitter &&
      props.sourceReducer.sourcesTwitterData &&
      !props.dataReducer.hasRawTwitterData
    );
  },

  removeLinkSuffix(status) {
    const statusStr = status.retweeted_status
      ? status.retweeted_status.full_text
      : status.full_text;
    // :
    if (
      statusStr.substring(statusStr.length - 23).indexOf('https://t.co') >= 0
    ) {
      return statusStr.substring(0, statusStr.length - 23);
    }
    return statusStr;
  },

  schemify(tweet) {
    return {
      id: tweet.id.toString(),
      created_at: tweet.created_at,
      created_time_from: format.time.from(tweet.created_at),
      source: SOURCE_TWITTER_LABEL,
      source_data: tweet.sourceData,
      user: tweet.user,
      text: tweet.retweeted_status
        ? tweet.retweeted_status.full_text
        : tweet.full_text,
      lang: tweet.lang,
      retweet_count: tweet.retweet_count,
      favorite_count: tweet.favorite_count,
      entities_media: tweet.entities ? tweet.entities.media : null,
      extended_entities_media: tweet.extended_entities
        ? tweet.extended_entities.media
        : null,
      permalink: `https://www.twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
    };
  },

  shouldPushData(props, formattedTweetData) {
    return (
      twitterSrc.hasAllPostData(props, formattedTweetData) &&
      !props.dataReducer.hasFormattedTwitterData
    );
  },
};

export default twitterSrc;
