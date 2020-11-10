import React from 'react';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
} from '../../../constants';
import Thumbnail from '../PostUI/Thumbnail';
import format from '../../../config/format';
import utils from '../../Utils/utils/utils';

const postElem = {
  /* Accordion:
   ****************************************/
  accordion: {
    get(o, settings) {
      const { id } = o;
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={`#collapse${id}`}
            >
              <button
                className="btn-link text-left font-weight-light form-control panel-title"
                onClick={(e) => {
                  e.target.innerHTML =
                    e.target.innerHTML === settings.ui.labels.panel.expand
                      ? settings.ui.labels.panel.contract
                      : settings.ui.labels.panel.expand;
                }}
                style={{ background: 'none', border: '0' }}
              >
                {settings.ui.labels.panel.expand}
              </button>
            </a>
          </div>
          <div id={`collapse${id}`} className="collapse in panel-collapse">
            <div className="pt-1 font-italic font-weight-light panel-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      );
    },
  },

  /*
   * Embedded media:
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

  /*
   * Thumbnail:
   ****************************************/
  thumbnail: {
    get(o, settings) {
      const { source, userData, profile_pic_url } = o;
      let src;
      switch (source) {
        case 'Reddit':
          src = settings.ui.defaultPostThumbs.reddit.gaming;
          break;
        case 'Twitter':
          if (settings.ui.defaultPostThumbs.useDefaultPostThumbs) {
            const hasCustomThumb = userData && userData.profile_image_url;
            src = hasCustomThumb
              ? userData.profile_image_url
              : settings.ui.defaultPostThumbs.twitter.gaming;
          } else {
            src = settings.ui.defaultPostThumbs.twitter.gaming;
          }
          break;
        case 'Instagram':
          if (settings.ui.defaultPostThumbs.useDefaultPostThumbs) {
            const hasCustomThumb = userData && profile_pic_url;
            src = hasCustomThumb
              ? profile_pic_url
              : settings.ui.defaultPostThumbs.instagram.default;
          } else {
            src = settings.ui.defaultPostThumbs.instagram.default;
          }
          break;
        default:
          src = settings.ui.defaultPostThumbs.general;
      }
      return <Thumbnail imgSrc={src} source={source} />;
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
