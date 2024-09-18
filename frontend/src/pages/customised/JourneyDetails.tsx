import { IonPage } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import TrainCardOptions from "../../components/TrainCardOptions";
import { cabDummy, trainDummy } from "../../dummy";
import TaxiCard from "../../components/TaxiCard";

const JourneyDetails: React.FC=()=>{
    const history=useHistory()
    return(
        <IonPage>
            <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row h-auto w-full bg-primaryBlue justify-between p-2">
            <div className=" items-center">
              
            <h1 className=" text-white text-lg font-semibold" onClick={()=>{history.goBack()}}>{'<'}</h1>
            </div>
            <div className=" flex flex-col items-center w-full self-center">
            <h1 className="text-white text-sm font-semibold">My Journey</h1>

            
          
            </div>
            
            </div>
            <TrainCardOptions data={trainDummy[0]}/>
            <h1 className="text-xl text-black">+</h1>
            <TaxiCard data={cabDummy[0]} urlTo="/custom/journeyDetails"/>

            <div className="flex flex-col">
     <h1 className="text-text-lg text-green-400">Total Fare: 4500/-    </h1>

     <button className="text-white bg-primaryBlue rounded-xl p-2" onClick={()=>{
        window.location.href="/confirm"
     }}>Make Payment</button>
    </div>
            </div>


        </IonPage>
    )
}

export default JourneyDetails