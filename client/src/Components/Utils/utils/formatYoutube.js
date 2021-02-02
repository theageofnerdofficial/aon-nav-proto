import { SOURCE_YOUTUBE_LABEL } from '../../../constants';
import format from '../../../config/format';
import utils from './utils';
import settings from '../../../config/settings';

const formatYoutube = {
  // :
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

  formatYoutubeData(data) {
    console.log(data);
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
          formatYoutube.getThumbnailSrcByRes(data.snippet.thumbnails),
        ],
        text: data.snippet.title,
        description: data.snippet.description,
        lang: data.regionCode,
        upvote_ratio: data.upvote_ratio,
        permalink: `https://www.youtube.com/watch?v=${data.id.videoId}`,
      };
    }
  },
};

export default formatYoutube;
