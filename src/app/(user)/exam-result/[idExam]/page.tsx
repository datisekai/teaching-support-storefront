import React from "react";

import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";

import { useParams } from "next/navigation";
import Section from "@/components/exam-result/section";
import { GetServerSideProps } from "next";
import { getExamHistory } from "@/actions/exam.action";
interface Props {
  idExam: string;
}
const ExamInfomation: GetServerSideProps<Props> = async (context) => {
  const content = { id: 1, title: "Kết quả bài kiểm tra" };

  const { idExam } = context.params!;

  const contents = await getExamHistory();

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

export default ExamInfomation;
