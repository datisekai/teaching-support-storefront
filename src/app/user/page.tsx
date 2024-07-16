import React from "react";
import Section from "@/components/home/section";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionTop from "@/components/home/section-top";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Section1 from "@/components/home/section1";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import { PiRankingLight } from "react-icons/pi";

const HomePage = () => {
  const arr = [
    { id: 1, name: "Tin tức" },
    { id: 2, name: "Phản hồi đơn từ" },
  ];
  const arrTop = [
    {
      id: 1,
      name: "Tin tức",
      image: (
        <div className="rounded-full bg-secondary p-2">
          <IoNewspaperOutline className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
    {
      id: 2,
      name: "Điểm danh",
      image: (
        <div className="rounded-full bg-secondary p-2">
          <LuUserCheck className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
    {
      id: 3,
      name: "Bảng điểm",
      image: (
        <div className="rounded-full bg-secondary p-2">
          <PiRankingLight className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
  ];
  return (
    <div className="relative">
      <Section1 />
      <div className="pt-24">
        <div className="flex items-center my-4">
          {arrTop.map((item, index) => {
            return <SectionTop content={item} key={index} />;
          })}
        </div>

        {arr.map((item, index) => {
          return <Section content={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
