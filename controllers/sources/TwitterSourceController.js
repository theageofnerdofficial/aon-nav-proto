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

/* Toggle mute on source:
 ******************************************************************/
exports.toggleMute = (req, res) => {
  TwitterSource.findById(req.body._id, (err, source) => {
    if (err) return res.status(500).send(msg.err.findErr('source'));
    if (!source) return res.status(404).send(msg.err.noFoundErr('source'));
    source.muted = source.muted ? false : true;
    source.save((err, source) => {
      res.status(200).send(source);
    });
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
