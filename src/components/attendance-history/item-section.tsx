import React, { FC } from "react";
import { Badge } from "../ui/badge";

import DropdownMenuCustom from "../custom/dropdown-menu-custom";
import { Dot } from "lucide-react";
import { getAttendanceHistory } from "@/actions/attendance.action";

import { Attendance, IAttendance } from "@/types/AttendanceModel";
import { formattedDate } from "@/utils/format";
interface IITEMSection {
  content: IAttendance;
}

const ItemSection: FC<IITEMSection> = ({ content }) => {
  return (
    <div className="w-full mb-4 bg-white">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <div className="text-sm font-bold">
            Mã môn: {content.attendance.class.major.code}
          </div>
          <Dot className="text-slate-400 w-4" />
          <Badge
            variant={"outline"}
            className="bg-success text-white font-bold text-[13px]"
          >
            Thành công
          </Badge>
        </div>
        <DropdownMenuCustom />
      </div>
      <div className="border-b-[1px] bg-secondary "></div>
      <div className="p-4">
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Môn:</div>
          <div className="col-span-4 text-sm font-medium text-primary">
            {content.attendance.class.major.name}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Giảng viên:</div>
          <div className="col-span-4 text-sm flex items-center">
            <p>{content.attendance.class.teachers[0].name}</p>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Thời gian:</div>
          <div className="col-span-4 text-sm">
            {formattedDate(content.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
