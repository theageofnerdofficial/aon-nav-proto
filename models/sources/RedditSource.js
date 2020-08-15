// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const RedditSourceSchema = new Schema({
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

  subreddit: {
    type: String,
    maxlength: 100,
    minlength: 3, // Subreddits have a minimum of 3 characters
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

  period: {
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

module.exports = mongoose.model('RedditSources', RedditSourceSchema);
