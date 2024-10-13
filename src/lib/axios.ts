import { COOKIE_TOKEN, SERVER_URL } from "@/constants";
import axios from "axios";
import { getCookie } from "cookies-next";

export const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: SERVER_URL,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (conf) => {
    const token = getCookie(COOKIE_TOKEN);
    console.log(token);
    if (token) {
      conf.headers.Authorization = `Bearer ${token}`;
    }
    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      //   removeLocalItem(localKey.TOKEN);
      //   window.location.replace(pathNames.HOME);
      //   return;
    }
    return error.response?.data;
  }
);
