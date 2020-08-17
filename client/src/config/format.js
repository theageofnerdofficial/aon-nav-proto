import moment from 'moment';

const format = {
  time: {
    uetToHumanReadable(unixEpochTime) {
      return moment.unix(unixEpochTime);
    },
    from(time) {
      return moment(time).fromNow();
    },
  },
  reddit: {
    source: {
      thumbnail: (subreddit) => {
        let imgSrc;
        subreddit = subreddit.toLowerCase();
        switch (subreddit) {
          case 'nintendo':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'sega':
            imgSrc = '/img/thumbnails/gaming-sega.svg';
            break;
          case 'xbox':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          default:
            imgSrc = '';
        }
        return imgSrc;
      },
      filter: (o) => {
        let period;
        switch (o.period) {
          case 'Past hour':
            period = 'hour';
            break;
          case 'Past 24 hours':
            period = 'day';
            break;
          case 'Past week':
            period = 'week';
            break;
          case 'Past month':
            period = 'month';
            break;
          case 'Past year':
            period = 'year';
            break;
          default:
            period = 'n/a';
        }
        return period;
      },
    },
  },
};

export default format;
