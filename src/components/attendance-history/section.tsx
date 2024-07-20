import React, { FC } from "react";
import { Badge } from "../ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DropdownMenuCustom from "../custom/dropdown-menu-custom";
import { Dot } from "lucide-react";

interface ISection {
  content: any;
}

const Section: FC<ISection> = ({ content }) => {
  return (
    <div className="w-full mb-4 bg-white">
      <div className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <div className="text-sm font-bold">Mã môn: {content.id}</div>
          <Dot className="text-slate-400 w-4" />
          <Badge
            variant={"outline"}
            className="bg-success text-white font-thin"
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
            {content.subjectName}
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Giảng viên:</div>
          <div className="col-span-4 text-sm flex items-center">
            <p>{content.user.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Ngày:</div>
          <div className="col-span-4 text-sm">{content.date}</div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Tiết bắt đầu:</div>
          <div className="col-span-4 text-sm">{content.timeStart}</div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Số tiết:</div>
          <div className="col-span-4 text-sm">{content.timeCount}</div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-2 text-sm text-slate-400">Trạng thái:</div>
          <div className="col-span-4 text-sm">
            {content.status == "1" ? "Thành công" : "Thất bại"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
