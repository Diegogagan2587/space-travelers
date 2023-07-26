import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from "./rockets/rocketsSlice";
// import { combineReducers } from "redux/our-folder/ourSlice.js"; we need to import reducres from our slices

const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
    }
})

export default store;
