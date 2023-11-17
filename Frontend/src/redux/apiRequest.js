import axios from "axios";
import { loginFailed, loginStart, loginSusscess, logoutStart, logoutSusscess, registerFailed, registerStart, registerSusscess } from "./authSlice";
import { deleteUserFailed, deleteUserStart, deleteUserSusscess, getUsersFailed, getUsersStart, getUsersSusscess } from "./userSlice";

export const loginUser = async(user,dispatch,navigate) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSusscess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
    }
};

export const registerUser = async(user, dispatch,navigate) => {
    dispatch(registerStart());
    try{
        await axios.post("v1/auth/register", user);
        dispatch(registerSusscess());
        navigate("/login");
    }catch(err){
        dispatch(registerFailed());
    }
};

export const getAllUsers = async(accessToken, dispatch,axiosJWT) => {
    dispatch(getUsersStart());
    try{
        const res = await axiosJWT.get("/v1/user/getallusers",{
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(getUsersSusscess(res.data));
    }catch(err){
        dispatch(getUsersFailed());
    }
};

export const DeleteUser = async(accessToken, dispatch, id,axiosJWT) => {
    dispatch(deleteUserStart());
    try{
        const res = await axiosJWT.delete("/v1/user/"+ id, {
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(deleteUserSusscess(res.data));
    }catch(err){
        dispatch(deleteUserFailed(err.response.data));
    }
};

export const logOut = async(dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart());
    try{
        await axiosJWT.post("/v1/auth/logout", id,{
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(logoutSusscess());
        navigate("/login")
    }catch(err){
        dispatch(loginFailed());
    }
};

