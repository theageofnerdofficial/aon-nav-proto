// Imports:
import labels from './labels';
import moment from 'moment';

const format = {
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
};

export default format;
