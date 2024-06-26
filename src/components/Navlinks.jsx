import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function Logolink() {
    return (
        <div className="flex items-center justify-center">
            <ul className="flex items-center justify-center space-x-5">
                <li className="hover:text-sky-400 cursor-pointer">Deals</li>
                <li className="hover:text-sky-400 cursor-pointer">Specials Tours</li>
                <li className="hover:text-sky-400 cursor-pointer">Experiences</li>
                <li className="hover:text-sky-400 cursor-pointer flex items-center justify-center space-x-3">
                    More
                    <RiArrowDropDownLine className='text-3xl' />

                </li>
            </ul>
        </div>
    )
}

export default Logolink
