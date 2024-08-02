import React, { FC } from "react";
import { getAttendanceHistory } from "@/actions/attendance.action";
import { Attendance } from "@/types/AttendanceModel";
import ItemSection from "./item-section";

const Section = async () => {
  const contents = await getAttendanceHistory();
  return (
    <div className="mb-20">
      {contents ? (
        contents.map((item: Attendance, index: number) => {
          return <ItemSection content={item} key={index} />;
        })
      ) : (
        <div className="flex justify-center content-center mt-28">
          Chưa có lần điểm danh nào
        </div>
      )}
    </div>
  );
};

export default Section;
