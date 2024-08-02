import { getAttendanceHistory } from "@/actions/attendance.action";
import { Attendance } from "@/types/AttendanceModel";
import { formattedDate } from "@/utils";
import React from "react";

const SectionAbsolute = async () => {
  const contents = (await getAttendanceHistory()) as Attendance[];

  return (
    <div className="w-full rounded-xl px-4 absolute shadow-md mt-[-36px] bg-white">
      <div className="flex justify-between items-center py-2">
        <div className="text-sm font-bold">Điểm danh</div>
        <div className="text-sm font-bold">
          {formattedDate(contents[0].updated_at)}
        </div>
      </div>
      <div className="border-b-2 bg-secondary "></div>
      <div className="py-4 ">
        <div className="grid grid-cols-4 pb-1">
          <div className="col-span-1 text-sm font-bold">Môn:</div>
          <div className="col-span-3 text-sm ">
            {contents[0].room.group.course.name}
          </div>
        </div>
        <div className="grid grid-cols-4 pb-1">
          <div className="col-span-1 text-sm font-bold">Nhóm lớp:</div>
          <div className="col-span-3 text-sm">
            {contents[0].room.group.name}
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Trạng thái:</div>
          <div className="col-span-3 text-sm">
            {contents[0].success ? "Thành công" : "Thất bại"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbsolute;
