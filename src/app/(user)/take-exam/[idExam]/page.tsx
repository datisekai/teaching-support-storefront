import React from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Section from "@/components/take-exam/section";
import { ScrollArea } from "@/components/ui/scroll-area";
import CountdownCustom from "@/components/custom/Countdown-custom";
import { getExamById } from "@/actions/exam.action";

interface Props {
  params: {
    idExam: string;
  };
}

const TakeExam: React.FC<Props> = async ({ params }) => {
  const { idExam } = params;

  const data = await getExamById(idExam);

  const content = { id: 1, title: "Làm bài kiểm tra" };

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader
          content={content}
          iconRight={
            <p className="font-bold">
              {/* Thời gian: <CountdownCustom date={Date.now() + 3600 * 1000} /> */}
            </p>
          }
        />
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-48px)] ">
        <CardContent className="mt-8 pb-20">
          <Section content={data} />
        </CardContent>
      </ScrollArea>
    </div>
  );
};

export async function generateStaticParams() {
  return [{ idExam: "example-id" }];
}

export default TakeExam;
