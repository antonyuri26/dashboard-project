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
        if (
          action.payload === 'themes' ||
          action.payload === 'signin' ||
          action.payload === 'signout'
        ) {
          state.navChange = true;
          console.log(`true, ${action.payload}`);
          state.id = action.payload;
        } else {
          state.navChange = true;
          console.log(`false, $i{payload}`);
          state.id = action.payload;
        }
      }
    },
  },
});

const handSlice = createSlice({
  name: 'nav',
  initialState: { hand: false },
  reducers: {
    navChange(state, action) {
      state.hand = !state.hand;
      state.id = action.payload;
    },
  },
});
const store = configureStore({
  reducer: { auth: authSlice.reducer, nav: navSlice.reducer },
});

export const authActions = authSlice.actions;
export const navActions = navSlice.actions;
// export const handActions = handSlice.actions;
export default store;
