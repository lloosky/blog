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
module.exports = router