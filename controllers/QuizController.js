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

exports.findById = (req, res) => {
  Quiz.findById(req.params.id, (err, quiz) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(quiz);
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
  }).sort({ createdOn: -1 });
};

exports.schedule = (req, res) => {
  const { quizId, quizDate } = req.body;
  Quiz.findById(quizId, (err, quiz) => {
    if (err) return res.status(500).send(msg.err.findErr('quiz'));
    if (!quiz) return res.status(404).send(msg.err.noFoundErr('quiz'));
    quiz.schedule.push(quizDate);
    quiz.save((err, quiz) => {
      res.status(200).send(quiz);
    });
  });
};

/* Update quiz:
 ******************************************************************/
exports.update = (req, res) => {
  const { id } = req.body;
  Quiz.findById(id, (err, quiz) => {
    if (err) return res.status(500).send(msg.err.findErr('quiz'));
    if (!quiz) return res.status(404).send(msg.err.noFoundErr('quiz'));
    //
    console.log(quiz);
    //
    quiz.title = req.body.title;
    quiz.questions = req.body.questions;
    //

    console.log(quiz);
    quiz.save((err, quiz) => {
      res.status(200).send(quiz);
    });
  });
};
