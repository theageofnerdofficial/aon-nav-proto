// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const TwitterSourceSchema = new Schema({
  category: {
    type: String,
    lowercase: true,
    required: 'Category is required',
    trim: true,
  },

  categoryGaming: {
    type: String,
    lowercase: true,
    trim: true,
  },

  twitterUser: {
    type: String,
    maxlength: 100,
    minlength: 3,
    required: true,
    unique: true,
  },

  service: {
    type: String,
    required: true,
  },

  postsNumber: {
    type: Number,
    maxlength: 100,
    required: true,
  },

  filter: {
    type: String,
    maxlength: 100,
    required: true,
  },

  queryKeyword: {
    type: String,
    maxlength: 100,
  },

  queryDate: {
    type: String,
    maxlength: 100,
  },

  isOfficial: {
    type: Boolean,
    required: true,
  },

  createdBy: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },

  brandColor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TwitterSources', TwitterSourceSchema);
