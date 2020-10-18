// Imports:
const msg = require('../../common/msg');
const fetch = require('node-fetch');

// Model(s):
const YoutubeSource = require('../../models/sources/YoutubeSource');

const getChannelData = (req, res, youtubeUserId, secret, videosNumber) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${secret}&channelId=${youtubeUserId}&part=snippet,id&order=date&maxResults=${videosNumber}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return res.status(200).send(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(400).send(error);
    });
};
/* Create source:
 ******************************************************************/
exports.create = (req, res, next) => {
  let newSource = new YoutubeSource(req.body);
  newSource.save((err, source) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(source);
  });
};

exports.getUserByUserId = (req, res, next) => {
  YoutubeSource.find({ youtubeUserId: req.params.user_id }, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(res.DB_YOUTUBE_SECRET);
    getChannelData(
      req,
      res,
      source[0].youtubeUserId,
      res.DB_YOUTUBE_SECRET,
      source[0].videosNumber
    );
  });
};

exports.getId = (req, res, next) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?forUsername=${req.params.user}&part=contentDetails&key=${res.DB_YOUTUBE_SECRET}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return res.status(200).send(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(400).send(error);
    });
};

exports.create = (req, res, next) => {
  let newSource = new YoutubeSource(req.body);
  newSource.save((err, source) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(source);
  });
};
