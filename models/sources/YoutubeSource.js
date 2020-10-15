// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const YoutubeSourceSchema = new Schema({
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

  youtubeUser: {
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

  videosNumber: {
    type: Number,
    maxlength: 100,
    required: true,
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

  muted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('YoutubeSources', YoutubeSourceSchema);
