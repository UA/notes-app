const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')
const { json } = require('body-parser')
const { nanoid } = require('nanoid')

dotenv.config({ path: './config.env' })

const app = express()

app.use(cors())
app.use(json())

let notes = []

app.get('/notes', (req, res) => {
    const searchQuery = req.query.searchQuery
    const filtered = notes.filter(
        (note) =>
            note.title.includes(searchQuery) ||
            note.description.includes(searchQuery)
    )

    res.send(searchQuery ? filtered : notes)
})

app.post('/notes', (req, res) => {
    const note = {
        id: nanoid(),
        title: req.body.title,
        description: req.body.description,
        colorIndex: req.body.colorIndex,
    }
    notes.push(note)
    return res.send(note)
})

app.patch('/notes/:id', (req, res) => {
    const id = req.params.id
    const index = notes.findIndex((note) => note.id == id)
    const title = req.body.title
    const description = req.body.description
    const colorIndex = req.body.colorIndex
    if (index > -1) {
        notes[index].title = title
        notes[index].description = description
        notes[index].colorIndex = colorIndex
    }
    return res.send(notes[index])
})

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    const index = notes.findIndex((todo) => todo.id == id)
    if (index > -1) {
        notes.splice(index, 1)
    }

    res.send(notes)
})

const PORT = 7000

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold))
