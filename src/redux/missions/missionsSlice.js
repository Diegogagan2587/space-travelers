import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://api.spacexdata.com/v3/missions";

const initialState = {
  missions: [],
};


const fetchMissionsAsync = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
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

