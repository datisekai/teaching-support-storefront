import React from "react";
import ItemSection from "./item-section";

const Section = () => {
  const arr = [
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
    { id: 1, title: "Gắn bó cùng trường", decription: "4 năm" },
  ];
  return (
    <div className="px-4 mt-4">
      <p className="text-sm">THÔNG TIN CÔNG VIỆC</p>
      <div className="mt-2">
        <div className="grid grid-cols-2 gap-4 w-full">
          {arr.map((item, index) => (
            <ItemSection content={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
