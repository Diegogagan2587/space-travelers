import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rockets/rocketsSlice";
// import { combineReducers } from "redux/our-folder/ourSlice.js"; we need to import reducres from our slices
import missionsReducer from "./missions/missionsSlice.js";

const store = configureStore({
    reducer: {
        // we need to add our reducers here
        missions: missionsReducer,
        rockets: rocketsReducer,
    }
})

export default store;
