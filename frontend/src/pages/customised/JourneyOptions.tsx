import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaChevronCircleDown } from "react-icons/fa";
import TrainCardOptions from "../../components/TrainCardOptions";
import TrainCard from "../../components/TrainCard";
import TaxiCard from "../../components/TaxiCard";

import { trainDummy } from "../../dummy";
import { cabDummy } from "../../dummy";
const JourneyOptions: React.FC=()=>{
    const history=useHistory();
    const [showJourney, setShowJourney]=useState(false)
    const [selectedType, setSelectedType] =useState("Trains")

    console.log(showJourney)
    return(
        <div className="flex flex-col h-full">
            <div className="flex- flex-col bg-primaryBlue h-auto w-full rounded-b-xl ">
            <div className="flex flex-row h-auto w-full bg-primaryBlue justify-between p-2">
            <div className=" items-center">
              
            <h1 className=" text-white text-lg font-semibold" onClick={()=>{history.goBack()}}>{'<'}</h1>
            </div>
            <div className=" flex flex-col items-center w-full self-center">
            <h1 className="text-white text-sm font-semibold">Show My Journey</h1>
            <button onClick={()=>{setShowJourney(!showJourney)}} className="h-auto w-auto">
            <FaChevronCircleDown color="white" />
            </button>
          
            </div>
            
            </div>
            {showJourney ? 
            <div className="h-auto w-full bg-white items-center justify-center flex">
            <div className="flex flex-col p-2 items-center -mt-4">
                <h1 className="text-sm font-semibold">Your Journey till Now:</h1>
                {/* <TrainCardOptions/> */}
                </div>
            </div>
            : ''}
            
            </div>
            <div className="flex flex-col justify-center border-solid border-t-2 border-b-2 border-gray-400">
                <h1 className="text-sm font-semibold text-primaryBlue self-center">Available Options For:</h1>
                <div className="flex flex-row justify-between p-2 -mt-6">
                    <div className="flex flex-col justify-center items-center space-y-0">
                        <h1 className="text-sm font-semibold">Delhi</h1>
                        <h1 className="text-sm font-semibold text-gray-400">09/03/2024</h1>
                        <h1 className="text-sm font-semibold text-gray-400">10.00 AM</h1>

                    </div>
                    <h1 className="text-sm font-semibold self-center">To</h1>
                    
                    <div className="flex flex-col justify-center items-center space-y-0">
                    <h1 className="text-sm font-semibold ">Nainital</h1>
                        <h1 className="text-sm font-semibold text-green-400">Outstation</h1>

                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between p-1 -mt-2">
                <h1 className={`${selectedType==="Trains" ? 'text-primaryBlue underline' :'text-gray-400 '} text-sm font-semibold`} onClick={()=>{setSelectedType("Trains")}}>TRAINS</h1>
                <h1 className={`${selectedType==="Taxi" ? 'text-primaryBlue underline' :'text-gray-400 '} text-sm font-semibold`} onClick={()=>{setSelectedType("Taxi")}}>TAXI</h1>
                <h1 className={`${selectedType==="Bus" ? 'text-primaryBlue underline' :'text-gray-400 '} text-sm font-semibold`} onClick={()=>{setSelectedType("Bus")}}>BUS</h1>
        
            </div>
            <div className="overflow-scroll h-full">
            {selectedType=="Trains" ?
            <div className="flex flex-col space-y-1 overflow-y-scroll">
                <TrainCard data={trainDummy[1]} urlTo="/custom/journeyDetails"/>
                {/* <TrainCard  data={trainDummy[0]}/>
                <TrainCard  data={trainDummy[0]}/> */}
            </div>
            : selectedType=="Taxi" ?
            
             <div className="flex flex-col h-full space-y-1 overflow-y-scroll overflow-scroll">
            <TaxiCard data={cabDummy[0]} urlTo="/custom/journeyDetails"/>
                {/* <TaxiCard/>
                <TaxiCard/> */}
                </div>
          
                


            :''}
           </div>
        </div>
    )
}

export default JourneyOptions;