// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema:
const QuestionSchema = new Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },

  answer: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
});

module.exports = mongoose.model('Questions', QuestionSchema);
