// Path: src/redux/missions/missionsSlice.js

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

export const fetchMissions = createAsyncThunk("missions/fetchMissions", fetchMissionsAsync);

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.id === missionId) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
      state.missions = updatedMissions;
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => {
        if (mission.id === missionId) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });
      state.missions = updatedMissions;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const allMissions = action.payload; 
      const firstFiveMissions = allMissions.slice(0, 5);

      const simplifiedMissions = firstFiveMissions.map((mission, index) => {
        return {
          id: index,
          name: mission.mission_name,
          description: mission.description,
          reserved: false,
        };
      });
      state.missions = simplifiedMissions;
    });
  },
});


export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
