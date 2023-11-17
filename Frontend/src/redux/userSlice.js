import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },
        msg: "",
    },
    reducers:{
        //Get All Users
        getUsersStart: (state) => {
            state.users.isFetching = true;
        },
        getUsersSusscess: (state,action) => {
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
        },
        getUsersFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
        //Delete User
        deleteUserStart: (state) => {
            state.users.isFetching = true;
        },
        deleteUserSusscess: (state,action) => {
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deleteUserFailed: (state,action) => {
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
        
    }
});

export const {
    getUsersStart,
    getUsersFailed,
    getUsersSusscess,
    deleteUserStart,
    deleteUserSusscess,
    deleteUserFailed
} = userSlice.actions;

export default userSlice.reducer;