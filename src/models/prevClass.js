const mongoose = require('mongoose')

const PrevClass = new mongoose.Schema({
    subject:{
        type:String,
        required:true,
    },
    records:[
        {
            title:{
                type:String,
                requried:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    ]
})

module.exports = mongoose.model("PrevClass",PrevClass)