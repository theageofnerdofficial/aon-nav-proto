// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const QuizSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Quiz name/title is required',
    minlength: 5,
    maxlength: 100,
  },

  questions: [
    {
      question: {
        type: String,
        required: true,
        description: 'Questions must have a question',
      },
      answerA: {
        type: String,
        required: true,
        description: 'Questions have four answers to choose from',
      },
      answerB: {
        type: String,
        required: true,
        description: 'Questions have four answers to choose from',
      },
      answerC: {
        type: String,
        required: true,
        description: 'Questions have four answers to choose from',
      },
      answerD: {
        type: String,
        required: true,
        description: 'Questions have four answers to choose from',
      },

      correctAnswer: {
        type: Number,
        required: true,
        description: 'Question must have correct answer specified',
      },
    },
  ],

  schedule: [],

  createdBy: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quizzes', QuizSchema);
