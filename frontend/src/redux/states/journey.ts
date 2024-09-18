import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// interface Journey{
//     type: String,
//     // journey:[]
// }

// interface JourneyState {
//     journeyArray: Journey[];
//   }
// const initialState= {
//    journeyArray:[]
// }  as JourneyState

interface Journey{
    type: string
}

const initialState={
    type:""
}


const journeySlice = createSlice({
    name: 'journeys',
    initialState,
    reducers: {
        addJourney: (state, action) => {
            console.log(action.payload)
            state.type= action.payload;
         
        },
        removeJourney: (state, action) => {
            // state.splice(action.payload, 1);
        },
    
        // Add other reducers as needed
    },
});

export const {addJourney,removeJourney}= journeySlice.actions;
export default journeySlice.reducer