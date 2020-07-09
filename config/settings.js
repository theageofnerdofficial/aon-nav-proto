const dotenv = require('dotenv');
dotenv.config();

const settings = {
  token: {
    expiresIn: 86400 * 1, // 24 hours (1 day)
    key: process.env.TOKEN_KEY,
  },
};

module.exports = settings;
