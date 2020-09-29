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
  TwitterSource.find({}, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(source);
  });
};

/* Get source:
 ******************************************************************/
exports.getSource = (req, res) => {
  TwitterSource.findById(req.params.id, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(source);
  });
};

/* Delete source:
 ******************************************************************/
exports.deleteSource = (req, res) => {
  TwitterSource.deleteOne({ _id: req.body.sourceId }, (err, source) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json(source);
  });
};

/* Update source:
 ******************************************************************/
exports.update = (req, res) => {
  TwitterSource.findOneAndUpdate(
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
