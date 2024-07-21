import { COOKIE_TOKEN, SERVER_URL } from "@/constants";
import { getCookieServer } from ".";

export async function myFetch(url: string, init?: RequestInit) {
  const path = SERVER_URL + url;
  const token = await getCookieServer(COOKIE_TOKEN);
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
