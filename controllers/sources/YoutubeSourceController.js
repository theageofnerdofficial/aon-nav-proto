// Imports:
const msg = require('../../common/msg');
const fetch = require('node-fetch');

// Model(s):
const YoutubeSource = require('../../models/sources/YoutubeSource');

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
