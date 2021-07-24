import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    roomId: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    roomSelected: (state,action) => {
    state.roomId = action.payload.roomId;
    },
  },
  
});

export const { roomSelected } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
