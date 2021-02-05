// Imports:
import { SOURCE_YOUTUBE, SOURCE_YOUTUBE_LABEL } from '../constants';
import format from '../config/format';
import settings from '../config/settings';
import utils from '../config/utils';

const youtubeSrc = {
  format(props, formatYoutube) {
    const { shouldPushData } = youtubeSrc;
    let formattedYoutubeData = [];
    // 1. Format raw data and push to arr:
    props.dataReducer.youtubeDataRaw.forEach((y, index) => {
      return props.dataReducer.youtubeDataRaw[index].items
        ? props.dataReducer.youtubeDataRaw[index].items.forEach((item, idx) => {
            item.sourceData =
              props.dataReducer.youtubeDataRaw[index].sourceData;
            formattedYoutubeData.push(formatYoutube.formatYoutubeData(item));
          })
        : null;
    });
    // 2. If data is now formatted such that it should be assigned to state, do so:
    if (props.sourceReducer.sourcesYoutubeData) {
      if (shouldPushData(props, formattedYoutubeData)) {
        props.dataFormatYoutube(formattedYoutubeData);
        props.dataFormatYoutubeStatus(true);
      }
    }
  },

  getRawData(props) {
    props.dataRawYoutubeStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: 'youtube',
        value: count,
      });
      obj.count = count;
      props.dataRequest(obj);
    };
    props.sourceReducer.sourcesYoutubeData.forEach((source) => {
      if (!source.muted) {
        req(source.videosNumber, {
          sourceData: source,
          src: SOURCE_YOUTUBE,
          userId: source.youtubeUserId,
        });
      }
    });
  },

  getThumbnailSrcByRes(thumbnails) {
    const thumbnailSettings =
      settings.ui.defaultPostThumbs.defaultYoutubeThumbnail;
    const thumbnailRes = thumbnailSettings.res.thumbnailRes;

    let thumbnailSrc;

    switch (thumbnailRes) {
      case 0:
        thumbnailSrc = thumbnails.default.url;
        break;
      case 1:
        thumbnailSrc = thumbnails.high.url;
        break;
      case 2:
        thumbnailSrc = thumbnails.medium.url;
        break;
      default:
        thumbnailSrc = thumbnails.default.url;
    }
    return thumbnailSrc;
  },

  hasAllF(youtubeDataFormatted, sourcesEnabled) {
    return sourcesEnabled.youtube
      ? youtubeDataFormatted && youtubeDataFormatted.length > 0
      : true;
  },

  hasAllPostData(props, formattedYoutubeData) {
    // count is 10
    return (
      props.dataReducer.youtubeDataRaw.length &&
      formattedYoutubeData.length ===
        props.newsfeedReducer.dataPosts.count.youtube
    );
  },

  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.youtube &&
      props.sourceReducer.sourcesYoutubeData &&
      !props.dataReducer.hasRawYoutubeData
    );
  },

  schemify(data) {
    if (data) {
      return {
        id: data.id.videoId,
        created_at: data.snippet.publishTime,
        created_time_from: format.time.from(data.snippet.publishTime),
        source: SOURCE_YOUTUBE_LABEL,
        source_data: data.sourceData,
        user: `${utils.str.makeTitleCase(data.snippet.channelTitle)}`,
        // thumbnail: formatYoutube.getThumbnailSrcByRes(data.thumbnails)
        preview_img_arr: [
          youtubeSrc.getThumbnailSrcByRes(data.snippet.thumbnails),
        ],
        text: data.snippet.title,
        description: data.snippet.description,
        lang: data.regionCode,
        upvote_ratio: data.upvote_ratio,
        permalink: `https://www.youtube.com/watch?v=${data.id.videoId}`,
      };
    }
  },

  shouldPushData(props, formattedYoutubeData) {
    return (
      youtubeSrc.hasAllPostData(props, formattedYoutubeData) &&
      !props.dataReducer.hasFormattedYoutubeData
    );
  },
};

export default youtubeSrc;
