/* Imports:
 ***************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const fetch = require('node-fetch');

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
const sourceDataController = require('./controllers/SourceDataController');

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

// Add client ID to Twitch API:
TwitchAPI.clientID = DB_TWITCH_CLIENT_ID;

/* :
 ***************************************************/
app.get('/accesstoken/twitch', (req, res, next) => {
  res.DB_TWITCH_CLIENT_ID = DB_TWITCH_CLIENT_ID;
  res.DB_TWITCH_SECRET = DB_TWITCH_SECRET;
  accessTokenController.twitchTokenslist(req, res, next);
});

const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const instamancer = require('instamancer');

var ig = require('instagram-node').instagram();

/*

create a long-lived access token...

*/
ig.use({ access_token: 'YOUR_ACCESS_TOKEN' });
ig.use({ client_id: 'YOUR_CLIENT_ID', client_secret: 'YOUR_CLIENT_SECRET' });

/* :
 ***************************************************/
app.get('/accesstoken/fbinstagram', (req, res, next) => {
  //
});

const Instagram = require('node-instagram').default;

// Create a new instance.
const instagram = new Instagram({
  clientId: '165215838428900',
  clientSecret: '3d18e7ef034e7aa11d530aa9f7db4818',
});

const redirectUri = 'http://localhost:5000/auth/instagram/callback';

app.get('/auth/x', (req, res) => {
  instagram.get('users/13213170/media/recent').then((data) => {
    console.log(data);
  });
});

// Redirect user to instagram oauth
app.get('/auth/instagram', (req, res) => {
  res.redirect(
    instagram.getAuthorizationUrl(redirectUri, { scope: ['basic'] })
  );
});

// Handle auth code and get access_token for user
app.get('/auth/instagram/callback', async (req, res) => {
  try {
    const data = await instagram.authorizeUser(req.query.code, redirectUri);
    // access_token in data.access_token
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

/*
https://graph.facebook.com/{graph-api-version}/oauth/access_token?  
    grant_type=fb_exchange_token&          
    client_id={app-id}&
    client_secret={app-secret}&
    fb_exchange_token={your-access-token
*/

/* :
 ***************************************************/
app.get('/api/request_data_instagram/:username/:count', (req, res, next) => {});

/* Snoowrap (Reddit API package) — oAuth credentials:
 ***************************************************/
const r = new snoowrap({
  userAgent: 'theageofnerdjm',
  clientId: 'IHlM5CoVokkoEQ',
  clientSecret: 'P168jsB6Kx5ZaZ7zT7jjxY2ikqM',
  refreshToken: '572960930002-AvFDeoFnSEN05wbyZzFLq2gQT3I', // expires in hour
});
// ^ NOTE: on roll out, change these and import as environmental variables

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
app.get('/api/request_data_youtube/:user_id', (req, res, next) => {
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

/* Source Data:
 *****************************************************************/
app.get('/sourcedata/list', (req, res, next) =>
  sourceDataController.list(req, res, next)
);

app.post('/sourcedata/create', (req, res, next) => {
  console.log('3. Create route in index.js:');
  console.log(req.body);
  //console.log(req.body);
  // console.log(res.body);
  //console.log(res);
  sourceDataController.create(req, res, next);
});

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

//
app.put('/user/promote', (req, res, next) =>
  userController.promote(req, res, next)
);

app.put('/user/demote', (req, res, next) =>
  userController.demote(req, res, next)
);

app.put('/user/toggleBan', (req, res, next) =>
  userController.toggleBan(req, res, next)
);

/* Users:
 *****************************************************************/
app.get('/users/list', (req, res, next) => userController.list(req, res, next));

app.get('/users/listsecure', (req, res, next) =>
  userController.listSecure(req, res, next)
);

/* Sources:
 *****************************************************************/
// Instagram:
app.delete('/source/instagram', (req, res, next) =>
  instagramSourceController.delete(req, res, next)
);

app.get('/source/getInstagramSourceById/:id', (req, res, next) =>
  instagramSourceController.get(req, res, next)
);

app.get('/source/getInstagramSourceByUsername/:username', (req, res, next) =>
  instagramSourceController.get(req, res, next)
);

app.get('/source/instagram/', (req, res, next) => {
  return instagramSourceController.list(req, res, next);
});

app.post('/source/instagram/', (req, res, next) =>
  instagramSourceController.create(req, res, next)
);

app.put('/source/instagram/', (req, res, next) =>
  instagramSourceController.update(req, res, next)
);

app.put('/source/instagram/mute', (req, res, next) =>
  instagramSourceController.toggleMute(req, res, next)
);

// Reddit:
app.delete('/source/reddit', (req, res, next) =>
  redditSourceController.delete(req, res, next)
);

app.get('/source/getRedditSourceById/:id', (req, res, next) =>
  redditSourceController.get(req, res, next)
);

app.get('/source/reddit/:category', (req, res, next) =>
  redditSourceController.list(req, res, next)
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

// Twitter
app.delete('/source/twitter', (req, res, next) =>
  twitterSourceController.deleteSource(req, res, next)
);

app.get('/source/getTwitterSourceById/:id', (req, res, next) =>
  twitterSourceController.getSource(req, res, next)
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

// Youtube
app.get('/source/getYoutubeSourceById/:id', (req, res, next) =>
  youtubeSourceController.get(req, res, next)
);

app.get('/source/youtube/', (req, res, next) =>
  youtubeSourceController.list(req, res, next)
);

app.post('/source/youtube', (req, res, next) =>
  youtubeSourceController.create(req, res, next)
);

app.put('/source/youtube/', (req, res, next) =>
  youtubeSourceController.update(req, res, next)
);

app.put('/source/youtube/mute', (req, res, next) =>
  youtubeSourceController.toggleMute(req, res, next)
);

/* Quiz:
 *****************************************************************/
app.get('/quiz/list', (req, res, next) => quizController.list(req, res, next));

app.get('/quiz/:id', (req, res, next) =>
  quizController.findById(req, res, next)
);

app.post('/quiz', (req, res, next) => quizController.create(req, res, next));

app.put('/quiz', (req, res, next) => quizController.update(req, res, next));

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
