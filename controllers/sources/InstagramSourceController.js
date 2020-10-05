// Imports:
const msg = require('../../common/msg');

// Model(s):
const InstagramSource = require('../../models/sources/InstagramSource');

/* Create source:
 ******************************************************************/
exports.create = (req, res, next) => {
  let newSource = new InstagramSource(req.body);
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
  let conditionObj = {};
  ['TV/Film', 'Comics', 'Gaming'].forEach((category) => {
    if (category.toLowerCase() === req.params.category) {
      conditionObj.category = category.toLowerCase();
    }
  });
  InstagramSource.find(conditionObj, (err, source) => {
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
  InstagramSource.findById(req.params.id, (err, source) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(source);
  });
};

/* Delete source:
 ******************************************************************/
exports.delete = (req, res) => {
  InstagramSource.deleteOne({ _id: req.body.sourceId }, (err, source) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json(source);
  });
};

/* Update source:
 ******************************************************************/
exports.update = (req, res) => {
  console.log(req.body);
  return;
  InstagramSource.findOneAndUpdate(
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
