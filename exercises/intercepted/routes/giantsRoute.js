const express = require('express')
const giantsRouter = express.Router()

const data = [
    {
        name: "Eli Manning",
        interceptions: 10000
    }
]

giantsRouter.route('/')
    .get((req, res) => {
        res.send(data)
    })

module.exports = giantsRouter