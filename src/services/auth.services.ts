import { SERVER_URL } from "@/constant";
import { getCookieServer, myFetch } from "@/utils";

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
  me: async () => {
    const response = await myFetch("/api.user/me");
    const data = await response.json();

    return data.data;
  },
};

export default AuthService;
