import React from "react";

const Section1 = () => {
  return (
    <div className="w-full rounded-xl px-4 absolute shadow-md mt-[-36px] bg-white">
      <div className="flex justify-between items-center py-2">
        <div className="text-sm font-bold">Điểm danh</div>
        <div className="text-sm font-bold">29/12/2099</div>
      </div>
      <div className="border-b-2 bg-secondary "></div>
      <div className="py-4">
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Môn:</div>
          <div className="col-span-3 text-sm ">
            Phát triển ứng dụng trên thiết bị di động nâng cao
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1 text-sm font-bold">Tiết:</div>
          <div className="col-span-3 text-sm">5</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
