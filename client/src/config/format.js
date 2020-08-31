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
        console.log(subreddit);
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
          case 'marvel':
            imgSrc = '/img/thumbnails/comics-marvel.svg';
            break;
          case 'dccomics':
            imgSrc = '/img/thumbnails/comics-dc.svg';
            break;
          case 'wwe':
            imgSrc = '/img/thumbnails/wrestling-wwe.svg';
            break;
          case 'impactwrestling':
            imgSrc = '/img/thumbnails/wrestling-impact.svg';
            break;
          case 'lego':
            imgSrc = '/img/thumbnails/toys-lego.svg';
            break;
          case 'netflix':
            imgSrc = '/img/thumbnails/tvfilm-netflix.svg';
            break;
          case 'amazonprime':
            imgSrc = '/img/thumbnails/tvfilm-prime.svg';
            break;
          default:
            imgSrc = '';
        }
        return imgSrc;
      },
      twitter: {
        source: {
          thumbnail: (twitterSrc) => {
            let imgSrc;
            twitterSrc = twitterSrc.toLowerCase();
            switch (twitterSrc) {
              case 'nintendo':
                imgSrc = '/img/thumbnails/gaming-nintendo.svg';
                break;
              case 'sega':
                imgSrc = '/img/thumbnails/gaming-sega.svg';
                break;
              case 'xbox':
                imgSrc = '/img/thumbnails/gaming-xbox.svg';
                break;
              case 'marvel':
                imgSrc = '/img/thumbnails/comics-marvel.svg';
                break;
              case 'dccomics':
                imgSrc = '/img/thumbnails/comics-dc.svg';
                break;
              case 'wwe':
                imgSrc = '/img/thumbnails/wrestling-wwe.svg';
                break;
              case 'impactwrestling':
                imgSrc = '/img/thumbnails/wrestling-impact.svg';
                break;
              case 'lego':
                imgSrc = '/img/thumbnails/toys-lego.svg';
                break;
              case 'netflix':
                imgSrc = '/img/thumbnails/tvfilm-netflix.svg';
                break;
              case 'amazonprime':
                imgSrc = '/img/thumbnails/tvfilm-prime.svg';
                break;
              default:
                imgSrc = '';
            }
            return imgSrc;
          },
        },
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
