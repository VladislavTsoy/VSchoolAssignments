const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5555
const giantsRoute = require('./routes/giantsRoute')

app.use(bodyParser.json())

app.use('/home', (req, res, next) => {
    console.log('I am middleware')
    next()
})

app.use('/home', giantsRoute)

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}.`)
})