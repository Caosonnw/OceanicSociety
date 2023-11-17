import axios from "axios";
import { jwtDecode } from "jwt-decode";


const refreshToken = async () => {
    try{
      const res = await axios.post("/v1/auth/refresh",{
        withCredentials: true,
      });
      return res.data;
    }catch(err) {
      console.log(err);
    }
  };

export const createAxios = (users,dispatch,stateSusscess) => {
    const newInstance = axios.create();
    newInstance.interceptors.request.use(
    async(config) => {
        let date = new Date();
        const decodedToken = jwtDecode(users?.accessToken);
        if(decodedToken.exp < date.getTime()/1000) {
            const data = await refreshToken();
            const refreshUser = {
            ...users,
            accessToken: data.accessToken,
        };
        dispatch(stateSusscess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
    }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
    );
    return newInstance;
};