import { SOURCE_TWITTER } from '../constants';

const twitterSrc = {
  shouldPushData(props, formattedTweetData) {
    return (
      twitterSrc.hasAllPostData(props, formattedTweetData) &&
      !props.dataReducer.hasFormattedTwitterData
    );
  },

  /* :
   ************************************************************/
  hasAllF(tweetDataFormatted, sourcesEnabled) {
    return sourcesEnabled.twitter
      ? tweetDataFormatted && tweetDataFormatted.length > 0
      : true;
  },

  /* :
   ************************************************************/
  hasAllPostData(props, formattedTweetData) {
    return (
      props.dataReducer.tweetDataRaw.length &&
      formattedTweetData.length ===
        props.newsfeedReducer.dataPosts.count.twitter
    );
  },

  /* Format raw Twitter source data from API & assign to state:
   ************************************************************/
  format(props, formatTweet) {
    const { shouldPushData } = twitterSrc;
    let formattedTweetData = [];
    let unformattedTweetData = [];

    // 1.
    props.dataReducer.tweetDataRaw.forEach((t, index) => {
      t.statuses.forEach((s) => {
        s.sourceData = t.sourceData;
      });
      if (t.statuses) unformattedTweetData.push(t.statuses);
    });

    // 2. Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
    unformattedTweetData.flat(1).forEach((t, index) => {
      formattedTweetData.push(formatTweet.formatTweetData(t));
    });

    //
    if (shouldPushData(props, formattedTweetData)) {
      props.dataFormatTweets(formattedTweetData);
      props.dataFormatTwitterStatus(true);
    }
  },

  /* Get raw Twitter source data from API:
   ************************************************************/
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
    props.sourceReducer.sourcesTwitterData.map((source) => {
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

  /* :
   ************************************************************/
  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.twitter &&
      props.sourceReducer.sourcesTwitterData &&
      !props.dataReducer.hasRawTwitterData
    );
  },
};

export default twitterSrc;
