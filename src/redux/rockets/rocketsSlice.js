import { createSlice } from "@reduxjs/toolkit";

const initalState = [];

const rocketsSlice = createSlice({
    name: "rockets",
    initialState: initalState,
    reducers: {
        //reducers go here, below is only an example for adding a rocket;
        addRocket: (state, action) => {
            state.push(action.payload);
        }
    }
})