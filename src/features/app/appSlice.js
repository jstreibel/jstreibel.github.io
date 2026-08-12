import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {},
});

export const selectAppState = (state) => state.app;

export default appSlice.reducer;
