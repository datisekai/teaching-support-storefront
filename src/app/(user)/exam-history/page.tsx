import { getExamHistory } from "@/actions/exam.action";
import SubHeader from "@/components/custom/sub-header";
import Section from "@/components/exam-history/section";
import { CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const AttendanceHistory = async () => {
  const content = { id: 1, title: "Lịch sử kiểm tra" };
  const contents = await getExamHistory();
  return (
    <div className="bg-secondary">
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className="px-0 pb-20 ">
        <ScrollArea className="h-[calc(100vh-48px)] ">
          <Section contents={contents} />
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default AttendanceHistory;
