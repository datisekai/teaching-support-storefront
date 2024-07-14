import Section from "@/components/attendance-history/section";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const AttendanceHistory = () => {
  const arr = [
    {
      id: 1,
      date: "29/12/2s099",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      teacherName: "Nguyễn văn a",
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
    {
      id: 2,
      date: "29/12/20q99",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      teacherName: "Nguyễn văn a",
      timeStart: "6",
      timeCount: "5",
      status: "0",
    },
    {
      id: 3,
      date: "29/12/20919",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      teacherName: "Nguyễn văn a",
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
    {
      id: 4,
      date: "29/12/20199",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      teacherName: "Nguyễn văn a",
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
  ];
  return (
    <ScrollArea className="h-[60vh]">
      {arr.map((item, index) => {
        return <Section content={item} key={index} />;
      })}
    </ScrollArea>
  );
};

export default AttendanceHistory;
