"use client";
import React, { useState } from "react";
import { Attendance } from "@/types/AttendanceModel";
import { useAttendance } from "@/hooks/useAttendance";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Heart } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { IoCalendarOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/userStore";
import { CiTimer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { Card, CardContent } from "../ui/card";
import ItemSection from "./item-section";
import { MdOutlineGrade } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

interface ISection {
  idExam: string;
}

const Section: React.FC<ISection> = ({ idExam }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  const arr = [
    {
      id: 1,
      title: "Số câu đúng",
      result: "10/40",
      icon: <CiCircleCheck size={32} />,
    },
    {
      id: 1,
      title: "Điểm số",
      result: "3",
      icon: <MdOutlineGrade size={32} />,
    },
    {
      id: 1,
      title: "Thời gian làm bài",
      result: "10:40",
      icon: <CiTimer size={32} />,
    },
  ];
  return (
    <div className="flex  items-center flex-col">
      <p className="text-lg text-primary mb-2">Kết quả bạn đạt được</p>
      {arr.map((item, index) => {
        return <ItemSection content={item} key={index} />;
      })}

      <div className="flex justify-between items-center mt-2">
        <Button variant="secondary" onClick={() => handleClick(`/`)}>
          Quay lại
        </Button>
      </div>
    </div>
  );
};

export default Section;
