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
    minlength: 6,
    maxlength: 100,
  },

  description: {
    type: String,
    trim: true,
    required: 'Description is required',
    minlength: 6,
    maxlength: 200,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  timeLimit: {
    type: Number,
    default: 5,
    validate(value) {
      if (value < 1 || value > 60) throw new Error('Disallowed time limit');
    },
  },

  tableHeaderClue: {
    type: String,
    required: true,
  },

  tableHeaderAnswer: {
    type: String,
    required: true,
  },

  instructions: {
    type: String,
    minlength: 10,
    maxlength: 200,
    required: true,
    description:
      'Instructions must have a length between 10 and 200 characters',
  },

  questions: [
    {
      question: {
        type: String,
        required: true,
        description: 'Questions must have a question!',
      },
      answer: {
        type: String,
        required: true,
        description: 'Questions must have an answer!',
      },
      acceptable: {
        type: Array,
        minItems: 0,
        maxItems: 4,
        description: '"Acceptable" must be a array between 0 and 4 items',
        //required: true
      },
    },
  ],

  likes: {
    type: Array,
  },

  dislikes: {
    type: Array,
  },

  favouritedBy: {
    type: Array,
  },

  scores: {
    type: Array,
  },

  createdBy: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  author: {
    type: String,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quizzes', QuizSchema);
