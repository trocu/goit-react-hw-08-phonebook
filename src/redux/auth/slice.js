import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const handleLoginRegisterFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: {
    [register.fulfilled]: handleLoginRegisterFulfilled,
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [logIn.fulfilled]: handleLoginRegisterFulfilled,
    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.error = null;
    },
    [logOut.pending]: handlePending,
    [logOut.rejected]: handleRejected,
    [refreshUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload;
      state.error = null;
    },
    [refreshUser.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
