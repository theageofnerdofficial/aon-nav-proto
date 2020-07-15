import React, { Component } from 'react';
const formatTweet = {
  //

  entities: {
    video: {
      getArr(status, mp4only = true) {
        const { extended_entities } = status;
        const hasVideoMedia = extended_entities && extended_entities.media;
        const isMp4 = (v) => (v.toString().indexOf('.mp4') >= 0 ? v : false);

        //
        if (hasVideoMedia) {
          return extended_entities.media.map((vidElement) => {
            const { video_info } = vidElement;
            if (video_info && video_info.variants) {
              return video_info.variants.map((variant) =>
                mp4only ? isMp4(variant.url) : variant.url
              );
            }
          });
        } else {
          return [];
        }
      },
      getPlayer(srcs) {
        // If video arr is undefined or empty, return:
        if (srcs.includes(undefined) || srcs.length <= 0) return;

        // Reverse video arr so highres sources take priority:
        const xx = srcs.reverse();
        const isSrc = (v) =>
          typeof v === 'string' && v !== undefined ? v : false;

        return (
          <video width="320" height="240" controls>
            {xx.map((src) =>
              src.map((u) => {
                if (isSrc(u)) {
                  return <source src={u} type="video/mp4"></source>;
                }
              })
            )}
          </video>
        );
      },
    },
  },
  status: {
    format: {
      removeLinkSuffix(status) {
        if (status.substring(status.length - 23).indexOf('https://t.co') >= 0) {
          return status.substring(0, status.length - 23);
        }
        return status;
      },
    },
    get(o, status) {
      const s = status.retweeted_status
        ? status.retweeted_status.full_text
        : status.full_text;
      return formatTweet.status.format.removeLinkSuffix(s);
    },
  },
};

export default formatTweet;
