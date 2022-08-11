import React, { useState } from 'react'
import ColorPalette from './ColorPalette'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteAsync } from '../redux/notes/services'

function Form() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.notes.isLoading)
    const selectedColor = useSelector((state) => state.notes.selectedColor)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title && !description) return
        await dispatch(
            addNoteAsync({ title, description, colorIndex: selectedColor })
        )
        setTitle('')
        setDescription('')
    }

    return (
        <form
            className="flex items-center w-full justify-center"
            onSubmit={handleSubmit}
        >
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                        <Search />
                        <div className="relative">
                            <label
                                htmlFor="title"
                                className="leading-7 text-sm text-gray-600"
                            ></label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                disabled={isLoading}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Title"
                            />
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                htmlFor="description"
                                className="leading-7 text-sm text-gray-600"
                            ></label>
                            <textarea
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                disabled={isLoading}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your note here..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="p-2 w-full flex justify-between">
                        <ColorPalette />
                        <button
                            type="submit"
                            className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form
