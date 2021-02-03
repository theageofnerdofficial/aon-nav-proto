import { SOURCE_INSTAGRAM } from '../constants';

const instagSrc = {
  shouldPushData(props, formattedTweetData) {
    return (
      instagSrc.hasAllPostData(props, formattedTweetData) &&
      !props.dataReducer.hasFormattedTwitterData
    );
  },

  /* :
   ************************************************************/
  hasAllF(instagramDataFormatted, sourcesEnabled) {
    return sourcesEnabled.instagram
      ? instagramDataFormatted && instagramDataFormatted.length > 0
      : true;
  },

  /* :
   ************************************************************/
  hasAllPostData(props, formattedInstagramData) {
    return (
      props.dataReducer.instagramDataRaw.length &&
      formattedInstagramData.length ===
        props.newsfeedReducer.dataPosts.count.instagram
    );
  },

  /* Format raw Twitter source data from API & assign to state:
   ************************************************************/
  format(props, formatInstagram) {
    const { shouldPushData } = instagSrc;
    let formattedInstagramData = [];
    let unformattedInstagramData = [];

    // 1.
    props.dataReducer.instagramDataRaw.forEach((i) => {
      unformattedInstagramData.push(i);
    });

    // 2.
    unformattedInstagramData.forEach((i, index) => {
      if (i && i.edges.length) {
        i.edges.forEach((edge) => {
          formattedInstagramData.push(
            formatInstagram.formatInstagramData(edge.node, i, index)
          );
        });
      }
    });

    // 3.
    if (shouldPushData(props, formattedInstagramData)) {
      props.dataFormatInstagram(formattedInstagramData);
      props.dataFormatInstagramStatus(true);
    }
  },

  /* Get raw Twitter source data from API:
   ************************************************************/
  getRawData(props) {
    props.dataRawInstagramStatus(true);
    const req = (count, obj) => {
      props.newsfeedIncrSourceCount({
        service: 'instagram',
        value: count,
      });
      obj.count = count;
      props.dataRequest(obj);

      // ^ THIS IS NOT WORKING
    };
    props.sourceReducer.sourcesInstagramData.map((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          sourceData: source,
          src: SOURCE_INSTAGRAM,
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
