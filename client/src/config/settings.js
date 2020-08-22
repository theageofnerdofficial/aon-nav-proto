const settings = {
  categories: {
    arr: ['TV/Film', 'Comics', 'Gaming'],
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
  permissions: {
    accessLevel: {
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
    style: {
      sectionTab: {
        default: '#ccc',
        featured: '#f44336',
        mynerd: '#8bc34a',
        tvfilm: '#009688',
        gaming: {
          retro: '#cddc39',
          modern: '#795548',
          board: '#673ab7',
        },
        comics: '#ffc107',
      },
    },
  },
};

export default settings;
