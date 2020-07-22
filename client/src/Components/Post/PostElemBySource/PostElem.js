import React, { Component } from 'react';
import { SOURCE_TWITTER, SOURCE_REDDIT } from '../../../constants';
//
const postElem = {
  user: {
    get(o, settings) {
      //
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
          src = settings.ui.defaultPostThumbs.twitter.gaming;
          /*
          if (userData && userData.profile_image_url) {
            src = userData.profile_image_url;
          } else {
            src = settings.ui.defaultPostThumbs.twitter.gaming;
          }*/
          break;
        default:
        //
      }

      return <img src={src} style={{ borderRadius: '100px', width: '40px' }} />;
    },
  },
};

export default postElem;
