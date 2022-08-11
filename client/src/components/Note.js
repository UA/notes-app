import React from 'react'
import { useDispatch } from 'react-redux'
import { colors } from '../redux/notes/notesSlice'
import { removeNoteAsync } from '../redux/notes/services'

function Note({ id, title, description, colorIndex }) {
    const dispatch = useDispatch()

    const handleRemoveNote = async (id) => {
        if (window.confirm('Are you sure?')) {
            await dispatch(removeNoteAsync(id))
        }
    }

    return (
        <div
            className={`${colors[colorIndex]} card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200`}
        >
            <div className="m-3">
                <span
                    className="text-sm text-stone-50 font-mono inline rounded-full px-2 align-top float-right hover:text-stone-300 ml-1"
                    onClick={() => handleRemoveNote(id)}
                >
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </span>
                {/* <span className="text-sm text-stone-50 font-mono inline rounded-full px-2 align-top float-right hover:text-stone-300">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                </span> */}
                <h2 className="text-lg mb-2">{title}</h2>
                <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Note
