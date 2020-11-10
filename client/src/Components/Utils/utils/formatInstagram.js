import format from '../../../config/format';
import { SOURCE_INSTAGRAM } from '../../../constants';

const formatInstagram = {
  formatInstagramData(edge, i, index) {
    const isoLongDate = new Date(
      format.time.uetToHumanReadable(edge.taken_at_timestamp)
    );
    return {
      id: edge.id,
      created_at: edge.taken_at_timestamp,
      created_time_from: format.time.from(isoLongDate),
      entities_media: edge.thumbnail_src ? [edge.thumbnail_src] : null,
      source: 'Instagram',
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
};

export default formatInstagram;
