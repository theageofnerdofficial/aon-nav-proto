/* Imports:
 ***************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');
const app = express();
const Twit = require('twit');
const snoowrap = require('snoowrap');
const dotenv = require('dotenv');
const cors = require('cors');

const verifyToken = require('./common/verifyToken');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Controllers:
const userController = require('./controllers/UserController');

// For env variables:
dotenv.config();

/* Database URI and options:
 ***************************************************/
const { DB_TWITTER_CONSUMER_KEY, DB_TWITTER_CONSUMER_SECRET } = process.env;

/* Snoowrap (Reddit API package) — oAuth credentials:
 ***************************************************/
const r = new snoowrap({
  userAgent: 'theageofnerdjm',
  clientId: 'IHlM5CoVokkoEQ',
  clientSecret: 'P168jsB6Kx5ZaZ7zT7jjxY2ikqM',
  refreshToken: '572960930002-AvFDeoFnSEN05wbyZzFLq2gQT3I', // expires in hour
});

/* Twit (Twitter API package) — oAuth credentials:
 ***************************************************/
const T = new Twit({
  consumer_key: DB_TWITTER_CONSUMER_KEY.toString(),
  consumer_secret: DB_TWITTER_CONSUMER_SECRET.toString(),
  app_only_auth: true,
});

/* :
 *****************************************************************/
app.get('/api/getreddit', (req, res, next) => {
  //
  return r
    .getHot()
    .map((post) => post.title)
    .then((data) => res.json(data));
});

/* Description: Twitter — search Tweets
   Permission: Unprotected GET
 *****************************************************************/
app.get(
  '/api/request_data_twitter/:endpoint/:user/:q/:count',
  (req, res, next) => {
    const { count, endpoint, user } = req.params;
    const parameters = {
      count: count,
      from: user,
      tweet_mode: 'extended',
      //q:
    };
    return T.get(endpoint, parameters, (err, data, response) => res.json(data));
  }
);

/* User:
 *****************************************************************/
// add verifyToken middleware
app.get('/user/authenticate', verifyToken, (req, res, next) =>
  userController.authenticate(req, res, next)
);

app.post('/user/create', (req, res, next) =>
  userController.create(req, res, next)
);

app.post('/user/login', (req, res, next) =>
  userController.login(req, res, next)
);

/* Users:
 *****************************************************************/
app.get('/users/list', (req, res, next) => userController.list(req, res, next));

/* Description: Handle additional request: direct to index.html
   Permission: Unprotected GET
 *****************************************************************/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
