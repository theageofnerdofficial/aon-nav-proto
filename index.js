const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');
const app = express();
const Twit = require('twit');
const dotenv = require('dotenv');

// Config
dotenv.config();

/* Database URI and options:
 ***************************************************/
const { DB_TWITTER_CONSUMER_KEY, DB_TWITTER_CONSUMER_SECRET } = process.env;

const T = new Twit({
  consumer_key: DB_TWITTER_CONSUMER_KEY.toString(),
  consumer_secret: DB_TWITTER_CONSUMER_SECRET.toString(),
  app_only_auth: true,
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// An api endpoint that returns a short list of items

app.get('/api/getList', (req, res, next) => {
  console.log('got here');
  return T.get(
    'search/tweets',
    {
      q: 'zelda since:2019-07-11',
      count: 100,
    },
    (err, data, response) => res.json(data)
  );
});
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
