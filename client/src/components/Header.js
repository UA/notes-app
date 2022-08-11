import React from 'react'

function Header() {
    return (
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Notes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                This project is the first assignment of the patika.dev course.
            </p>
        </div>
    )
}

export default Header
