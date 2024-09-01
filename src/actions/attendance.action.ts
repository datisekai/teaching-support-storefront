import { myFetch } from "@/utils/myFetch";

export async function getAttendanceHistory(date: string) {
  const response = await myFetch(`/api.event-room/me?date=${date}`);
  const data = await response.json();

  return data.data;
}
