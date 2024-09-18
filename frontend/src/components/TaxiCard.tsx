import React from "react";
import { useHistory } from "react-router";

import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useIonRouter } from "@ionic/react";
import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa6";
// import car from '../../assets/images/car.png'




const TaxiCard: React.FC<{data:any, urlTo: string}> = ({data,urlTo}) => { 

   const history= useHistory();
   const router=useIonRouter()
  return <div className=" relative flex flex-col justify-start bg-white px-2 pb-2 border-2 border-gray-200 h-auto">

<div className="flex flex-row justify-between items-center">
<div className="flex flex-col h-auto -space-y-2  justify-center">
        <h1 className="text-gray-400 text-sm">{data.travel}</h1>
        <h1 className="text-black font-semibold text-sm">{data.car}</h1>
       
     </div>
     <div className="bg-green-400 text-white text-xs font-semibold mt-4  p-1 rounded-lg">EV Vehicle</div>
    {/* <Link to ="/home/secondJourney">
    
    </Link> */}
    <button className="border-solid border p-[4px] rounded-xl border-primaryBlue text-sm text-primaryBlue" onClick={(e)=>{
      e.preventDefault()
    //  history.push("/secondJourney")
    //  history.go(0)

   // router.push("/secondJourney", "forward", "push")

   window.location.href=urlTo

     }}>Select Taxi</button>
</div>
    
     <div className="flex flex-row h-auto justify-evenly items-center space-x-3">
      <img className="h-10 w-20"/>
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{data.departTime}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.depart}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.from}</h1>
        </div>
        {/* <HiMiniArrowLongRight size={30}/> */}
        <div className="flex flex-col ">
        <h1 className="text-gray-400 text-sm">{data.arrivalTime}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.arrival}</h1>
        <h1 className="text-black font-semibold text-[10px] -mt-[10px]">{data.to}</h1>
        <h1 className="text-green-400 font-semibold text-[10px] -mt-[10px]">Expected Time</h1>
        </div>
        <div className="flex flex-col">
        <h1 className="text-black text-sm ">Price:</h1>
        <h1 className="text-green-400 text-sm -mt-4"> {data.price}</h1>
 

        
        </div>
     </div>
    <div className="flex flex-col -space-y-2">
     <h1 className="text-green-400 text-[16px]">Total Fare: {data.fare}</h1>
     <h1 className="text-green-400 text-[16px]">CO2 Emission: {data.CO2} gm /Km</h1>
    </div>
   
  </div>;
};

export default TaxiCard