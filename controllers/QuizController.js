// Imports:
// const msg = require('../common/msg');

// Models:
const Quiz = require('../models/Quiz');
//const User = require('../models/User');

/* List all quizzes:
 ******************************************************************/
exports.list = (req, res) => {
  Quiz.find({}, (err, quiz) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quiz);
  });
};

/* Read quiz — find quiz data by ID:
 ******************************************************************/
exports.read = (req, res) => {
  Quiz.findById(req.params.id, (err, quiz) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quiz);
  });
};
