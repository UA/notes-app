import { createSlice } from '@reduxjs/toolkit'
import {
    addNoteAsync,
    getNotesAsync,
    removeNoteAsync,
    updateNoteAsync,
} from './services'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        selectedColor: localStorage.getItem('selectedColor'),
        searchQuery: '',
        isLoading: false,
        error: null,
    },
    reducers: {
        changeSelectedColor: (state, action) => {
            state.selectedColor = action.payload
        },
        search: (state, action) => {
            state.searchQuery = action.payload
        },
    },
    extraReducers: {
        //get notes
        [getNotesAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [getNotesAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getNotesAsync.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        },
        // add note
        [addNoteAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.isLoading = false
        },
        [addNoteAsync.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        },
        //update note
        [updateNoteAsync.fulfilled]: (state, action) => {
            const { id, completed } = action.payload
            const index = state.items.findIndex((item) => item.id === id)
            state.items[index].completed = completed
        },
        //remove note
        [removeNoteAsync.fulfilled]: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        },
    },
})

export const selectNotes = (state) => state.notes.items
export const { changeSelectedColor, search } = notesSlice.actions
export const colors = [
    'bg-red-400',
    'bg-purple-500',
    'bg-yellow-400',
    'bg-cyan-300',
    'bg-green-400',
]

export default notesSlice.reducer
