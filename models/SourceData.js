// Imports:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Schema:
const SourceDataSchema = new Schema({
  data: {
    type: String,
    required: 'Source data required',
    //maxlength: 10000,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SourceData', SourceDataSchema);
