import React from 'react'
import { Link } from 'react-router-dom'

function Authlink() {
    return (
        <div className="flex items-center justify-center space-x-3">

            <Link to='/signup' className="bg-blue-700 text-white px-4 py-1 mb-1 h-10 text-sm rounded-md shadow-lg hover:bg-blue-500">
                Sign Up
            </Link>

            <button className="flex items-center justify-center gap-1 h-10 border border-blue-700 text-sm px-4 py-1 mb-1 rounded-md shadow-md">
                Login
                <i class="fa-solid fa-right-to-bracket"></i>
            </button>
        </div>
    )
}

export default Authlink
