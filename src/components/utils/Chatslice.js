import { createSlice } from "@reduxjs/toolkit";

const chatslice=createSlice({
    name:'chat',
    initialState:{
        message:[

        ]
    },
    reducers:{
        addMeassage:(state,action)=>{
            state.message.splice(10,1);
            state.message.push(action.payload);
        }
    }
})

export const{addMeassage}=chatslice.actions;

export default chatslice.reducer;