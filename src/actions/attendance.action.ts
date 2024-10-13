import { IAttendance } from "@/types/AttendanceModel";
import { myFetch } from "@/utils/myFetch";

interface IAttendanceResponse {
  data: IAttendance[];
  total: number;
}
export async function getAttendanceHistory(date: string) {
  const response = await myFetch(`/api.attendance/public/me`);
  const data = await response.json();

  return data as IAttendanceResponse;
}
