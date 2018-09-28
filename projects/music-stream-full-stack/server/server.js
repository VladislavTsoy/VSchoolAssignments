const express = require('express')
const graphQLHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 4000

// allows cross origin requests
app.use(cors()) 
// app.use(express.json())
// const morgan = require('morgan')
// app.use(morgan('dev'))
// app.use('/home', require('./routes/songRouter'))
// app.use('/home', require('./routes/artistRouter'))

mongoose.connect('mongodb://localhost:27017/music-stream-full-stack-db', {useNewUrlParser: true}, () => console.log('..now connected to "music-stream-full-steack-db".'))
    .catch(err => console.log(err))

app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT || process.env.PORT, () => {
    console.log('..server is now listening on port 4000.')
})