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
  const response = await fetch(`${SERVER_URL}/api.auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  const data = body.data;
  const token = data?.token;
  setCookieServer(COOKIE_TOKEN, token);

  return data;
}

export async function getMyInfo() {
  const response = await myFetch("/api.user/me");
  const data = await response.json();
  // cookies().set(COOKIE_USER, JSON.stringify(data.data.user));

  return data.data.user;
}
