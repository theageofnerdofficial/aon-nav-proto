import React, { Component } from 'react';
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../../constants';
//
const postElem = {
  user: {
    get(o) {
      const { source, userData } = o;
      let username;
      switch (source) {
        case SOURCE_REDDIT:
          username = userData ? userData : '???';
          break;
        case SOURCE_TWITTER:
          username =
            userData && userData.screen_name ? userData.screen_name : '???';
          username = username + ' - Twitter';
          break;
        default:
          username = '???';
      }
      return username;
    },
  },

  text: {
    get(o, utils, ReactHtmlParser) {
      const { source, text, userData } = o;
      return ReactHtmlParser(utils.urlify(text));
    },
  },

  thumbnail: {
    get(o, settings) {
      const { source, userData } = o;
      let src;
      switch (source) {
        case SOURCE_REDDIT:
          src = settings.ui.defaultPostThumbs.reddit.gaming;
          break;
        case SOURCE_TWITTER:
          if (settings.ui.defaultPostThumbs.useDefaultPostThumbs) {
            const hasCustomThumb = userData && userData.profile_image_url;
            src = hasCustomThumb
              ? userData.profile_image_url
              : settings.ui.defaultPostThumbs.twitter.gaming;
          } else {
            src = settings.ui.defaultPostThumbs.twitter.gaming;
          }
          break;
        default:
          src = settings.ui.defaultPostThumbs.general;
      }
      return <img src={src} style={{ borderRadius: '100px', width: '40px' }} />;
    },
  },
};

export default postElem;
