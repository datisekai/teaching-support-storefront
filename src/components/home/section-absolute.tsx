import { getAttendanceHistory } from "@/actions/attendance.action";
import { Attendance } from "@/types/AttendanceModel";
import React from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { formattedDate } from "@/utils/format";

const SectionAbsolute = async () => {
  const contents = (await getAttendanceHistory("")) as Attendance[];

  return (
    <div className="w-full rounded-xl px-4 absolute shadow-md mt-[-36px] bg-white">
      <div className="flex justify-between items-center py-2">
        <div className="text-sm font-bold">Điểm danh</div>
        <div className="text-sm font-bold">
          {contents ? formattedDate(contents?.[0]?.updated_at) : "null"}
        </div>
      </div>
      <div className="border-b-2 bg-secondary "></div>
      <div className="py-4 ">
        <div className="grid grid-cols-6 pb-1">
          <div className="col-span-2 text-sm font-bold">Môn:</div>
          <div className="col-span-4 text-sm truncate ">
            {contents ? contents?.[0]?.room.group.course.name : "null"}
          </div>
        </div>
        <div className="grid grid-cols-6 pb-1">
          <div className="col-span-2 text-sm font-bold">Nhóm lớp:</div>
          <div className="col-span-4 text-sm truncate ">
            {contents ? contents?.[0]?.room.group.name : "null"}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm font-bold truncate ">
            Trạng thái:
          </div>
          <div className="col-span-4 text-sm">
            {contents
              ? contents?.[0]?.success
                ? "Thành công"
                : "Thất bại"
              : "null"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbsolute;
