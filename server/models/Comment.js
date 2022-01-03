const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  //   userID: {
  //     type: Object,
  //     required: true,
  //   },
  date: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Comments', CommentSchema);
