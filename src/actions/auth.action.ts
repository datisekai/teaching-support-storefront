"use server";

import { COOKIE_TOKEN, COOKIE_USER, SERVER_URL } from "@/constants";
import { setCookieServer } from "@/utils";
import { myFetch } from "@/utils/myFetch";
import { cookies } from "next/headers";

interface ILogin {
  code: string;
  password: string;
}
export async function login(payload: ILogin) {
  const response = await fetch(`${SERVER_URL}/api.auth/login-student`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  console.log("body", body);
  const data = body.data;
  const token = data?.accessToken;
  setCookieServer(COOKIE_TOKEN, token);

  return data;
}

export async function getMyInfo() {
  const response = await myFetch("/api.auth/profile");
  const data = await response.json();
  // cookies().set(COOKIE_USER, JSON.stringify(data.data.user));

  console.log("data", data);
  return data.user;
}
