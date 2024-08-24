"use client";
import React, { useEffect, useState } from "react";

import { CardContent, CardHeader } from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";

import { useParams } from "next/navigation";
import Section from "@/components/exam-result/section";

const ExamInfomation = () => {
  const content = { id: 1, title: "Kết quả bài kiểm tra" };

  const { idExam } = useParams();
  const id = Array.isArray(idExam) ? idExam[0] : idExam;

  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className=" mt-20">
        <Section idExam={id} />
      </CardContent>
    </div>
  );
};

export default ExamInfomation;
