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
      sourcesEnabled: {
        reddit: true,
        instagram: false,
        twitter: false,
        youtube: false,
      },
      sourcesCached: [], //[SOURCE_YOUTUBE],
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
    defaultUsername: '???',
    defaultPostThumbs: {
      useDefaultPostThumbs: true,
      general: './img/thumbnails/aon-default.svg',
      reddit: {
        gaming: './img/thumbnails/gaming-reddit-2.svg',
      },
      twitter: {
        gaming: './img/thumbnails/gaming-twitter-2.svg',
      },
    },
    labels: {
      panel: {
        contract: 'Less [-]',
        expand: 'More [+]',
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
