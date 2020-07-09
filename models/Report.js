// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const ReportSchema = new Schema({
  reason: {
    type: String,
    trim: true,
    required: 'Reason is required',
    minlength: 6,
    maxlength: 100,
  },

  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  username: {
    type: String,
    maxlength: 100,
  },

  quiz: {
    type: ObjectId,
    ref: 'Quiz',
    required: true,
  },

  quizTitle: {
    type: String,
    maxlength: 100,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Reports', ReportSchema);
