// Imports:
import { SOURCE_TWITTER, SOURCE_TWITTER_LABEL } from '../constants';
import format from '../config/format';
import settings from '../config/settings';

const twitterSrc = {
  format(props) {
    let formattedTweetData = [];
    let unformattedTweetData = [];

    // 1. Format raw data and push to arr:
    props.dataReducer.tweetDataRaw.forEach((t, index) => {
      t.statuses.forEach((s) => (s.sourceData = t.sourceData));
      if (t.statuses) {
        unformattedTweetData.push(t.statuses);
        if (twitterSrc.shouldCountSources(index, props, unformattedTweetData)) {
          props.sourceDataCount({
            source: SOURCE_TWITTER,
            count: unformattedTweetData.length,
          });
        }
      }
    });

    // 2. Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
    unformattedTweetData.flat(1).forEach((t) => {
      formattedTweetData.push(twitterSrc.schemify(t));
    });

    // 3. If data is now formatted such that it should be assigned to state, do so:
    if (twitterSrc.shouldPushData(props, formattedTweetData)) {
      props.dataFormatTweets(formattedTweetData);
      props.dataFormatTwitterStatus(true);
    }
  },

  getRaw(props) {
    props.dataRawTwitterStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: SOURCE_TWITTER_LABEL.toLowerCase(),
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

  hasAllF: (tweetDataFormatted, sourcesEnabled) =>
    sourcesEnabled.twitter
      ? tweetDataFormatted && tweetDataFormatted.length > 0
      : true,

  hasAllPostData: (props, formattedTweetData) =>
    settings.content.newsfeed.srcStrictNumbersEnabled
      ? twitterSrc.hasAllPostDataStrict(props, formattedTweetData)
      : twitterSrc.hasAllPostDataNonStrict(props),

  /* As explained in comments in settings.js, strict vs. non-strict counting 
     refers to whether we have the exact number of posts requested. Sometimes
     the API only return some posts because it values reliability of source data 
     over quantity. My advice is to keep it non-strict by default because 
     and to tolerate some shortfalls in post data — otherwise no formatted data.
   */
  hasAllPostDataNonStrict: (props) =>
    props.dataReducer.activeSources.twitter ===
    props.sourceReducer.countedSources.twitter,

  hasAllPostDataStrict: (props, formattedTweetData) =>
    props.dataReducer.tweetDataRaw.length &&
    props.newsfeedReducer.dataPosts.count.twitter === formattedTweetData.length,

  ready: (props, sourcesEnabled) =>
    sourcesEnabled.twitter &&
    props.sourceReducer.sourcesTwitterData &&
    !props.dataReducer.hasRawTwitterData,

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

  // Should count sources? Not if we're done needing to — otherwise endless loops!
  shouldCountSources: (index, props, unformattedTweetData) =>
    index === props.dataReducer.tweetDataRaw.length - 1 &&
    unformattedTweetData.length !== props.sourceReducer.countedSources.twitter,

  // Should push data? Not if we're done with that — otherwise endless loops!
  shouldPushData: (props, formattedTweetData) =>
    twitterSrc.hasAllPostData(props, formattedTweetData) &&
    !props.dataReducer.hasFormattedTwitterData,

  tweetStr: {
    hasLink: (statusStr) =>
      statusStr.substring(statusStr.length - 23).indexOf('https://t.co') >= 0,

    removeLinkSuffix: (status) => {
      const statusStr = status.retweeted_status
        ? status.retweeted_status.full_text
        : status.full_text;
      // :
      if (twitterSrc.twitterLink.hasLink(statusStr))
        statusStr.substring(0, statusStr.length - 23);
      return statusStr;
    },
  },
};

export default twitterSrc;
