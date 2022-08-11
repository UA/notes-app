import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/notes/notesSlice'

function Search() {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(search(query))
    }
    return (
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <div className="input-group relative flex items-stretch w-full mb-4">
                    <input
                        type="search"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        aria-describedby="button-addon2"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="btn px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-500  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="submit"
                        onClick={handleClick}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="search"
                            className="w-4"
                            role="img"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
