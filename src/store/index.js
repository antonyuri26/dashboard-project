import { configureStore, createSlice } from '@reduxjs/toolkit';

let initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
      console.log(state.isAuthenticated);
    },

    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

let initialNavState = { navChange: false, backToDashOn: false, id: '' };

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

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    isProfileOpen: false,
    isOpenNews: false,
    id: '',
  },
  reducers: {
    modalHandler(state, action) {
      if (action.payload === 'table') {
        state.isOpen = !state.isOpen;
      }
      if (action.payload === 'profile') {
        state.isProfileOpen = !state.isProfileOpen;
      }
      if (action.payload === 'newsletter') {
        state.isOpenNews = !state.isOpenNews;
      }
      if (action.payload === 'reset') {
        state.isOpen = false;
        state.isProfileOpen = false;
        state.isOpenNews = false;
      }
    },
  },
});

const sideNavSlice = createSlice({
  name: 'sidenav',
  initialState: {
    isBillingOn: false,
    isSettingOn: false,
    id: '',
  },
  reducers: {
    sideNavHandler(state, action) {
      if (action.payload === 'billing') {
        state.isSettingOn = false;
        state.isBillingOn = !state.isBillingOn;
      }
      if (action.payload === 'settings') {
        state.isBillingOn = false;
        state.isSettingOn = !state.isSettingOn;
      }
      if (action.payload === 'dashboard') {
        state.isBillingOn = false;
        state.isSettingOn = false;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nav: navSlice.reducer,
    modal: modalSlice.reducer,
    sidnav: sideNavSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const navActions = navSlice.actions;
export const modalActions = modalSlice.actions;
export const sideNavActions = sideNavSlice.actions;
export default store;
