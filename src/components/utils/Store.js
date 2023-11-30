import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import SearchSlice from "./SearchSlice";
import Chatslice from "./Chatslice";

const Store=configureStore({
    reducer:{
        app:Appslice,
        search:SearchSlice,
        chat:Chatslice,
    },
});

export default Store;