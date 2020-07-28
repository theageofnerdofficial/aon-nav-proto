const formatAccess = {
  accessLabel: {
    get(accessIndex) {
      let accessLevel;
      switch (accessIndex) {
        case 0:
          accessLevel = 'Banned';
          break;
        case 1:
          accessLevel = 'Standard User';
          break;
        case 2:
          accessLevel = 'Moderator';
          break;
        case 3:
          accessLevel = 'Administrator';
          break;
        case 4:
          accessLevel = 'Super Admin';
          break;
        default:
          accessLevel = 'N/A';
      }
      return accessLevel;
    },
  },
};

export default formatAccess;
