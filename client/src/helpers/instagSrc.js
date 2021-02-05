// Imports:
import { SOURCE_INSTAGRAM, SOURCE_INSTAGRAM_LABEL } from '../constants';
import format from '../config/format';

const instagSrc = {
  hasAllF(instagramDataFormatted, sourcesEnabled) {
    return sourcesEnabled.instagram
      ? instagramDataFormatted && instagramDataFormatted.length > 0
      : true;
  },

  hasAllPostData(props, formattedInstagramData) {
    return (
      props.dataReducer.instagramDataRaw.length &&
      formattedInstagramData.length ===
        props.newsfeedReducer.dataPosts.count.instagram
    );
  },

  format(props, formatInstagram) {
    const { shouldPushData } = instagSrc;
    let formattedInstagramData = [];
    let unformattedInstagramData = [];
    // 1. Push unformatted Instagram data to arr:
    props.dataReducer.instagramDataRaw.forEach((i) => {
      unformattedInstagramData.push(i);
    });
    // 2. Format data and push to arr:
    unformattedInstagramData.forEach((i, index) => {
      if (i && i.edges.length) {
        i.edges.forEach((edge) => {
          formattedInstagramData.push(
            instagSrc.schemify(edge.node, i, index)
          );
        });
      }
    });
    // 3. If data is now formatted such that it should assigned to state, do so:
    if (shouldPushData(props, formattedInstagramData)) {
      props.dataFormatInstagram(formattedInstagramData);
      props.dataFormatInstagramStatus(true);
    }
  },

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
    props.sourceReducer.sourcesInstagramData.forEach((source) => {
      if (!source.muted) {
        req(source.postsNumber, {
          sourceData: source,
          src: SOURCE_INSTAGRAM,
          user: source.username,
        });
      }
    });
  },

  ready(props, sourcesEnabled) {
    return (
      sourcesEnabled.instagram &&
      props.sourceReducer.sourcesInstagramData &&
      !props.dataReducer.hasRawInstagramData
    );
  },

  schemify(edge, i, index) {
    const isoLongDate = new Date(
      format.time.uetToHumanReadable(edge.taken_at_timestamp)
    );
    return {
      id: edge.id.toString(),
      created_at: edge.taken_at_timestamp,
      created_time_from: format.time.from(isoLongDate),
      entities_media: edge.thumbnail_src ? [edge.thumbnail_src] : null,
      source: SOURCE_INSTAGRAM_LABEL,
      source_data: i.sourceData,
      user: edge.owner.username,
      profile_pic_url: i.profile_pic_url,
      text: edge.edge_media_to_caption.edges[0].node.text
        ? edge.edge_media_to_caption.edges[0].node.text
        : null,

      like_preview_count: edge.edge_media_preview_like.count,
      permalink: `https://www.instagram.com/p/${edge.shortcode}`,
    };
  },

  shouldPushData(props, formattedTweetData) {
    return (
      instagSrc.hasAllPostData(props, formattedTweetData) &&
      !props.dataReducer.hasFormattedTwitterData
    );
  },
};

export default instagSrc;
