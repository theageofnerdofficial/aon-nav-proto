// Imports:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const msg = require('../common/msg');
const settings = require('../config/settings');

const fetch = require('node-fetch');

// Model(s):
const AccessToken = require('../models/AccessToken');

const updateAccessToken = () => {
  //
  //
  //
};

//
const setAccessToken = (DB_TWITCH_CLIENT_ID, DB_TWITCH_SECRET) => {
  fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${DB_TWITCH_CLIENT_ID}&client_secret=${DB_TWITCH_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST', // or 'PUT'
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const token = new AccessToken(data);
      token.save(function (err) {
        if (err) return handleError(err);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(400).send(error);
    });
};

/* List tokens — if none, add one:
 ******************************************************************/
exports.list = (req, res) => {
  AccessToken.find({}, (err, tokens) => {
    if (err) {
      res.status(500).send(err);
    }
    if (tokens.length >= 1) {
      tokens.forEach((t) => {
        let createdOn = new Date(t.createdOn);
        let expiration = createdOn.getMilliseconds() + t.expires_in;
        //
        createdOn.setMilliseconds(expiration);
        //
        if (createdOn >= new Date()) {
          //
          // updateAccessToken();
          //
        }
      });
      res.status(200).json(tokens);
    } else {
      setAccessToken(res.DB_TWITCH_CLIENT_ID, res.DB_TWITCH_SECRET);
    }
  });
};

/* Update token:
 ******************************************************************/
exports.update = (req, res) => {
  console.log(res);
  return;
  AccessToken.updateOne(
    { _id: req.params.userid },
    // req.body,
    { upsert: true },
    (err, token) => {
      console.log('got here');

      if (err) {
        res.status(500).send(err);
      }
      token.save((err, tk) => {
        res.status(200).send(tk);
      });
    }
  );
};
