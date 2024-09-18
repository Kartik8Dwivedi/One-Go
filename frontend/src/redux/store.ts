import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// import selectedTrainReducer from './states/selectedTrain'
import userReducer from './states/User'
import journeyReducer from './states/journey'
// import journey from "./states/journey";

export const store=configureStore({
    reducer:{
        // selectedTrain: selectedTrainReducer,
        user: userReducer,
        journey: journeyReducer,
        
        }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const getUserId= (state: RootState)=>state.user.uid
export const getOtpVerified=(state:RootState)=>state.user.otpVerified

export const getJourney= (state: RootState)=>state.user.journey

