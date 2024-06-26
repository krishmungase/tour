import React, { useState } from "react";
import { BiDislike } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { CiBookmarkCheck } from "react-icons/ci";

const Card = ({ d, removeCard }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="h-full">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
                <div href="#" className="py-3 cursor-pointer">
                    <img
                        className="h-[200px] w-full object-cover px-3 "
                        src={d.image}
                        alt=""
                    />
                </div>
                <div className="p-5 flex items-center justify-between flex-col">
                    <div>
                        <div className="w-full flex items-center justify-between mb-2">
                            <p href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tigh text-gray-900">
                                    {d.name}
                                </h5>
                                <h3 className="text-lg font-bold text-green-600">{d.price}</h3>
                            </p>
                            <span onClick={() => setIsFavorite(prev => !prev)} className="cursor-pointer">
                                {isFavorite ? (
                                    <FcLike className="size-4 transition-all" />
                                ) : (
                                    <GrFavorite className="size-4 transition-all" />
                                )}
                            </span>
                        </div>
                        <div className="">
                            <p className="mb-3 font-normal text-gray-600 text-justify tracking-tighter">
                                {isReadMore ? d.info.substring(0, 200) + "..." : d.info + "..."}
                                <span
                                    href="#"
                                    className="text-blue-400 cursor-pointer"
                                    onClick={() => setIsReadMore(prev => !prev)}
                                >
                                    {isReadMore ? "Read more" : "Show less"}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="h-full w-full flex items-center justify-between">
                        <button className="flex items-center justify-center gap-2 mt-5 px-3 py-2 text-sm font-medium text-center text-green-500 bg-gray-100 shadow-md rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Book Now
                            <CiBookmarkCheck />
                        </button>
                        <button
                            onClick={() => removeCard(d.id)}
                            className="flex mt-5 px-3 py-2 text-sm font-medium text-center text-red-500 bg-gray-100 shadow-md rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Not Interested
                            <BiDislike className="text-lg ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
