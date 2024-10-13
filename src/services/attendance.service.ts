import { axiosInstance } from "@/lib/axios";

export const AttendanceService = {
  getAttendanceHistory: async (query: any) => {
    const response = await axiosInstance.get("/api.attendance/public/me", {
      params: query,
    });
    console.log("response", response);
    return response.data;
  },
};
