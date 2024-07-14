import React, { FC } from "react";
interface ISection {
  content: any;
}

const Section: FC<ISection> = ({ content }) => {
  return (
    <div className="w-full px-4 mb-4 bg-secondary">
      <div className="flex justify-between items-center py-2">
        <div className="text-sm font-bold">Điểm danh</div>
        <div className="text-sm font-bold">{content.date}</div>
      </div>
      <div className="border-b-2 bg-secondary "></div>
      <div className="py-4">
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Môn:</div>
          <div className="col-span-3 text-sm ">{content.subjectName}</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Tên giảng viên:</div>
          <div className="col-span-3 text-sm">{content.teacherName}</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Tiết bắt đầu:</div>
          <div className="col-span-3 text-sm">{content.timeStart}</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Số tiết:</div>
          <div className="col-span-3 text-sm">{content.timeCount}</div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Trạng thái:</div>
          <div className="col-span-3 text-sm">
            {content.status == "1" ? "Thành công" : "Thất bại"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
