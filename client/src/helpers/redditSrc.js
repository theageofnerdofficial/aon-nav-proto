const redditSrc = {
  /* Format raw Reddit source data from API & assign to state:
   ************************************************************/
  format(o) {
    const { shouldPushData } = redditSrc;
    let unformattedRedditData = [];
    let formattedRedditData = [];

    // 1. Format raw data to exclude stickied posts. Push to arr:
    o.dataReducer.redditDataRaw.forEach((r) => {
      r.data.children.forEach((c) => {
        if (c.data && !c.data.stickied) {
          c.data.sourceData = r.sourceData;
          unformattedRedditData.push(c.data);
        }
      });
    });

    // 2. Format again but this time using a method for making schema:
    unformattedRedditData.forEach((r) =>
      formattedRedditData.push(o.formatReddit.formatRedditData(r))
    );

    // 3. If data is now formatted such that it should assigned to state, do so:
    if (shouldPushData(o, unformattedRedditData)) {
      o.dataFormatReddit(formattedRedditData);
      o.dataFormatRedditStatus(true);
    }
  },

  /* Get raw Reddit source data from API:
   ************************************************************/
  getRawData(o) {
    o.dataRawRedditStatus(true);
    const req = (count, obj) => {
      o.newsfeedIncrSourceCount({
        service: 'reddit',
        value: count,
      });
      obj.count = count;
      console.log(obj);
      o.dataRequest(obj);
    };
    o.sourceReducer.sourcesRedditData.map((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          endpoint: source.filter,
          sourceData: source,
          src: o.SOURCE_REDDIT,
          user: source.subreddit,
        });
      }
    });
  },

  /* :
   ************************************************************/
  hasAllPostData(o, unformattedRedditData) {
    return (
      o.dataReducer.redditDataRaw.length &&
      unformattedRedditData.length === o.newsfeedReducer.dataPosts.count.reddit
    );
  },

  /* :
   ************************************************************/
  hasAllF(redditDataFormatted, sourcesEnabled) {
    return sourcesEnabled.reddit
      ? redditDataFormatted && redditDataFormatted.length > 0
      : true;
  },

  /* :
   ************************************************************/
  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.reddit &&
      props.sourceReducer.sourcesRedditData &&
      !props.dataReducer.hasRawRedditData
    );
  },

  /* :
   ************************************************************/
  shouldPushData(o, unformattedRedditData) {
    return (
      redditSrc.hasAllPostData(o, unformattedRedditData) &&
      !o.dataReducer.hasFormattedRedditData
    );
  },
};

export default redditSrc;
