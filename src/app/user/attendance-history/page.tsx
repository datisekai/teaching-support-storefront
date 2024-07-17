import Section from "@/components/attendance-history/section";
import SectionTop from "@/components/attendance-history/section-top";
import Footer from "@/components/custom/footer";
import SubHeader from "@/components/custom/sub-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const AttendanceHistory = () => {
  const arr = [
    {
      id: 123456,
      date: "29/12/2s099",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      user: { name: "Nguyễn văn a", avatar: "https://github.com/shadcn.png" },
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
    {
      id: 123456,
      date: "29/12/20q99",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      user: { name: "Nguyễn văn a", avatar: "https://github.com/shadcn.png" },
      timeStart: "6",
      timeCount: "5",
      status: "0",
    },
    {
      id: 123456,
      date: "29/12/20919",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      user: { name: "Nguyễn văn a", avatar: "https://github.com/shadcn.png" },
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
    {
      id: 123456,
      date: "29/12/20199",
      subjectName: "Phát triển ứng dụng trên thiết bị di động nâng cao",
      user: { name: "Nguyễn văn a", avatar: "https://github.com/shadcn.png" },
      timeStart: "6",
      timeCount: "5",
      status: "1",
    },
  ];
  const content = { id: 1, title: "Lịch sử điểm danh" };
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/slider2_1240x450-min.jpg')] bg-cover bg-center">
    <Card className="h-[100vh] md:w-[60vh] w-full rounded-none bg-secondary">
      <CardHeader className="bg-[url('/background-header.png')] h-[60px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="px-0">
        <ScrollArea className="h-[calc(100vh-60px)] ">
          <SectionTop />
          {arr.map((item, index) => {
            return <Section content={item} key={index} />;
          })}
        </ScrollArea>
      </CardContent>
    </Card>
    // </main>
  );
};

export default AttendanceHistory;
