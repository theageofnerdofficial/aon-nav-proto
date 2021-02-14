const settings = {
  categories: {
    arr: ['TV/Film', 'Comics', 'Gaming', 'Wrestling', 'Toys'],
    gaming: ['Modern', 'Retro', 'Modern and Retro', 'Board', 'Misc'],
  },

  localStorage: {
    darkmode: 'aon_darkmode',
    token: 'aon_token',
    login: {
      id: 'aon_user_id',
      username: 'aon_user_username',
    },
  },

  network: {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
  },

  content: {
    newsfeed: {
      sourcesDebugEnabled: true,
      sourcesEnabled: {
        reddit: true,
        instagram: false,
        twitter: true,
        youtube: false,
      },
      /* What does the following mean? Strict numbers not enabled? 
         Well, when you ask for 10 posts from a source, for example "@NintendoUK", "strict numbers" makes it so that the API —MUST— return exactly 10 posts or the process will terminate. However, I have this disabled by default in order to tolerate fewers posts than specified to be returned. Here's why: the likes of the Twitter APi favours
         relevance of post content over a precise post count. So if you ask for the data of 10 posts to be returned, it might only return 8. Let's tolerate a shortfall like this
         rather than terminating.
      */
      srcStrictNumbersEnabled: {
        twitter: false,
      },

      sourcesCached: [], //[SOURCE_YOUTUBE],
      sourcesPrefix: {
        reddit: 'r/',
        twitter: '@',
      },
      sourcesPrefixEnabled: true,
      forbiddenCharacters: {
        enabled: false,
        arr: ['🪶'],
      },
    },
  },

  permissions: {
    accessLevel: {
      admin: 3,
      source: {
        canDelete: 2, // Mod
        canEdit: 2, // Mod
        canFlag: 1, // Logged in user
      },
      user: {
        canDelete: 3, // Admin
        canEdit: 3, // Admin
        canFlag: 1, // Logged in user
      },
      pages: {
        usersList: 2, // Only mods can visit users list
        admin: 3, // Only admins can visit users list
        reports: 2, // Only mods can visit users list
      },
    },
    loggedInRedirects: ['login', 'signup'],
  },

  ui: {
    defaultUsername: 'Unknown_User',
    defaultPostThumbs: {
      useDefaultPostThumbs: true,
      general: './img/thumbnails/aon-default.svg',
      reddit: {
        default: './img/thumbnails/defaults/reddit.svg',
        //gaming: './img/thumbnails/gaming-reddit-2.svg',
      },
      twitter: {
        default: './img/thumbnails/defaults/twitter.svg',
        //gaming: './img/thumbnails/gaming-twitter-2.svg',
      },
      youtube: {
        default: './img/thumbnails/defaults/youtube.svg',
        // gaming: './img/thumbnails/gaming-youtube.svg',
      },
      instagram: {
        default: './img/thumbnails/defaults/instagram.svg',
      },
      defaultYoutubeThumbnail: {
        res: {
          /* 
            Image available in 3 resolutions:
            0 = default = 120px * 90px
            1 = high = 480px * 360px
            2 = medium = 320px * 180px
          */
          thumbnailRes: 0,
        },
      },
    },
    labeling: {
      post: {
        officialSrc: {
          brandColourEnabled: true,
          checkmarkEnabled: true,
        },
      },
    },
    modal: {
      embeddedMedia: {
        reddit: {
          img: {
            /*
            Image available in resolutions 0-5 — 0 being lowest & 5 being highest
              0 = 108px * 108px
              1 = 216px * 216px
              2 = 320px * 320px
              3 = 640px * 640px
              4 = 960px * 960px
              5 = 1080px * 1080px
            */
            resolution: 5,
          },
        },
      },
    },
    thumbnails: {
      path: '/img/thumbnails/',
    },
    time: {
      abbreviateUnits: true,
    },
    style: {
      sectionTab: {
        default: '#CCC', // light grey
        featured: '#FF0000', // red
        mynerd: '#FFA500', // orange
        tvfilm: '#FFFF00', // yellow
        gaming: {
          retro: '#EE82EE', // violet
          modern: '#00FFFF', // cyan
          board: '#4B0082', // indigo
        },
        comics: '#00FF00', // lime
        wrestling: '#00755E', // dark green
        toys: '#FF00FF', // magenta
      },
    },
  },
};

export default settings;
