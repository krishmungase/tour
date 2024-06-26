import React from 'react'
import Logolink from './Logolink'
import Navlinks from './Navlinks'
import Authlink from './Authlink'


function Header() {
    return (
        <div className="w-full flex items-center justify-between px-28 border-b border-gray-500 h-16">
            <div className='flex items-center mb-4 justify-center space-x-12'>
                <Logolink />
                <Navlinks />
            </div>
            <div className='flex items-center mb-4 justify-center space-x-12'>
                <Authlink />
            </div>
        </div>
    )
}

export default Header
