import { getAttendanceHistory } from "@/actions/attendance.action";
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
import { Attendance } from "@/types/AttendanceModel";
import React from "react";

const AttendanceHistory = async () => {
  const contents = await getAttendanceHistory();
  const content = { id: 1, title: "Lịch sử điểm danh" };
  return (
    <Card className="h-[100vh] md:w-[60vh] w-full rounded-none bg-secondary border-none">
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="px-0 pb-20 ">
        <ScrollArea className="h-[calc(100vh-40px)] ">
          <SectionTop />
          {contents ? (
            contents.map((item: Attendance, index: number) => {
              return <Section content={item} key={index} />;
            })
          ) : (
            <div className="flex justify-center content-center mt-28">
              Chưa có lần điểm danh nào
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AttendanceHistory;
