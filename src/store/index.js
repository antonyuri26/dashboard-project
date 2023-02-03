import { configureStore, createSlice } from '@reduxjs/toolkit';

let initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },

    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

let initialNavState = { navChange: false, id: '' };

const navSlice = createSlice({
  name: 'nav',
  initialState: initialNavState,
  reducers: {
    navChange(state, action) {
      if (action.payload === 'reset') {
        state.navChange = false;
      } else {
        state.navChange = true;
        state.id = action.payload;
      }
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, nav: navSlice.reducer },
});

export const authActions = authSlice.actions;
export const navActions = navSlice.actions;
export default store;
