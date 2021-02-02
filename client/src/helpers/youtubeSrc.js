const youtubeSrc = {
  /* Format raw Youtube source data from API & assign to state:
   ************************************************************/
  format(o) {
    const { shouldPushData } = youtubeSrc;
    let formattedYoutubeData = [];

    // :
    o.dataReducer.youtubeDataRaw.forEach((y, index) => {
      return o.dataReducer.youtubeDataRaw[index].items
        ? o.dataReducer.youtubeDataRaw[index].items.forEach((item, idx) => {
            item.sourceData = o.dataReducer.youtubeDataRaw[index].sourceData;
            formattedYoutubeData.push(o.formatYoutube.formatYoutubeData(item));
          })
        : null;
    });

    // :
    if (o.sourceReducer.sourcesYoutubeData) {
      if (shouldPushData(o, formattedYoutubeData)) {
        o.dataFormatYoutube(formattedYoutubeData);
        o.dataFormatYoutubeStatus(true);
      }
    }
  },

  /* Get raw Youtube source data from API:
   ************************************************************/
  getRawData(o) {
    o.dataRawYoutubeStatus(true);
    const req = (count, obj) => {
      o.newsfeedIncrSourceCount({
        service: 'youtube',
        value: count,
      });
      obj.count = count;
      o.dataRequest(obj);
    };
    o.sourceReducer.sourcesYoutubeData.map((source) => {
      console.log(source);
      if (!source.muted) {
        req(source.videosNumber, {
          sourceData: source,
          src: o.SOURCE_YOUTUBE,
          userId: source.youtubeUserId,
        });
      }
    });
  },

  /* :
   ************************************************************/
  hasAllPostData(o, formattedYoutubeData) {
    // count is 10
    return (
      o.dataReducer.youtubeDataRaw.length &&
      formattedYoutubeData.length === o.newsfeedReducer.dataPosts.count.youtube
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
  shouldPushData(o, formattedYoutubeData) {
    return (
      youtubeSrc.hasAllPostData(o, formattedYoutubeData) &&
      !o.dataReducer.hasFormattedYoutubeData
    );
  },
};

export default youtubeSrc;
