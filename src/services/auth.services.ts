import { SERVER_URL } from "@/constant";

const AuthService = {
  login: async (payload: any) => {
    const response = await fetch(`${SERVER_URL}/api.auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    return data.data;
  },
  me: async (token: string) => {
    const response = await fetch(`${SERVER_URL}/api.user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data.data;
  },
};

export default AuthService;
