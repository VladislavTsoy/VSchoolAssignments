const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const PORT = 7000
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/bounty', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-db', {useNewUrlParser: true})
    .then(() => console.log('Successfully connected to MongoDB server'))
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Web Server Live: port ${PORT}`)
}) 