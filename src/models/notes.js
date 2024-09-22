const mongoose = require('mongoose')

const Note = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    notes:[
        {
            name:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('Note',Note)