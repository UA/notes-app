import React, { useEffect } from 'react'
import Footer from './Footer'
import Form from './Form'
import NoteList from './NoteList'
import { getNotesAsync } from '../redux/notes/services'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'

function Section() {
    const dispatch = useDispatch()
    const searchQuery = useSelector((state) => state.notes.searchQuery)

    useEffect(() => {
        dispatch(getNotesAsync({ searchQuery }))
    }, [dispatch, searchQuery])

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-16 mx-auto">
                <Header />
                <Form />
                <NoteList />
                <Footer />
            </div>
        </section>
    )
}

export default Section
