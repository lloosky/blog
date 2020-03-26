const express = require('express')
const router = express.Router()
const { User, validateUser } = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Joi = require('joi')

//login
router.post('/', async (req, res) => {
    try {
        const { error } = validation(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).send('Invalid email or password')
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(400).send('Invalid email or password')
        }
        const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey')
        res.send({token: token, user: user}).status(200)
    } catch (err) {
        console.log('Error', err)
    }
})
function validation(req) {
    const schema = {
        email: Joi.string().required().email(),
        password: Joi.string().required()
    }
    return Joi.validate(req, schema)
}
module.exports = router