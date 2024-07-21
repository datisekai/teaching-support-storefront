"use server";
import { cookies } from "next/headers";
import { getCookie, setCookie } from "cookies-next";
import { SERVER_URL } from "@/constant";

export async function setCookieServer(name: string, value: string) {
  setCookie(name, value, { cookies });
}
export async function getCookieServer(name: string) {
  return getCookie(name, { cookies });
}
export async function myFetch(url: string, init?: RequestInit) {
  const path = SERVER_URL + url;
  const token = await getCookieServer("lg");
  let options = { method: "GET" };
  if (init) {
    options = { ...options, ...init };
  }
  return fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
