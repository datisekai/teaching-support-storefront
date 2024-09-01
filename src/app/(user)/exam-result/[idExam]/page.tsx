import React from "react";
import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Section from "@/components/exam-result/section";
import { getExamHistory } from "@/actions/exam.action";

interface Props {
  params: {
    idExam: string;
  };
}

const ExamInfomation: React.FC<Props> = async ({ params }) => {
  const { idExam } = params;

  const contents = await getExamHistory();

  const content = { id: 1, title: "Kết quả bài kiểm tra" };

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent>
        <Section idExam={idExam} contents={contents} />
      </CardContent>
    </div>
  );
};

export async function generateStaticParams() {
  return [{ idExam: "example-id" }];
}

export default ExamInfomation;
