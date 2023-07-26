import { createSlice } from "@reduxjs/toolkit";

const initalState = [];
const endpoint = "https://api.spacexdata.com/v3/rockets";

const fetchRockets = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

fetchRockets().then(data => console.log(data));

const rocketsSlice = createSlice({
    name: "rockets",
    initialState: initalState,
    reducers: {
        //reducers go here, below is only an example for adding a rocket;
    }
})

export default rocketsSlice.reducer;