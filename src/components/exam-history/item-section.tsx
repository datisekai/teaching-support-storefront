import React, { FC } from "react";
import { Badge } from "../ui/badge";

import DropdownMenuCustom from "../custom/dropdown-menu-custom";
import { Dot } from "lucide-react";
import { getAttendanceHistory } from "@/actions/attendance.action";

import { Attendance } from "@/types/AttendanceModel";
import { formattedDate, formatTime } from "@/utils/format";
import { ExamResult } from "@/types/ExamResultModel";
interface IItemSection {
  content: ExamResult;
}

const ItemSection: FC<IItemSection> = ({ content }) => {
  console.log(content);
  return (
    <div className="w-full mb-4 bg-white">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <div className="text-sm font-bold">
            Mã bài kiểm tra: {content.examResult.exam_id}
          </div>
          {/* <Dot className="text-slate-400 w-4" />
          <Badge
            variant={"outline"}
            className="bg-success text-white font-bold text-[13px]"
          >
            {content.success ? "Thành công" : "Thất bại"}
          </Badge> */}
        </div>
        <DropdownMenuCustom />
      </div>
      <div className="border-b-[1px] bg-secondary "></div>
      <div className="p-4">
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">
            Tên bài kiểm tra:
          </div>
          <div className="col-span-4 text-sm font-medium text-primary">
            {content.examResult.exam?.title}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Môn:</div>
          <div className="col-span-4 text-sm flex items-center">
            <p>{content.examResult.exam?.group.course.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Nhóm:</div>
          <div className="col-span-4 text-sm">
            {content.examResult.exam?.group.name}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Giảng viên:</div>
          <div className="col-span-4 text-sm">
            {content.examResult.exam?.group.teacher.name}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Kết quả:</div>
          <div className="col-span-4 text-sm">
            {content.trueAnswer}/{content.question}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">
            Thời gian làm:
          </div>
          <div className="col-span-4 text-sm">
            {formatTime(content.takeTime)}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">
            Ngày kiểm tra:
          </div>
          <div className="col-span-4 text-sm">
            {formattedDate(content.examResult.exam?.start_date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSection;
