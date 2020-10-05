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

/* List sources:
 ******************************************************************/
exports.list = (req, res) => {
  let conditionObj = {};
  ['TV/Film', 'Comics', 'Gaming'].forEach((category) => {
    if (category.toLowerCase() === req.params.category) {
      conditionObj.category = category.toLowerCase();
    }
  });
  RedditSource.find(conditionObj, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(source);
  });
};

/* Toggle mute on source:
 ******************************************************************/
exports.toggleMute = (req, res) => {
  RedditSource.findById(req.body._id, (err, source) => {
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
