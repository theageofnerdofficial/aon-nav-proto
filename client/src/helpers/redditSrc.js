import { SOURCE_REDDIT } from "../constants";

const redditSrc = {
  /* Format raw Reddit source data from API & assign to state:
   ************************************************************/
  format(props, formatReddit) {
    const { shouldPushData } = redditSrc;
    let unformattedRedditData = [];
    let formattedRedditData = [];

    // 1. Format raw data to exclude stickied posts. Push to arr:
    props.dataReducer.redditDataRaw.forEach((r) => {
      r.data.children.forEach((c) => {
        if (c.data && !c.data.stickied) {
          c.data.sourceData = r.sourceData;
          unformattedRedditData.push(c.data);
        }
      });
    });

    // 2. Format again but this time using a method for making schema:
    unformattedRedditData.forEach((r) =>
      formattedRedditData.push(formatReddit.formatRedditData(r))
    );

    // 3. If data is now formatted such that it should assigned to state, do so:
    if (shouldPushData(props, unformattedRedditData)) {
      props.dataFormatReddit(formattedRedditData);
      props.dataFormatRedditStatus(true);
    }
  },

  /* Get raw Reddit source data from API:
   ************************************************************/
  getRawData(props) {
    props.dataRawRedditStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: 'reddit',
        value: count,
      });
      obj.count = count;
      props.dataRequest(obj);
    };
    props.sourceReducer.sourcesRedditData.map((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          endpoint: source.filter,
          sourceData: source,
          src: SOURCE_REDDIT,
          user: source.subreddit,
        });
      }
    });
  },

  /* :
   ************************************************************/
  hasAllPostData(props, unformattedRedditData) {
    return (
      props.dataReducer.redditDataRaw.length &&
      unformattedRedditData.length ===
        props.newsfeedReducer.dataPosts.count.reddit
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
  shouldPushData(props, unformattedRedditData) {
    return (
      redditSrc.hasAllPostData(props, unformattedRedditData) &&
      !props.dataReducer.hasFormattedRedditData
    );
  },
};

export default redditSrc;
