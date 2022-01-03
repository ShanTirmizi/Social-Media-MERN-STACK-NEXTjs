const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userID: {
      type: Object,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    comments: [
      {
        type: Object,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Posts', PostSchema);
