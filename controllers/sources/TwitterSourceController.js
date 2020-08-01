// Imports:
const msg = require('../../common/msg');

// Model(s):
const TwitterSource = require('../../models/sources/TwitterSource');

/* Create source:
 ******************************************************************/
exports.create = (req, res, next) => {
  let newSource = new TwitterSource(req.body);
  newSource.save((err, source) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(source);
  });
};

/* List sources:
 ******************************************************************/
exports.list = (req, res) => {
  console.log('list');
  TwitterSource.find({}, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(source);
    res.status(200).json(source);
  });
};
