"use server";

import { COOKIE_TOKEN, SERVER_URL } from "@/constants";
import { myFetch, setCookieServer } from "@/utils";

interface ILogin {
  code: string;
  password: string;
}
export async function login(payload: ILogin) {
  const response = await fetch(`${SERVER_URL}/api.auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  const data = body.data;
  const token = data.token;
  setCookieServer(COOKIE_TOKEN, token);

  return data;
}

export async function getMyInfo() {
  const response = await myFetch("/api.user/me");
  const data = await response.json();

  return data.data;
}
