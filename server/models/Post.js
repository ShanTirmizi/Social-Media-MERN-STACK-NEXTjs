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
    // like count
    likesCount: {
      type: Number,
      default: 0,
    },
    // add likes

    likes: [
      {
        // userID: {
        //   type: Object,
        //   required: true,
        // },
        // like: {
        //   type: Boolean,
        //   required: true,
        // },
        type: Object,
        ref: 'Like',
      },
    ],
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
