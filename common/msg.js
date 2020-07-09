// Imports:
const utils = require('./utils');

const msg = {
  err: {
    findErr(item) {
      return `There was a problem finding the ${item}`;
    },
    noFoundErr(item) {
      return `No ${item} found`;
    },
  },
  success: {
    deleted(item) {
      return `${utils.capitalizeFirstLetter(item)} successfully deleted`;
    },
  },
};

module.exports = msg;
