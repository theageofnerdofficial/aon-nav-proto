// Imports:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const msg = require('../common/msg');
const settings = require('../config/settings');

// Model(s):
const SourceDataSchema = require('../models/SourceData');

/* Create data source:
 ******************************************************************/
exports.create = (req, res) => {
  var x = [];

  // x.push();

  let newDataScheme = new SourceDataSchema({ data: req.body.data });

  console.log('4. Source data controller');

  console.log(req.body.data);

  //console.log(req.body);

  //req.body.data = [req.body.data];

  if (req.body.data !== undefined) {
    newDataScheme.save((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(201).json(data);
    });
  }
};

/* List source data:
 ******************************************************************/
exports.list = (req, res) => {
  SourceDataSchema.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};

/* Update data source:
 ******************************************************************/
exports.update = (req, res) => {
  const { id } = req.body;
  SourceDataSchema.findById(id, (err, sourceData) => {
    if (err) return res.status(500).send(msg.err.findErr('sourceData'));
    if (!quiz) return res.status(404).send(msg.err.noFoundErr('sourceData'));
    //
    console.log(sourceData);
    //

    // sourceData.data = req.body.data;

    //
    sourceData.save((err, data) => {
      res.status(200).send(data);
    });
  });
};
