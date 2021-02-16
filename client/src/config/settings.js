const settings = {
  debug: {
    guidelines: false,
  },

  localStorage: {
    darkmode: 'quizslice_darkmode',
    token: 'quizslice_token',
    login: {
      id: 'quizslice_user_id',
      username: 'quizslice_user_username',
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
  },
};

export default settings;
