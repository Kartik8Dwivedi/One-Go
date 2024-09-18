import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaArrowCircleDown } from "react-icons/fa";
import TrainCard from "../../components/TrainCard";
import supabase from "../../utils/supabase";
import { trainDummy } from "../../dummy";
import { key } from "ionicons/icons";
import { useAppDispatch } from "../../redux/store";
import { updateJourney } from "../../redux/states/User";

const Home: React.FC=()=>{
    const [startingMode, setStartingMode]= useState("Train")
    const [trainFrom, setTrainFrom]= useState("")
    const [trainTo, setTrainTo]= useState("")
    const [trainDOJ, setTrainDOJ]= useState<any>()
    const [details,showDetails]=useState(false)
const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(updateJourney("rail2"))
      }, [])

    return (
        <IonPage>
            <div className="flex flex-col overflow-scroll">
                <div className="flex flex-col bg-primaryBlue h-auto p-2">
                    <h1 className="text-white text-sm font-semibold">Select Initial Mode</h1>
                    <h1 className="text-white text-sm font-semibold" onClick={async()=> await supabase.auth.signOut()}>Log Out</h1>
                   
                </div>
                <form className='w-full h-full' onSubmit={(e)=>e.preventDefault()} >
          <div className='flex flex-col bg-white rounded-t-xl p-2 space-y-2'>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='From' placeholder='From' onChange={(e)=>setTrainFrom(e.target.value)} value={trainFrom}></input>
          <FaArrowAltCircleDown className='self-center' color='#1656B7' size={20}/>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg' title='To' placeholder='To' onChange={(e)=>setTrainTo(e.target.value)} value={trainTo}></input>
          <input className='w-full h-auto p-2 border-primaryBlue border-[1px] rounded-lg text-primaryBlue' placeholder='Date Of Journey' type='' onFocus={(e)=>(e.target.type="date")} onChange={(e)=>setTrainDOJ(e.target.value)} value={trainDOJ}></input>
          <button className='w-32 h-10 bg-primaryBlue border-2 text-white rounded-lg p-1 self-center font-semibold' onClick={ ()=>{showDetails(true)} }>Show Options</button>
          </div>
         </form>

        {
            details ?
            <div className='p-2 bg-white space-y-2'>
         <div className="flex flex-row justify-between">
                    <h1 className={`text-[15px] ${startingMode=="Train" ? 'text-black underline font-semibold': 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Train")}} >TRAIN</h1>    
                    <h1 className={`text-[15px] ${startingMode=="Cab" ? 'text-black underline font-semibold': 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Cab")}}>CABS</h1>                    

                    <h1 className={`text-[15px] ${startingMode=="Bus" ? 'text-black underline font-semibold' : 'text-gray-600 font-semibold'}`} onClick={()=>{setStartingMode("Bus")}}>BUS</h1>                    

                        </div>
            
        
        <div>
{trainDummy.map((data:any)=>{
                
                return(
                    
                    <TrainCard data={data} key={data.key} urlTo="/custom/secondJourney"/>
                )
            })}

        </div>
        
          
        </div>
            
            :
''

        }
         
            </div>
 

        </IonPage>
    )
}


export default Home;