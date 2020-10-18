/* Imports:
 ***************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
// const fetch = require('node-fetch');

const Instagram = require('instagram-web-api');
const snoowrap = require('snoowrap');
const Twit = require('twit');
const TwitchAPI = require('twitch-api-v5');

const verifyToken = require('./common/verifyToken');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Controllers:
const accessTokenController = require('./controllers/AccessTokenController');
const instagramSourceController = require('./controllers/sources/InstagramSourceController');
const quizController = require('./controllers/QuizController');
const redditSourceController = require('./controllers/sources/RedditSourceController');
const twitterSourceController = require('./controllers/sources/TwitterSourceController');
const userController = require('./controllers/UserController');
const youtubeSourceController = require('./controllers/sources/YoutubeSourceController');

// For env variables:
dotenv.config();

/* Database URI and options:
 ***************************************************/
const {
  DB_INSTAGRAM_USER,
  DB_INSTAGRAM_PASS,
  DB_TWITTER_CONSUMER_KEY,
  DB_TWITTER_CONSUMER_SECRET,
  DB_TWITCH_CLIENT_ID,
  DB_TWITCH_SECRET,
  DB_YOUTUBE_SECRET,
} = process.env;

// Initialise the Instagram web API with username & password:
const client = new Instagram({ DB_INSTAGRAM_USER, DB_INSTAGRAM_PASS });

// Add client ID to Twitch API:
TwitchAPI.clientID = DB_TWITCH_CLIENT_ID;

/* :
 ***************************************************/
app.get('/accesstoken', (req, res, next) => {
  res.DB_TWITCH_CLIENT_ID = DB_TWITCH_CLIENT_ID;
  res.DB_TWITCH_SECRET = DB_TWITCH_SECRET;
  accessTokenController.list(req, res, next);
});

/* :
 ***************************************************/
app.get('/api/request_data_instagram', (req, res, next) => {
  return client.getUserByUsername({ username: 'instagram' }).then((data) => {
    const { id, username, profile_pic_url } = data;
    const edges = data.edge_owner_to_timeline_media.edges;
    res.json({ id, username, profile_pic_url, edges });
  });
});

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
  return r
    .getHot()
    .map((post) => post.title)
    .then((data) => res.json(data));
});

/* :
 *****************************************************************/
app.get('/api/request_data_youtube/:user_id/', (req, res, next) => {
  res.DB_YOUTUBE_SECRET = DB_YOUTUBE_SECRET;
  return youtubeSourceController.getChannelDataByUserId(req, res, next);
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
app.get('/user/authenticate', verifyToken, (req, res, next) =>
  userController.authenticate(req, res, next)
);

app.get('/user/getUserById/:id', (req, res, next) =>
  userController.findById(req, res, next)
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

app.get('/users/listsecure', (req, res, next) =>
  userController.listSecure(req, res, next)
);

/* Sources:
 *****************************************************************/
app.delete('/source/instagram', (req, res, next) =>
  instagramSourceController.delete(req, res, next)
);

app.delete('/source/reddit', (req, res, next) =>
  redditSourceController.delete(req, res, next)
);

app.get('/source/reddit/:category', (req, res, next) =>
  redditSourceController.list(req, res, next)
);

app.get('/source/getRedditSourceById/:id', (req, res, next) =>
  redditSourceController.get(req, res, next)
);

app.get('/source/getInstagramSourceById/:id', (req, res, next) =>
  instagramSourceController.get(req, res, next)
);

app.post('/source/reddit/', (req, res, next) =>
  redditSourceController.create(req, res, next)
);

app.put('/source/reddit/', (req, res, next) =>
  redditSourceController.update(req, res, next)
);

app.put('/source/reddit/mute', (req, res, next) =>
  redditSourceController.toggleMute(req, res, next)
);

app.delete('/source/twitter', (req, res, next) =>
  twitterSourceController.deleteSource(req, res, next)
);

app.get('/source/twitter/', (req, res, next) =>
  twitterSourceController.list(req, res, next)
);

app.post('/source/twitter', (req, res, next) =>
  twitterSourceController.create(req, res, next)
);

app.put('/source/twitter/', (req, res, next) =>
  twitterSourceController.update(req, res, next)
);

app.put('/source/twitter/mute', (req, res, next) =>
  twitterSourceController.toggleMute(req, res, next)
);

app.get('/source/getTwitterSourceById/:id', (req, res, next) =>
  twitterSourceController.getSource(req, res, next)
);

app.post('/source/instagram/', (req, res, next) =>
  instagramSourceController.create(req, res, next)
);

app.get('/source/getInstagramSourceByUsername/:username', (req, res, next) =>
  instagramSourceController.get(req, res, next)
);

app.get('/source/instagram/', (req, res, next) => {
  return instagramSourceController.list(req, res, next);
});

app.put('/source/instagram/', (req, res, next) =>
  instagramSourceController.update(req, res, next)
);

app.put('/source/instagram/mute', (req, res, next) =>
  instagramSourceController.toggleMute(req, res, next)
);

app.get('/source/youtube/', (req, res, next) =>
  youtubeSourceController.list(req, res, next)
);

app.post('/source/youtube', (req, res, next) =>
  youtubeSourceController.create(req, res, next)
);

/* Quiz:
 *****************************************************************/
app.get('/quiz/list', (req, res, next) => quizController.list(req, res, next));

app.get('/quiz/:id', (req, res, next) =>
  quizController.findById(req, res, next)
);

app.post('/quiz', (req, res, next) => quizController.create(req, res, next));

app.put('/quiz/schedule', (req, res, next) =>
  quizController.schedule(req, res, next)
);

/* :
 ***************************************************/
app.get('/youtubeid/:user', (req, res, next) => {
  res.DB_YOUTUBE_SECRET = DB_YOUTUBE_SECRET;
  return youtubeSourceController.getId(req, res, next);
});

/* Description: Handle additional request: direct to index.html
   Permission: Unprotected GET
 *****************************************************************/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
