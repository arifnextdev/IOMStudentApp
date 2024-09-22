const mongoose = require('mongoose')


const Schedule = new mongoose.Schema({
    shedule:{
        1:[
            {
                type:String,
            },
        ],
        2:[
            {
                type:String,
            },
        ],
        3:[
            {
                type:String,
            },
        ],
        4:[
            {
                type:String,
            },
        ],
        5:[
            {
                type:String,
            },
        ],
        6:[
            {
                type:String,
            },
        ],
        7:[
            {
                type:String,
            },
        ]
    },
    classLink:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Schedule', Schedule)