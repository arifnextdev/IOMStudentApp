const mongoose = require('mongoose')

const PrevSemester = new mongoose.Schema({
    course:{
        type:String,
        require:true,
    },
    classes:[
        {
            type:String,
            required:true,
        }
    ],
    notes:[
        {
            type:String,
            required:true,
        }
    ]
})

module.exports = mongoose.model('PrevSemester',PrevSemester)