import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedColor } from '../redux/notes/notesSlice'

function ColorPalette() {
    const dispatch = useDispatch()
    const selectedColor = Number(
        useSelector((state) => state.notes.selectedColor)
    )

    useEffect(() => {
        localStorage.setItem('selectedColor', selectedColor)
    }, [selectedColor])
    return (
        <div className="flex items-center justify-center">
            <div className="inline-flex" role="group">
                <button
                    type="button"
                    className="flex align-center justify-center items-center m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-red-400 focus:bg-red-400 focus:z-10"
                    onClick={() => dispatch(changeSelectedColor(0))}
                >
                    {selectedColor === 0 ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        ''
                    )}
                </button>
                <button
                    type="button"
                    className="flex align-center justify-center items-center  m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-purple-500 focus:bg-purple-500 focus:z-10"
                    onClick={() => dispatch(changeSelectedColor(1))}
                >
                    {selectedColor === 1 ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        ''
                    )}
                </button>
                <button
                    type="button"
                    className="flex align-center justify-center items-center  m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-yellow-400 focus:bg-yellow-400 focus:z-10"
                    onClick={() => dispatch(changeSelectedColor(2))}
                >
                    {selectedColor === 2 ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        ''
                    )}
                </button>
                <button
                    type="button"
                    className="flex align-center justify-center items-center  m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-cyan-300 focus:bg-cyan-300 focus:z-10"
                    onClick={() => dispatch(changeSelectedColor(3))}
                >
                    {selectedColor === 3 ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        ''
                    )}
                </button>
                <button
                    type="button"
                    className="flex align-center justify-center items-center  m-0.5 h-8 w-8 text-sm font-medium rounded-full text-slate-700 bg-green-400 focus:bg-green-400 focus:z-10"
                    onClick={() => dispatch(changeSelectedColor(4))}
                >
                    {selectedColor === 4 ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        ''
                    )}
                </button>
            </div>
        </div>
    )
}

export default ColorPalette
