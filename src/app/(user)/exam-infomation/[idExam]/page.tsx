import React from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Section from "@/components/exam-infomation/section";
import { getExamFindByCode } from "@/actions/exam.action";

interface Props {
  params: {
    idExam: string;
  };
}

const ExamInfomation = async ({ params }: Props) => {
  const { idExam } = params;

  const data = await getExamFindByCode(idExam);

  const content = { id: 1, title: "Thông tin bài kiểm tra" };

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent>
        <Section content={data} />
      </CardContent>
    </div>
  );
};

export async function generateStaticParams() {
  return [{ idExam: "example-id" }];
}

export default ExamInfomation;
