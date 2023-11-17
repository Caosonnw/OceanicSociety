import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login:{
            currentUser: null,
            isFetching: false,
            error: false
        },
        register:{
            isFetching: false,
            error: false,
            susscess: false
        },
    },
    reducers:{
        //Login
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSusscess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        //Register
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSusscess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.susscess = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.susscess = false;
        },
        //Logout
        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSusscess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    }
});

export const {
    loginStart,
    loginFailed,
    loginSusscess,
    registerStart,
    registerFailed,
    registerSusscess,
    logoutStart,
    logoutFailed,
    logoutSusscess
} = authSlice.actions;

export default authSlice.reducer;