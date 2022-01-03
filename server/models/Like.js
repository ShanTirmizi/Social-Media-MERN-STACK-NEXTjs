const mongoose = require('mongoose');

// Create a like schema
const LikeSchema = mongoose.Schema({
  userID: {
    type: Object,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  like: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// export module
module.exports = mongoose.model('Like', LikeSchema);
