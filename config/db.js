// Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Config
dotenv.config();

/* Database URI and options:
 ***************************************************/
const { DB_USER, DB_PARAMS, DB_PASS, DB_URL } = process.env;

// MongoAtlas URI:
const dbURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}?${DB_PARAMS}`;

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

/* Database connection using Mongoose:
 ***************************************************/

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting database instance due to: ', err);
  }
);

// Require models:
//require('../models/User');
