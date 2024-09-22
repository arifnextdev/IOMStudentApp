const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Shedule = require('./src/models/schedule')
const Group = require('./src/models/groups')
const Note = require('./src/models/notes')
const PrevClass = require('./src/models/prevClass')
const PrevSemester = require('./src/models/PrevSemester')



//APP 
const app = express()
const router = express.Router()


//Middelware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server Is Running')
})

app.post('/api/v1/shedule',async (req,res)=>{
    const shedule = await Shedule.create({...req.body})
    res.json({message:"Shedule Successfully Created"})
})

app.get('/api/v1/shedules',async (req,res)=>{
    const shedules = await Shedule.find({});
    res.status(200).json(shedules)
})

app.post('/api/v1/group',async(req,res)=>{
    const group = await Group.create({...req.body})
    res.status(200).json({message:'Group Successfully Created', group})
})

app.get('/api/v1/groups',async(req,res)=>{
    const groups = await Group.find({})
    res.status(200).json(groups)
})

app.post('/api/v1/note',async (req,res)=>{
    const note = await Note.create({...req.body})
    res.status(201).json({message:"Note Successfully Created",note})
})

app.get('/api/v1/notes',async (req,res)=>{
    const notes = await Note.find({})

    res.status(200).json(notes)
})

app.post('/api/v1/prevclass',async (req,res)=>{
    const prevclass = await PrevClass.create({...req.body})
    res.status(201).json({message:'PrevClass Created Successfully',prevclass})
})

app.get('/api/v1/prevclasses',async (req,res)=>{
    const prevclasses = await PrevClass.find({})
    res.status(200).json(prevclasses)
})

app.post('/api/v1/prevsemester',async (req,res)=>{
    const prebSemester = await PrevSemester.create({...req.body})
    res.status(200).json({message:"PrevSemester Successfully Create",prebSemester})
})

app.get('/api/v1/prevSemesters',async (req,res)=>{
    const prevSemesters = await PrevSemester.find({})
    res.status(200).json(prevSemesters)
})

const PORT = 4000;
const URI = process.env.MONGODB_URI


mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Running on PORT ${PORT}`)
    })
}).catch((err)=>{
    console.log(err)
})



module.exports = app;