const instagSrc = {
  shouldPushData(o, formattedTweetData) {
    return (
      instagSrc.hasAllPostData(o, formattedTweetData) &&
      !o.dataReducer.hasFormattedTwitterData
    );
  },

  /* :
   ************************************************************/
  hasAllPostData(o, formattedInstagramData) {
    return (
      o.dataReducer.instagramDataRaw.length &&
      formattedInstagramData.length ===
        o.newsfeedReducer.dataPosts.count.instagram
    );
  },

  /* Format raw Twitter source data from API & assign to state:
   ************************************************************/
  format(o) {
    const { shouldPushData } = instagSrc;
    let formattedInstagramData = [];
    let unformattedInstagramData = [];

    // 1.
    o.dataReducer.instagramDataRaw.forEach((i) => {
      unformattedInstagramData.push(i);
    });

    // 2.
    unformattedInstagramData.forEach((i, index) => {
      if (i && i.edges.length) {
        i.edges.forEach((edge) => {
          formattedInstagramData.push(
            o.formatInstagram.formatInstagramData(edge.node, i, index)
          );
        });
      }
    });

    // 3.
    if (shouldPushData(o, formattedInstagramData)) {
      o.dataFormatInstagram(formattedInstagramData);
      o.dataFormatInstagramStatus(true);
    }
  },

  /* Get raw Twitter source data from API:
   ************************************************************/
  getRawData(o) {
    //
    console.log('RAW INSTA');
    o.dataRawInstagramStatus(true);
    const req = (count, obj) => {
      o.newsfeedIncrSourceCount({
        service: 'instagram',
        value: count,
      });
      obj.count = count;

      console.log(obj);
      o.dataRequest(obj);

      // ^ THIS IS NOT WORKING
    };
    o.sourceReducer.sourcesInstagramData.map((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          sourceData: source,
          src: o.SOURCE_INSTAGRAM,
          user: source.username,
        });
      }
    });
  },

  /* :
   ************************************************************/
  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.instagram &&
      props.sourceReducer.sourcesInstagramData &&
      !props.dataReducer.hasRawInstagramData
    );
  },
};

export default instagSrc;
