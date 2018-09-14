const mongoose = require('mongoose')

const bountiesSchema = new mongoose.Schema({
    first: String,
    last: String,
    isALive: Boolean,
    bounty: Number,
    type: String,
    avatar: String
})

module.exports = mongoose.model("Bounties", bountiesSchema)