import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
