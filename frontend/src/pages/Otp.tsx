import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { useDispatch } from "react-redux";
import { updateOtpVerified } from "../redux/states/User";


const Otp :React.FC=()=>{
const reauth=async()=>{
    await supabase.auth.reauthenticate();

}

const [otp, setOtp]= useState<any>()
const dispatch=useDispatch()
useEffect(()=>{
    reauth()
},[])

    return(
       
            <div className="flex flex-col  w-full p-4 items-center justify-center h-full bg-">
                {/* <h1>hey</h1> */}
                <input type="number" className="w-full border-2 border-gray-400 rounded-lg" onChange={(e)=>setOtp(e.target.value)}>
                </input>
                <button className=" text-primaryBlue font-semibold text-sm h-12 items-center justify-center" onClick={async()=>{
                    const {data, error}=await supabase.auth.verifyOtp({
                        type:'email',
                        token:otp,
                        email:''
                    })
                    // dispatch(updateOtpVerified(true))
                    console.log(data,error)
                }}>
                    <h1>Verify OTP</h1>
                </button>
            </div>
       
    )
}

export default Otp

