import { useState } from "react";
import Card from '../components/card'

import newData from "../Data";
import { IoMdRefresh } from "react-icons/io";
import Searchbar from '../components/Searchbar'

const Home = () => {
    const [data, setData] = useState(newData);
    const removeCard = (id) => {
        const new_data = data.filter((d) => d.id !== id);
        setData(new_data);
    };

    const refreshCard = () => {
        setData(newData)
    }

    if (data.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center flex-col" onClick={refreshCard}>
                <h2 className="text-2xl font-bold mb-4">
                    No Tours a Available
                </h2>
                <div className="px-6 py-2 flex items-center justify-center space-x-1 bg-gray-500 text-white shadow-md hover:bg-gray-400 rounded-md cursor-pointer">
                    <button>Refresh</button>
                    <IoMdRefresh />
                </div>
            </div>
        );
    }



    return (
        <div className="min-w-screen min-h-screen flex-col flex items-center justify-center space-y-10 py-[60px] bg-[#F5F5F5]">
            <Searchbar data={data} setData={setData} />
            <div className="grid grid-cols-3 gap-10">
                {data.map((d) =>
                    <Card d={d} removeCard={removeCard} key={d.id} />
                )}
            </div>
        </div>
    )
};

export default Home;






