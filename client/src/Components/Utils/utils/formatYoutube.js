import { SOURCE_YOUTUBE_LABEL } from '../../../constants';
import format from '../../../config/format';
import utils from './utils';

const formatYoutube = {
  formatYoutubeData(data) {
    console.log(data);
    if (data) {
      if (data.items) {
        return {
          id: data.items[0].id.videoId.toString(),
          created_at: data.items[0].snippet.publishTime,
          created_time_from: format.time.from(
            data.items[0].snippet.publishTime
          ),
          source: SOURCE_YOUTUBE_LABEL,
          source_data: data.sourceData,
          user: `${utils.str.makeTitleCase(
            data.items[0].snippet.channelTitle
          )}`,
          preview_img_arr: data.items[0].snippet.thumbnails.medium
            ? [data.items[0].snippet.thumbnails.medium]
            : [],
          text: data.items[0].snippet.title,
          description: data.items[0].snippet.description,
          lang: data.regionCode,
          upvote_ratio: data.upvote_ratio,
          permalink: `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`,
        };
      }
    }
  },
};

export default formatYoutube;
