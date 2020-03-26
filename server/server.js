const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//routes
const register = require('./routes/register')
const login = require('./routes/login')
const user = require('./routes/user')

//database connection
mongoose.connect('mongodb://localhost/rest', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database error', err))


app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

//routes
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/user', user)


//express connection
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})