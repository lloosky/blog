const express = require('express');
const multer = require("multer");
const router = express.Router()
const {
  User
} = require('../models/user')
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Incorrect file");
    error.code = "INCORRECT_FILETYPE";
    return cb(error, false)
  }
  cb(null, true);
}
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({
  storage
})
router.post('/', upload.single('file'), async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.body.userID
    })
    user.posts.push({
      userID: req.body.userID,
      postID: req.body.postID,
      postIMG: req.file.originalname,
      post: {
        title: req.body.title,
        body: req.body.body,
        author: user.name,
        date: req.body.date,
        tags: req.body.tags,
        comments: [],
        likes: []
      }
    })
    res.sendStatus(200)
    await user.save()
  } catch (e) {
    console.log(e)
  }
});
module.exports = router