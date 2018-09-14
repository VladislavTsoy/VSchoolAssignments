const express = require("express")
const teamRoutes = express.Router()
const uuid = require("uuid")

const database = [
    {
        team: 'Eagles',
        location: 'Philadelphia',
        id: uuid()
    },
    {
        team: 'Giants',
        location: 'New York',
        id: uuid()
    }
]

teamRoutes.route('/')
    .get((req, res) => {
        res.send(database)
        console.log("GET REQUEST: status - OK")
    })
    .post((req, res) => {
        req.body.id = uuid()
        database.push(req.body)
        res.send(database)
        console.log("POST REQUEST: status - OK")
    })

module.exports = teamRoutes