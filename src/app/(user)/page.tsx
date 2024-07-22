import React from "react";
import Section from "@/components/home/section";
import SectionTop from "@/components/home/section-top";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Section1 from "@/components/home/section1";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import { PiRankingLight } from "react-icons/pi";

const HomePage = () => {
  const user = { id: 1, name: "Nguyễn Hải Dương", mssv: "3120410103" };
  const arr = [
    { id: 1, name: "Tin tức" },
    { id: 2, name: "Phản hồi đơn từ" },
  ];
  const arrTop = [
    {
      id: 1,
      name: "Tin tức",
      image: (
        <div className="rounded-full bg-[#FEF4EB] p-2">
          <IoNewspaperOutline className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
    {
      id: 2,
      name: "Điểm danh",
      image: (
        <div className="rounded-full bg-[#FEF4EB] p-2">
          <LuUserCheck className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
    {
      id: 3,
      name: "Bảng điểm",
      image: (
        <div className="rounded-full bg-[#FEF4EB] p-2">
          <PiRankingLight className="text-[24px] text-[#ffaf6d]" />
        </div>
      ),
    },
  ];
  return (
    <Card className="h-[100vh] md:w-[60vh] w-full rounded-none border-none">
      <ScrollArea className="h-[calc(100vh-64px)] ">
        <CardHeader className="bg-[url('/images/background-header.png')] h-[160px] ">
          <Header content={user} />
        </CardHeader>
        <CardContent className="pb-1 ">
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
        </CardContent>
      </ScrollArea>
      <CardFooter className="p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/" />
      </CardFooter>
    </Card>
  );
};

export default HomePage;
