// requirements
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const expressJwt = require('express-jwt');
const server = express();
const cors = require('cors')
require('dotenv').config()

// global variables
const PORT = 7000 || process.env.PORT

// middleware
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASS}@ds133597.mlab.com:33597/portfolio-projects`, { useNewUrlParser: true })
    .then(() => console.log('connected to portfolio database'))
    .catch(err => console.log(err))

server.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}`)
})