"use client";
import { useEffect, useState } from "react";
import { getAttendanceHistory } from "@/actions/attendance.action";
import { Attendance } from "@/types/AttendanceModel";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export const useAttendance = (date: Date) => {
  const [contents, setContents] = useState<Attendance[]>([]);

  return contents;
};
