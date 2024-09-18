import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IUser{
    uid: null| any[],
    otpVerified: boolean
    journey: string
}

const initialState={
   uid: [],
   otpVerified:false,
   journey:''
} as IUser

const UserSlice= createSlice({
    name: "User",
    initialState,
    reducers:{
        updateUID:(state,action)=>{
        state.uid=(action.payload)   //data json me dena as action+-
        },
        updateOtpVerified:(state,action)=>{
            state.otpVerified=action.payload
        },
        updateJourney:(state,action)=>{
            state.journey=action.payload
        },
        resetUID: (state)=>{
           state.uid = []
           state.otpVerified=false
        }
    }
})

export const {updateUID,resetUID,updateOtpVerified,updateJourney}= UserSlice.actions;
export default UserSlice.reducer