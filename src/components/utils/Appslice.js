import { createSlice } from "@reduxjs/toolkit";

const Appslice=createSlice({
    name:"app",
    initialState:{
        isMenuopen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuopen=!state.isMenuopen;
        },
            closeMenu:(state)=>{
                state.isMenuopen=false;
        }
    }
})

export const{toggleMenu, closeMenu}=Appslice.actions;
export default Appslice.reducer;