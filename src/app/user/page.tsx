import React from "react";
import Section from "@/components/home/section";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionTop from "@/components/home/section-top";
import { Separator } from "@radix-ui/react-dropdown-menu";
const HomePage = () => {
  const arr = [
    { id: 1, name: "Tin tức" },
    { id: 2, name: "Phản hồi đơn từ" },
  ];
  const arrTop = [
    { id: 1, name: "Tin tức", image: "/icons8-page-80.png" },
    { id: 2, name: "Điểm danh", image: "/icons8-attendance-80.png" },
    { id: 3, name: "Bảng điểm", image: "/icons8-rank-80.png" },
  ];
  return (
    <>
      <div className="flex items-center mt-2">
        {arrTop.map((item, index) => {
          return <SectionTop content={item} key={index} />;
        })}
      </div>
      <ScrollArea className="flex flex-col px-4">
        {arr.map((item, index) => {
          return <Section content={item} key={index} />;
        })}
      </ScrollArea>
    </>
  );
};

export default HomePage;
