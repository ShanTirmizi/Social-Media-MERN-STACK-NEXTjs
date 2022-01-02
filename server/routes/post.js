const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  //   res.send('Posts');
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body, 'post');

  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    userID: req.body.userID,
  });
  // console.log(post);
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json(error);
  }
  //   post
  //     .save()
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
});

//Specific Post
router.get('/:Id', async (req, res) => {
  // console.log(req.params.id);
  try {
    const postId = await Post.findById(req.params.Id);
    res.json(postId);
  } catch (error) {
    res.json(error);
  }
});

// Delete Post
router.delete('/:Id', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.Id });
    res.json(removedPost);
  } catch (error) {
    res.json(error);
  }
});

// Update Post
router.patch('/:Id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.Id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
