"use client";
import React from "react";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { CiTimer } from "react-icons/ci";
import ItemSection from "./item-section";
import { MdOutlineGrade } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { ExamResult } from "@/types/ExamResultModel";
import { formatTime } from "@/utils/format";

interface ISection {
  idExam: string | string[] | undefined;
  contents: ExamResult[];
}

const Section: React.FC<ISection> = ({ idExam, contents }) => {
  const router = useRouter();

  const result = contents.find(
    (content) => content.examResult.exam_id.toString() === idExam
  );

  const handleClick = (url: string) => {
    router.push(url);
  };

  if (!result) {
    return (
      <div className="flex flex-col flex-1 justify-center h-[calc(100vh-48px)]">
        <div className="flex items-center flex-col">
          <p className="text-lg text-primary mb-2">Kết quả không tìm thấy</p>
          <div className="flex justify-between items-center mt-2">
            <Button variant="secondary" onClick={() => handleClick(`/`)}>
              Quay lại
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const arr = [
    {
      id: 1,
      title: "Số câu đúng",
      result: result.trueAnswer,
      icon: <CiCircleCheck size={32} />,
    },
    {
      id: 2,
      title: "Điểm số",
      result: ((result.trueAnswer / result.question) * 100).toFixed(2),
      icon: <MdOutlineGrade size={32} />,
    },
    {
      id: 3,
      title: "Thời gian làm bài",
      result: formatTime(result.takeTime),
      icon: <CiTimer size={32} />,
    },
  ];

  return (
    <div className="flex flex-col flex-1 justify-center h-[calc(100vh-48px)]">
      <div className="flex items-center flex-col">
        <p className="text-lg text-primary mb-2">Kết quả bạn đạt được</p>
        {arr.map((item) => (
          <ItemSection content={item} key={item.id} />
        ))}

        <div className="flex justify-between items-center mt-2">
          <Button variant="secondary" onClick={() => handleClick(`/`)}>
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section;
