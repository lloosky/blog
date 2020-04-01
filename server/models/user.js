const Joi = require('joi')
const mongoose = require('mongoose');
//user schema
const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  posts: {
    type: Array,
    required: true
  }
}))

function validateUser(user) {
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    img: Joi.string().required(),
    posts: Joi.file().required()
  }
  return Joi.validate(user, schema)
}
exports.User = User
exports.validateUser = validateUser