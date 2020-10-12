// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

// Schema:
const AccessTokenSchema = new Schema({
  access_token: {
    type: String,
    lowercase: true,
    required: 'Token string is required',
    trim: true,
    minLength: 24,
    maxlength: 64,
  },

  expires_in: {
    type: Number,
    required: true,
  },

  token_type: {
    type: String,
    required: true,
    default: 'bearer',
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AccessTokens', AccessTokenSchema);
