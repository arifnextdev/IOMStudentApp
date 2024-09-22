const mongoose = require('mongoose')

const Group = new mongoose.Schema({
    group:String,
    time:String,
    telegram:String,
    classLink:String
})

module.exports = mongoose.model('Group',Group)