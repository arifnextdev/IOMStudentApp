const mongoose = require('mongoose')


const Schedule = new mongoose.Schema({
    shedule:[
        {
            type:String,
            required:true
        }
    ],
    classLink:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Schedule', Schedule)