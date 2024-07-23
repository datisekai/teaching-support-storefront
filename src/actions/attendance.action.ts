"use server";
import { Attendance } from "@/types/AttendanceModel";
import { myFetch } from "@/utils/myFetch";

export async function getAttendanceHistory() {
  const response = await myFetch("/api.event-room/me");
  const data = await response.json();

  return data.data;
}
