import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
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
    [register.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [logIn.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [logIn.pending]: handlePending,
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
    [logOut.pending]: handlePending,
    [logOut.rejected]: handleRejected,
    [refreshUser.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user = action.payload;
    },
    [refreshUser.pending]: handlePending,
    [refreshUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
