const labels = {
  response: {
    error: 'Error',
    success: 'Success',
  },
  ui: {
    general: {
      notAvailable: 'N/A',
      pageNotFound: {
        title: 'Page Not Found',
        message: 'We are sorry but the page you requested could not be found.',
        instruction: 'Try again or click below to go back to the homepage.',
      },
    },
    home: {
      welcomeTitle: 'Welcome to AON',
      welcomeSubtitle: 'Create a profile & personalise',
      welcomeSignUpPrompt: 'Personalise your experience',
      welcomeSignedIn: 'Welcome back',
    },
    posts: {
      accordionContent: {
        voteScore: 'Source upvote score',
      },
      accordionPanel: {
        contract: 'Less [-]',
        expand: 'More [+]',
      },
      contextDotsMenu: {
        save: 'Save post',
        hide: 'Hide post',
        visit: 'Visit link',
      },
    },
    quiz: {
      ansLabels: ['A', 'B', 'C', 'D'],
      tips: [
        'Proof-read for mistakes in spelling & grammar',
        'Keep formatting consistent with sentence casing and the Oxford comma',
        'Ensure you have checked the correct answer is selected',
        'If doubts arise, ask for a second opinion from other mods/admins',
        'Test your quiz to see how it plays',
      ],
    },
    sources: {
      form: {
        category: {
          gaming: {
            selectionLabel: '-- Select gaming category --',
          },
        },
      },
      time: {
        abbreviations: {
          seconds: 's',
          minutes: 'm',
          hours: 'h',
        },
      },
    },
  },
  user: {
    accessLabel: {
      banned: 'Banned',
      regular: '',
      moderator: 'Moderator',
      admin: 'Admin',
      superAdmin: 'Super Admin',
    },
  },
};

export default labels;
