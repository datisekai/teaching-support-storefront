import { SERVER_REALTIME_URL } from "@/constants";
import { io } from "socket.io-client";
export const socket = io(SERVER_REALTIME_URL);
