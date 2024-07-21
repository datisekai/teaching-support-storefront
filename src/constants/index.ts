export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string;
export const SERVER_REALTIME_URL = process.env
  .NEXT_PUBLIC_SERVER_REALTIME_URL as string;
const prefix = "tsp_";

export const COOKIE_TOKEN = prefix + "token";

export const COOKIE_USER = prefix + "user";
