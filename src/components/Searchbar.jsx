import React, { useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import toursData from '../Data';

function Searchbar({ setData }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleOnClick = () => {
        if (searchQuery === "") setData(toursData);
        else {
            const newData = toursData.filter(d => {
                return d.name.toLowerCase().includes(searchQuery.toLowerCase())
            });
            setSearchQuery("");
            setData(newData);
        }
    }




    return (
        <div class="relative">
            <input value={searchQuery} type="text" placeholder="Search" class="input input-bordered px-3 w-66 rounded-l border border-blue-700 pr-10 h-9" onChange={(e) => setSearchQuery(e.target.value)} />
            <button class="absolute inset-y-0 flex items-center justify-center right-0 px-3 py-1 bg-blue-700 text-white rounded-r" onClick={handleOnClick}><FaSearchLocation /></button>
        </div>

    )
}

export default Searchbar;
