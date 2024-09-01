import React from "react";

import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Section from "@/components/exam-infomation/section";
import { getExamById, getExamFindByCode } from "@/actions/exam.action";
import { GetServerSideProps } from "next";

interface Props {
  code: string;
}

const ExamInfomation: GetServerSideProps<Props> = async (context) => {
  const content = { id: 1, title: "Thông tin bài kiểm tra" };
  const { code } = context.params!;

  const data = await getExamFindByCode(code);
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

export default ExamInfomation;
