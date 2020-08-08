// Imports:
const msg = require('../../common/msg');

// Model(s):
const RedditSource = require('../../models/sources/RedditSource');

/* Create source:
 ******************************************************************/
exports.create = (req, res, next) => {
  let newSource = new RedditSource(req.body);
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
  RedditSource.find({}, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(source);
    res.status(200).json(source);
  });
};

/* Get source:
 ******************************************************************/
exports.get = (req, res) => {
  RedditSource.findById(req.params.id, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(source);
  });
};

/* Delete source:
 ******************************************************************/
exports.delete = (req, res) => {
  RedditSource.deleteOne({ _id: req.body.sourceId }, (err, source) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json(source);
  });
};

/* Update source:
 ******************************************************************/
exports.update = (req, res) => {
  RedditSource.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, source) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(source);
    }
  );
};
