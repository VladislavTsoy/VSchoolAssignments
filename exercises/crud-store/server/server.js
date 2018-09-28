const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(express.json())


app.use('/products', require('./routes/productRouter'))

mongoose.connect('mongodb://localhost:27017/crud-store-db', { useNewUrlParser: true})
    .then(() => console.log('Successfully connected to CRUD Store DB'))
    .catch(err => console.log(err))

app.listen(6000, () => {
    console.log("CRUD Server is up on port 6000")
})