import React from 'react'
import Logo from './section/Logo'
import { Link } from 'react-router-dom'

function Logolink() {
    return (
        <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <Logo />
            <Link to="/" className="text-sky-400 text-lg">TRAVELEASE</Link>
        </div>
    )
}

export default Logolink
