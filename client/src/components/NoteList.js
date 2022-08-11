import React from 'react'
import { useSelector } from 'react-redux'
import { selectNotes } from '../redux/notes/notesSlice'

import Loading from './Loading'
import Note from './Note'

function NoteList() {
    const notes = useSelector(selectNotes)
    const isLoading = useSelector((state) => state.notes.isLoading)

    if (isLoading) return <Loading />

    return (
        <div className="container mt-4 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        description={note.description}
                        colorIndex={note.colorIndex}
                    />
                ))}
            </div>
        </div>
    )
}

export default NoteList
