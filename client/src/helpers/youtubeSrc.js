import { SOURCE_YOUTUBE } from '../constants';

const youtubeSrc = {
  /* Format raw Youtube source data from API & assign to state:
   ************************************************************/
  format(props, formatYoutube) {
    const { shouldPushData } = youtubeSrc;
    let formattedYoutubeData = [];

    // :
    props.dataReducer.youtubeDataRaw.forEach((y, index) => {
      return props.dataReducer.youtubeDataRaw[index].items
        ? props.dataReducer.youtubeDataRaw[index].items.forEach((item, idx) => {
            item.sourceData =
              props.dataReducer.youtubeDataRaw[index].sourceData;
            formattedYoutubeData.push(formatYoutube.formatYoutubeData(item));
          })
        : null;
    });

    // :
    if (props.sourceReducer.sourcesYoutubeData) {
      if (shouldPushData(props, formattedYoutubeData)) {
        props.dataFormatYoutube(formattedYoutubeData);
        props.dataFormatYoutubeStatus(true);
      }
    }
  },

  /* Get raw Youtube source data from API:
   ************************************************************/
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
    props.sourceReducer.sourcesYoutubeData.map((source) => {
      if (!source.muted) {
        req(source.videosNumber, {
          sourceData: source,
          src: SOURCE_YOUTUBE,
          userId: source.youtubeUserId,
        });
      }
    });
  },

  /* :
   ************************************************************/
  hasAllF(youtubeDataFormatted, sourcesEnabled) {
    return sourcesEnabled.youtube
      ? youtubeDataFormatted && youtubeDataFormatted.length > 0
      : true;
  },

  /* :
   ************************************************************/
  hasAllPostData(props, formattedYoutubeData) {
    // count is 10
    return (
      props.dataReducer.youtubeDataRaw.length &&
      formattedYoutubeData.length ===
        props.newsfeedReducer.dataPosts.count.youtube
    );
  },

  /* :
   ************************************************************/
  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.youtube &&
      props.sourceReducer.sourcesYoutubeData &&
      !props.dataReducer.hasRawYoutubeData
    );
  },

  /* :
   ************************************************************/
  shouldPushData(props, formattedYoutubeData) {
    return (
      youtubeSrc.hasAllPostData(props, formattedYoutubeData) &&
      !props.dataReducer.hasFormattedYoutubeData
    );
  },
};

export default youtubeSrc;
