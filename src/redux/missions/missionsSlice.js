import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "https://api.spacexdata.com/v3/missions";

const initialState = {
  missions: [],
};

// const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
//   const response = await axios.get(URL);
//   const data = await response.json();
//   console.log(data);
//   return data;
// });

const fetchMissionsAsync = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const fetchMissions = createAsyncThunk("missions/fetchMissions", fetchMissionsAsync);


const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export default missionsSlice.reducer;
export { fetchMissions };

