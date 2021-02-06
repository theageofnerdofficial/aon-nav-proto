// Imports:
import { SOURCE_REDDIT, SOURCE_REDDIT_LABEL } from '../constants';
import format from '../config/format';
import utils from '../config/utils';

const redditSrc = {
  format(props) {
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
    // 2. Format again but this time to a schema:
    unformattedRedditData.forEach((r) =>
      formattedRedditData.push(redditSrc.schemify(r))
    );
    // 3. If data is now formatted such that it should assigned to state, do so:
    if (shouldPushData(props, unformattedRedditData)) {
      props.dataFormatReddit(formattedRedditData);
      props.dataFormatRedditStatus(true);
    }
  },

  getRaw(props) {
    props.dataRawRedditStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: SOURCE_REDDIT_LABEL.toLowerCase(),
        value: count,
      });
      obj.count = count;
      props.dataRequest(obj);
    };
    props.sourceReducer.sourcesRedditData.forEach((source) => {
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

  hasAllPostData(props, unformattedRedditData) {
    return (
      props.dataReducer.redditDataRaw.length &&
      unformattedRedditData.length ===
        props.newsfeedReducer.dataPosts.count.reddit
    );
  },

  hasAllF(redditDataFormatted, sourcesEnabled) {
    return sourcesEnabled.reddit
      ? redditDataFormatted && redditDataFormatted.length > 0
      : true;
  },

  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.reddit &&
      props.sourceReducer.sourcesRedditData &&
      !props.dataReducer.hasRawRedditData
    );
  },

  schemify(data) {
    return {
      id: data.id.toString(),
      created_at: new Date(data.created_utc * 1000),
      created_time_from: format.time.from(new Date(data.created_utc * 1000)),
      source: SOURCE_REDDIT_LABEL,
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

  shouldPushData(props, unformattedRedditData) {
    return (
      redditSrc.hasAllPostData(props, unformattedRedditData) &&
      !props.dataReducer.hasFormattedRedditData
    );
  },
};

export default redditSrc;
