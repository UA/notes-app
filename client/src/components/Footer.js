import React from 'react'

function Footer() {
    return (
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a href="http://ugurayaz.com/" className="text-indigo-500">
                ugurayaz.com
            </a>
            <p className="leading-normal my-5">
                Developed by
                <br />
                Uğur Ayaz
            </p>
            <span className="inline-flex">
                <a
                    href="https://www.linkedin.com/in/ugurayaz23/"
                    className="text-gray-500"
                >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a
                    href="https://twitter.com/23ugurayaz"
                    className="ml-4 text-gray-500"
                >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/ugurayaz23/"
                    className="ml-4 text-gray-500"
                >
                    <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 448 512"
                    >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                </a>
            </span>
        </div>
    )
}

export default Footer
