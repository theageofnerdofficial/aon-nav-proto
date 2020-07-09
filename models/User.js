// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Utilities:
const validateEmail = require('../common/utils').validateEmail;

// Schema:
const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },

  username: {
    type: String,
    minlength: 6,
    maxlength: 25,
    required: true,
  },

  password: {
    type: String,
    minlength: 8,
    required: true,
  },

  accessLevel: {
    type: Number,
    default: 1,
    required: true,
    validate(value) {
      if (value < 0 || value > 4) throw new Error('No such access level');
    },
  },

  favourites: {
    type: Array,
  },

  friends: {
    type: Array,
  },

  preferences: {
    type: Array,
  },

  likes: {
    type: Array,
  },

  dislikes: {
    type: Array,
  },

  quizResults: {
    type: Array,
  },

  quizSubmissions: {
    type: Array,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', UserSchema);
