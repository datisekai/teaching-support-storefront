"use client";
import { useEffect, useState } from "react";
import { getAttendanceHistory } from "@/actions/attendance.action";
import { Attendance } from "@/types/AttendanceModel";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export const useAttendance = (date: Date) => {
  const [contents, setContents] = useState<Attendance[]>([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const formattedDate = format(date, "yyyy-MM-dd", { locale: vi });
      const data = await getAttendanceHistory(formattedDate);
      setContents(data);
    };

    fetchAttendance();
  }, [date]);

  return contents;
};
