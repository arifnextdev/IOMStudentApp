const express = require('express')
const Schedule = require('./src/models/schedule')
const router = express.Router()

router.post('/shedule',async (req,res)=>{
    const shedule = await Schedule.create({...req.body})
    res.json({message:"Shedule Successfully Created"})
})

module.exports = router