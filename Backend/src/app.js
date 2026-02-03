const express = require("express");
const noteModel = require('./models/notes.model')
const cors = require('cors');
// const path = require('path')

const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('./public'))
// this middleware make public folder file available to the browser, so they can be rendered rather than returning html file and if there is no matching file available then the request is forwarded to the wild card api

app.post('/api/notes', async (req, res)=>{
    const {title, description} = req.body;
    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: 'note created!!',
        note
    })
})

app.get('/api/notes', async (req, res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message: 'fetched all notes',
        notes
    })
})

app.delete('/api/notes/:id', async (req, res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: 'note deleted successfully' // when we use status(204) we don't get any message
    })
})

app.patch('/api/notes/:id', async (req, res)=>{
    const id = req.params.id;
    const { description } = req.body;

    await noteModel.findByIdAndUpdate(id, { description });

    res.status(200).json({
        message: 'updated the note'
    })
})

// app.use("*name",(req, res)=>{
//     res.sendFile(path.join(__dirname, "..", "/public/index.html"))
// })
// we are not using this because right now we dont need this at the moment we will use it in the future

// "*name" it is called wild card api in which the user hits the api which we didn't created then it will handle that request like "http://localhost:3000/"

// __dirname -> it gets you the path from root user to that folder where your file or __dirname is present then we used ".." to go back and then "/public/index.html" to go to that index file which we want to render

module.exports = app