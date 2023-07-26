import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = "https://api.spacexdata.com/v3/missions";

const initialState = {
  missions: [],
};

const fetchData = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(URL);
  const data = await response.json();
  return data;
});

const getMissions = createSlice({
  name: "missions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export default getMissions.reducer;

