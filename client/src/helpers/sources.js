// Imports:
import redditSrc from './redditSrc';
import twitterSrc from './twitterSrc';
import youtubeSrc from './youtubeSrc';
import instagSrc from './instagSrc';

const sources = {
  data: {
    combine(props, settings) {
      if (
        sources.data.shouldCombine(
          props,
          settings.content.newsfeed.sourcesEnabled
        )
      ) {
        props.newsfeedPostsHaveCombined(true);
        props.dataCombine();
      }
    },

    format(props, sourcesEnabled) {
      if (sourcesEnabled.reddit) redditSrc.format(props);
      if (sourcesEnabled.twitter) twitterSrc.format(props);
      if (sourcesEnabled.instagram) instagSrc.format(props);
      if (sourcesEnabled.youtube) youtubeSrc.format(props);
    },

    getFresh(props, newsfeed) {
      sources.data.reset(props);
      sources.data.request(props, newsfeed);
    },

    getRaw(props, sourcesEnabled) {
      if (twitterSrc.ready(props, sourcesEnabled)) twitterSrc.getRawData(props);
      if (redditSrc.ready(props, sourcesEnabled)) redditSrc.getRawData(props);
      if (youtubeSrc.ready(props, sourcesEnabled)) youtubeSrc.getYtRaw(props);
      if (instagSrc.ready(props, sourcesEnabled)) instagSrc.getInstagRaw(props);
    },

    hasAllFormatted(props, sourcesEnabled) {
      const {
        redditDataFormatted,
        tweetDataFormatted,
        youtubeDataFormatted,
        instagramDataFormatted,
      } = props.dataReducer;
      return (
        twitterSrc.hasAllF(tweetDataFormatted, sourcesEnabled) &&
        redditSrc.hasAllF(redditDataFormatted, sourcesEnabled) &&
        youtubeSrc.hasAllF(youtubeDataFormatted, sourcesEnabled) &&
        instagSrc.hasAllF(instagramDataFormatted, sourcesEnabled)
      );
    },

    request(props, newsfeed) {
      if (newsfeed.sourcesEnabled.twitter) props.sourcesGetTwitter();
      if (newsfeed.sourcesEnabled.reddit) props.sourcesGetReddit();
      if (newsfeed.sourcesEnabled.youtube) props.sourcesGetYoutube();
      // if (newsfeed.sourcesEnabled.instagram) o.sourcesGetInstagram();
    },

    reset(props) {
      props.newsfeedResetData();
    },

    schemify(props, settings) {
      sources.data.getRaw(props, settings.content.newsfeed.sourcesEnabled);
      sources.data.format(props, settings.content.newsfeed.sourcesEnabled);
      sources.data.combine(props, settings);
    },

    shouldCombine(props, sourcesEnabled) {
      return (
        sources.data.hasAllFormatted(props, sourcesEnabled) &&
        !props.newsfeedReducer.dataPosts.hasCombined
      );
    },
  },
};

export default sources;
