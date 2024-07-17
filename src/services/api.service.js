import axios from "axios";
import Cookies from "js-cookie";

const apiService = axios.create({
  baseURL: "https://tsp-be.datisekai.id.vn",
});

apiService.interceptors.request.use(
  (config) => {
    const token = Cookies.get("lg");
    console.log("testt " + token);
    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;
