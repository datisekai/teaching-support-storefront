import apiService from "./api.service";

const login = async (code, password) => {
  const response = await apiService.post("/api.auth/login", { code, password });
  return response.data;
};

const fetchUser = async () => {
  const response = await apiService.get("/api.user/me");
  return response.data;
};

export { login, fetchUser };
