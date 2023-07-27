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
      const allMissions = action.payload; 
      const firstFiveMissions = allMissions.slice(0, 5);
      
      const simplifiedMissions = firstFiveMissions.map((mission) => {
        return {
          name: mission.mission_name,
          description: mission.description,
          status: false,
        };
      });

      state.missions = simplifiedMissions;
    });
  },
});



export default missionsSlice.reducer;
export { fetchMissions };

