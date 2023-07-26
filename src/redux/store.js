import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux/our-folder/ourSlice.js"; we need to import reducres from our slices
import getMissions from "./missions/missionsSlice.js";

const store = configureStore({
    reducer: {
        // we need to add our reducers here
        missions: getMissions,
    }
})

export default store;
