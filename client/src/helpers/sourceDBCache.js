// Imports:
import format from '../config/format';
import settings from '../config/settings';
import {
  SOURCE_INSTAGRAM,
  SOURCE_REDDIT,
  SOURCE_TWITTER,
  SOURCE_YOUTUBE,
} from '../constants';

/*
 ***************************************************************/
const sourceDBCache = {
  //

  create: (o, data) => {
    console.log('1. Create method in sourceDBCache:');
    console.log(data);
    console.log('2. Stringify in sourceDBCache:');
    console.log(data);
    // console.log(formatYoutube.formatYoutubeData(data));
    // console.log(this.format.youtube(data));

    return fetch('/sourcedata/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        // data: JSON.stringify(formatYoutube.formatYoutubeData(data)), // replace with formatted yt
      },
    }).then((res) => res.json());
  },

  //
  listSourceData: (o) =>
    fetch('/sourcedata/list', { method: 'GET' }).then((res) => res.json()),

  //
  isCacheable(source) {
    return settings.content.newsfeed.sourcesCached.includes(source);
  },

  get: {
    apiData: {
      fresh: (o) => {
        console.log(o.src);
        console.log(sourceDBCache.format.url.byRequest(o));
        return fetch(sourceDBCache.format.url.byRequest(o), {
          method: 'GET',
        }).then((res) => {
          console.log(res);
          return res.json();
        });
      },
      cached: (o) =>
        // make so you can list by service!:
        fetch('/sourcedata/list', { method: 'GET' }).then((res) => res.json()),
    },
  },

  getAPIData: (o) =>
    fetch(sourceDBCache.format.url.byRequest(o), {
      method: 'GET',
    }).then((res) => res.json()),

  format: {
    url: {
      byRequest(o) {
        const { count, endpoint, q, src, user } = o;

        //
        if (src === SOURCE_TWITTER) {
          return `/api/request_data_twitter/${endpoint}/${user}/${q}/${count}`;
        }

        //
        else if (src === SOURCE_REDDIT) {
          return sourceDBCache.format.url.reddit(o);
        }

        //
        else if (src === SOURCE_INSTAGRAM) {
          console.log(user);
          return `/api/request_data_instagram/${user}/${count}`;
        }

        //
        else if (src === SOURCE_YOUTUBE) {
          const userId = o.userId.toString();
          return `/api/request_data_youtube/${userId}`;
        }
      },

      /*
       ***************************************************************/
      reddit(o) {
        // endpoint: "hot", src: "SOURCE_REDDIT", user: "amazonprime", count: 10
        let redditUrl = `https://www.reddit.com/r/${o.user}/${o.endpoint}.json?`;
        let params = [];
        if (o.period) {
          params.push(
            `t=${
              o.period !== 'All time' ? format.reddit.source.filter(o) : null
            }`
          );
        }
        if (o.count) params.push(`limit=${o.count}`);
        return redditUrl + params.join('&');
      },
    },
  },
};

export default sourceDBCache;
