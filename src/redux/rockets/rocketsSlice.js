import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const endpoint = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const getRockets = createAsyncThunk('rockets/getRockets', fetchRockets);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.splice(0, state.length, ...newState);
    },
    cancelReservation: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      state.splice(0, state.length, ...newState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = [];
      action.payload.forEach((rocket) => {
        const { id, rocket_name, rocket_type, flickr_images, description } =
          rocket;
        newState.push({
          id,
          rocket_name,
          rocket_type,
          flickr_images,
          description,
        });
      });
      state.splice(0, state.length, ...newState);
    });
  },
});

export { getRockets };
export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
