const twitterSrc = {
  shouldPushData(o, formattedTweetData) {
    return (
      twitterSrc.hasAllPostData(o, formattedTweetData) &&
      !o.dataReducer.hasFormattedTwitterData
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
  hasAllPostData(o, formattedTweetData) {
    return (
      o.dataReducer.tweetDataRaw.length &&
      formattedTweetData.length === o.newsfeedReducer.dataPosts.count.twitter
    );
  },

  /* Format raw Twitter source data from API & assign to state:
   ************************************************************/
  format(o) {
    const { shouldPushData } = twitterSrc;
    let formattedTweetData = [];
    let unformattedTweetData = [];

    // 1.
    o.dataReducer.tweetDataRaw.forEach((t, index) => {
      t.statuses.forEach((s) => {
        s.sourceData = t.sourceData;
      });
      if (t.statuses) unformattedTweetData.push(t.statuses);
    });

    // 2. Flatten unformatted Tweets (3D arr -> 2D arr to loop & format Tweets)
    unformattedTweetData.flat(1).forEach((t, index) => {
      formattedTweetData.push(o.formatTweet.formatTweetData(t));
    });

    //
    if (shouldPushData(o, formattedTweetData)) {
      o.dataFormatTweets(formattedTweetData);
      o.dataFormatTwitterStatus(true);
    }
  },

  /* Get raw Twitter source data from API:
   ************************************************************/
  getRawData(o) {
    o.dataRawTwitterStatus(true);
    const req = (count, obj) => {
      o.newsfeedIncrSourceCount({
        service: 'twitter',
        value: count,
      });
      obj.count = count;
      o.dataRequest(obj);
    };
    o.sourceReducer.sourcesTwitterData.map((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          endpoint: 'search%2Ftweets',
          sourceData: source,
          src: o.SOURCE_TWITTER,
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
