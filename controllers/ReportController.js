// Imports:
const msg = require('../common/msg');

// Model(s):
const Report = require('../models/Report');

/* Create quiz:
 ******************************************************************/
exports.create = (req, res, next) => {
  let newReport = new Report(req.body.report);
  newReport.save((err, report) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(report);
  });
};

/* List reports:
 ******************************************************************/
exports.list = (req, res) => {
  Report.find({}, (err, report) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(report);
    res.status(200).json(report);
  });
};

/* Delete report:
 ******************************************************************/
exports.delete = (req, res) => {
  Report.deleteOne({ _id: req.body.reportId }, (err, report) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: msg.success.deleted('report') });
  });
};
