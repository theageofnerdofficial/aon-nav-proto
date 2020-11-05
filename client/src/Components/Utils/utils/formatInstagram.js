import { SOURCE_INSTAGRAM } from '../../../constants';

const formatInstagram = {
  formatInstagramData(edge, i, index) {
    return {
      id: edge.id,
      created_at: edge.taken_at_timestamp,
      entities_media: edge.thumbnail_src ? [edge.thumbnail_src] : null,
      source: SOURCE_INSTAGRAM,
      user: edge.owner.username,
      profile_pic_url: i.profile_pic_url,
      text: edge.edge_media_to_caption.edges[0].node.text
        ? edge.edge_media_to_caption.edges[0].node.text
        : null,

      like_preview_count: edge.edge_media_preview_like.count,
    };
  },
};

export default formatInstagram;
