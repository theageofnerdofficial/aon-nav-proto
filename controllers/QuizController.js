// Imports:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const msg = require('../common/msg');
const settings = require('../config/settings');

// Model(s):
const Quiz = require('../models/Quiz');

/* Create quiz:
 ******************************************************************/
exports.create = (req, res) => {
  let newQuiz = new Quiz(req.body);
  newQuiz.save((err, quiz) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(quiz);
  });
};

/* List quizzes:
 ******************************************************************/
exports.list = (req, res) => {
  Quiz.find({}, (err, quizzes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quizzes);
  });
};
