// Imports:
import { SOURCE_REDDIT, SOURCE_TWITTER } from '../../constants';

const FormatSource = {
  form: {
    // Get placeholder for inputs that change depending on category selected:
    getPlaceholder: (form) => {
      if (form) {
        if (form.category === 'tv/film') {
          return 'IMDB';
        } else if (form.category === 'comics') {
          return 'Marvel';
        } else if (form.category === 'gaming') {
          if (form.categoryGaming === 'boardgames') {
            return 'Hasbro';
          } else {
            return 'Nintendo';
          }
        }
      }
    },

    // Get a more readible version of source. 'reddit' instead of 'SOURCE_REDDIT':
    getServiceByName: (src) => {
      if (src.service === SOURCE_REDDIT) {
        return 'reddit';
      } else if (src.service === SOURCE_TWITTER) {
        return 'twitter';
      }
    },

    //
    getSubmissionData: (el) => {
      let formData;
      if (el['service'].value === 'reddit') {
        formData = {
          src: FormatSource.reddit.schemify(el),
          url: '/source/reddit/',
        };
      } else if (el['service'].value === 'twitter') {
        formData = {
          src: FormatSource.twitter.schemify(el),
          url: '/source/twitter',
        };
      }
      return formData;
    },
  },

  //
  reddit: {
    schemify: (el) => {
      return {
        category: el['category'].value,
        categoryGaming: el['category-gaming']
          ? el['category-gaming'].value
          : null,
        subreddit: el['subreddit'] ? el['subreddit'].value : null,
        brandColor: el['reddit-brand-color']
          ? el['reddit-brand-color'].value
          : null,
        postsNumber: el['posts'] ? el['posts'].value : null,
        filter: el['subreddit-filter'] ? el['subreddit-filter'].value : null,
        service: SOURCE_REDDIT,
        period: el['subreddit-period'] ? el['subreddit-period'].value : null,
        createdBy: localStorage.getItem('aon_user_id'),
        isOfficial: el['is-official-source']
          ? el['is-official-source'].checked
          : false,
      };
    },
  },

  //
  twitter: {
    schemify: (el) => {
      console.log(el['twitter-brand-color'].value);
      return {
        category: el['category'].value,
        categoryGaming: el['category-gaming']
          ? el['category-gaming'].value
          : null,
        twitterUser: el['twitter-user'] ? el['twitter-user'].value : null,
        brandColor: el['twitter-brand-color']
          ? el['twitter-brand-color'].value
          : null,
        postsNumber: el['posts'] ? el['posts'].value : null,
        filter: el['tweet-filter'] ? el['tweet-filter'].value : null,
        service: SOURCE_TWITTER,
        queryKeyword: el['query-keyword'] ? el['query-keyword'].value : null,
        queryDate: el['query-date'] ? el['query-date'].value : null,
        createdBy: localStorage.getItem('aon_user_id'),
        isOfficial: el['is-official-source']
          ? el['is-official-source'].checked
          : false,
      };
    },
  },
};

export default FormatSource;
