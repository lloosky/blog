const express = require('express')
const router = express.Router()
const { User, validateUser } = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "48cecd2902da11",
        pass: "38cc7e867a2a23"
    }
});

//creating new User
router.post('/', async (req, res) => {
    try {
        const { error } = validateUser(req.body)
        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            res.status(400).send('User already exist')
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        const token = jwt.sign({ _id: user._id }, 'jwtPrivateKey')
        res.header('x-auth-token', token).status(200).send({user: user, message: 'New user has been added'})

        //send email to new user
        var mailOptions = {
            from: 'noreply@socialapp.com',
            to: req.body.email,
            subject: 'Register new user in SocialApp',
            text: `Hi ${req.body.name} !`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    } catch (err) {
        console.log('Error', err)
    }
})
module.exports = router
