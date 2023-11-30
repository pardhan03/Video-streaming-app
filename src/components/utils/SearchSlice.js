import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            // data = {"ip" : ["iphone", "iphone 12"]}
            // merge using spread operator
            // because here our data is in object so we have to merge that
            state=Object.assign(state,action.payload);
        }
    }  
})

export const{cacheResults}=searchSlice.actions;

export default searchSlice.reducer;