const express = require("express");
const noteModel = require('./models/notes.model')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

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

module.exports = app