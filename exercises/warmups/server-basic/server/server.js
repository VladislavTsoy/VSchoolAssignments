const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const teamRoutes = require('./routes/teamRoutes')

app.use(bodyParser.json())
app.use('/teams', teamRoutes)

app.listen(5000, ()=> {
    console.log('server 5000 up.')
})