const express = require('express')
const {
  User
} = require('../models/user')
const router = express.Router()
//getting posts
router.get('/', async (req, res) => {
  try {
    let user = await User.find({
      posts: {
        $gt: []
      }
    })
    const allUserPosts = user.map(item => item.posts)
    const allPosts = []
    for (const el in allUserPosts) {
      allPosts.push(...allUserPosts[el])
    }
    res.status(200).send(allPosts)
  } catch (err) {
    console.log('Error', err)
  }
})
//deleting a post
router.delete('/:id', async (req, res) => {
  const post = await User.updateOne({
    "posts.postID": req.params.id
  }, {
    $pull: {
      "posts": {
        "postID": req.params.id
      }
    }
  })
  if (!post) return res.status(404).send('The post id was not found')
  res.send(post)
})
// update post
router.put('/:id', async (req, res) => {
  try {
    const singlePost = await User.updateOne({
      "posts.postID": req.params.id
    }, {
      "posts.$.post.title": req.body.title,
      "posts.$.post.body": req.body.content
    }, {
      new: true
    })
    if (!singlePost) return res.status(404).send('The post id was not found')
    res.send(singlePost)
  } catch (e) {
    console.log(e)
  }
})
// add comment to single post
router.post('/comment/:id', async (req, res) => {
  try {
    const singlePost = await User.updateOne({
      "posts.postID": req.params.id
    }, {
      $push: {
        "posts.$.post.comments": {
          author: req.body.author,
          comment: req.body.comment
        }
      }
    })
    if (!singlePost) return res.status(404).send('The post id was not found')
    res.send(singlePost)
  } catch (e) {
    console.log(e)
  }
})
module.exports = router
