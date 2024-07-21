"use server";
import { cookies } from "next/headers";
// import { getCookie, setCookie } from "cookies-next";

export async function setCookieServer(name: string, value: string) {
  cookies().set(name, value);
  // setCookie(name, value, { cookies });
}
export async function getCookieServer(name: string) {
  return cookies().get(name)?.value;
  // return getCookie(name, { cookies });
}

export async function getObjectCookieServer(name: string) {
  const data = cookies().get(name)?.value;
  return data ? JSON.parse(data) : {};
}
