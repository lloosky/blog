const express = require('express')
const { User } = require('../models/user')
const router = express.Router()

//getting User Info
router.post('/', async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.body.id })
        res.status(200).send(user)
    } catch (err) {
        console.log('Error', err)
    }
})
module.exports = router