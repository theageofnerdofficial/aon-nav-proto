import React from 'react';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
} from '../../../constants';
import format from '../../../config/format';
import utils from '../../Utils/utils/utils';

const postElem = {
  /* Embedded media:
   ****************************************/
  embeddedMedia: {
    images: {
      //
    },
    videos: {
      //
    },
  },

  /*
   * Text:
   ****************************************/
  text: {
    get(o, utils, ReactHtmlParser) {
      const { text } = o;
      return ReactHtmlParser(utils.urlify(text));
    },
  },

  /* User:
   ****************************************/
  user: {
    get(o) {
      let { source, userData } = o;
      let username;
      switch (source) {
        case SOURCE_REDDIT:
          username = userData
            ? userData + ' - ' + format.source.labelFromConstant(source)
            : null;
          break;
        case SOURCE_TWITTER:
          username =
            userData &&
            userData.screen_name +
              ' - ' +
              format.source.labelFromConstant(source)
              ? userData.screen_name
              : null;
          break;
        case SOURCE_INSTAGRAM:
          username = userData
            ? utils.str.makeTitleCase(userData) +
              format.source.labelFromConstant(source)
            : null;
          break;
        default:
          username = null;
      }
      return username;
    },
  },
};

export default postElem;
