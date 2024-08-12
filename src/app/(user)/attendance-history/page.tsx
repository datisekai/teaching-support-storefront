import Section from "@/components/attendance-history/section";
import SectionTop from "@/components/attendance-history/section-top";
import SubHeader from "@/components/custom/sub-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Attendance } from "@/types/AttendanceModel";
import Loading from "@/utils/loading";
import React, { Suspense } from "react";

const AttendanceHistory = () => {
  const content = { id: 1, title: "Lịch sử điểm danh" };
  return (
    <div className="bg-secondary">
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className="px-0 pb-20 ">
        <ScrollArea className="h-[calc(100vh-48px)] ">
          <SectionTop />
          <Section />
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default AttendanceHistory;
