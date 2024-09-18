
import React from "react"
import { FaTrain } from "react-icons/fa"
import { HiMiniArrowLongRight } from "react-icons/hi2"

const TrainCardOptions: React.FC<{data:any}>=({data})=>{
    return (
        <div>
<div className="flex flex-row justify-center">
                    <h1 className="text-sm font-semibold">{data.trainNo}:{data.name}</h1>
                  
                </div>
                <div className="flex flex-row h-auto justify-evenly items-center w-full -mt-6">
                <FaTrain size={26}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{data.departTime}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.depart}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.from}</h1>
        </div>
        <HiMiniArrowLongRight size={30}/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{data.arrivalTime}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.arrival}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.to}</h1>
        </div>
     </div>
        </div>
    )
}


export default TrainCardOptions




