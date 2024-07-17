import axios from "axios";
import Cookies from "js-cookie";

const apiService = axios.create({
  baseURL: "http://localhost:3000",
});

apiService.interceptors.request.use(
  (config) => {
    const token = Cookies.get("lg");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
