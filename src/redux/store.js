import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rockets/rocketsSlice.js";
// import { combineReducers } from "redux/our-folder/ourSlice.js"; we need to import reducres from our slices

const store = configureStore({
    reducer: {
        // we need to add our reducers here
    }
})

export default store;
