// Imports:
import moment from 'moment';
import {
  SOURCE_INSTAGRAM,
  SOURCE_INSTAGRAM_LABEL,
  SOURCE_REDDIT,
  SOURCE_REDDIT_LABEL,
  SOURCE_TWITTER,
  SOURCE_TWITTER_LABEL,
  SOURCE_YOUTUBE,
  SOURCE_YOUTUBE_LABEL,
} from '../constants';
import labels from './labels';

const format = {
  source: {
    labelFromConstant(constant) {
      let label;
      switch (constant) {
        case SOURCE_INSTAGRAM:
          label = SOURCE_INSTAGRAM_LABEL;
          break;
        case SOURCE_REDDIT:
          label = SOURCE_REDDIT_LABEL;
          break;
        case SOURCE_TWITTER:
          label = SOURCE_TWITTER_LABEL;
          break;
        case SOURCE_YOUTUBE:
          label = SOURCE_YOUTUBE_LABEL;
          break;
        default:
          label = null;
      }
      return label;
    },
  },
  user: {
    labelFromAccessLevel(accessLevel) {
      let label;
      switch (accessLevel) {
        case 0:
          label = labels.user.accessLabel.banned;
          break;
        case 1:
          label = labels.user.accessLabel.regular;
          break;
        case 2:
          label = labels.user.accessLabel.moderator;
          break;
        case 3:
          label = labels.user.accessLabel.admin;
          break;
        case 4:
          label = labels.user.accessLabel.superAdmin;
          break;
        default:
          label = null;
          break;
      }
      return label;
    },
  },
  time: {
    from(time) {
      return moment(time).fromNow();
    },
    formatReadable(time) {
      return moment(time).format('dddd, MMMM Do YYYY');
    },
    uetToHumanReadable(unixEpochTime) {
      return moment.unix(unixEpochTime);
    },
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
          case 'nintendouk':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'mynintendonews':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendo_nwr':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendoins':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'sega':
            imgSrc = '/img/thumbnails/gaming-sega.svg';
            break;
          case 'playstation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'londonstudiohq':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'playstationuk':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'ps5console':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'askplaystation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'psudotcom':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'xbox':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'oxm':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxuk':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxp3':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxgamepass':
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
            imgSrc = '/img/thumbnails/aon-default.svg';
        }
        return imgSrc;
      },
    },
  },
  youtube: {
    source: {
      thumbnail: (youtubeSrc) => {
        let imgSrc;
        youtubeSrc = youtubeSrc.toLowerCase();
        switch (youtubeSrc) {
          case 'nintendo':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendouk':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'mynintendonews':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendo_nwr':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendoins':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'sega':
            imgSrc = '/img/thumbnails/gaming-sega.svg';
            break;
          case 'playstation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'londonstudiohq':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'playstationuk':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'ps5console':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'askplaystation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'psudotcom':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'xbox':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'oxm':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxuk':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxp3':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxgamepass':
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
            imgSrc = '/img/thumbnails/aon-default.svg';
        }
        return imgSrc;
      },
    },
  },
  instagram: {
    source: {
      thumbnail: (twitterSrc) => {
        let imgSrc;
        twitterSrc = twitterSrc.toLowerCase();
        switch (twitterSrc) {
          case 'nintendo':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendouk':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'mynintendonews':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendo_nwr':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'nintendoins':
            imgSrc = '/img/thumbnails/gaming-nintendo.svg';
            break;
          case 'sega':
            imgSrc = '/img/thumbnails/gaming-sega.svg';
            break;
          case 'playstation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'londonstudiohq':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'playstationuk':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'ps5console':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'askplaystation':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'psudotcom':
            imgSrc = '/img/thumbnails/gaming-ps.svg';
            break;
          case 'xbox':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'oxm':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxuk':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxp3':
            imgSrc = '/img/thumbnails/gaming-xbox.svg';
            break;
          case 'xboxgamepass':
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
            imgSrc = '/img/thumbnails/aon-default.svg';
        }
        return imgSrc;
      },
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
            imgSrc = '/img/thumbnails/aon-default.svg';
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
