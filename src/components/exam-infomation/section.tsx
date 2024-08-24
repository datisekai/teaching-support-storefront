"use client";
import React, { useState } from "react";
import { Attendance } from "@/types/AttendanceModel";
import { useAttendance } from "@/hooks/useAttendance";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { IoCalendarOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/userStore";
import { CiTimer } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";

interface ISection {
  idExam: string;
}

const Section: React.FC<ISection> = ({ idExam }) => {
  const user = useUserStore((state) => state.user);
  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div>
      <p className="text-lg text-primary">
        Bài kiểm tra HK2 môn cslt năm 2023-2024
      </p>
      <div className="text-sm mt-2">
        <p>Bài kiểm tra này không được sử dụng tài liệu</p>
        <p>Bài kiểm tra này không được sử dụng tài liệu</p>
        <p>Bài kiểm tra này không được sử dụng tài liệu</p>
      </div>
      <div className="flex flex-wrap text-sm text-slate-500 mt-2">
        <div className="flex items-center justify-center mr-4 mb-2">
          <CiTimer />
          <p className="ml-2">60p</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <IoBookOutline />
          <p className="ml-2">Cơ sở lập trình</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <SiGoogleclassroom />
          <p className="ml-2">Nhóm 20</p>
        </div>
        <div className="flex items-center justify-center mr-4 mb-2">
          <CiUser />
          <p className="ml-2">Phan Tấn Quốc</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <Button
          variant="secondary"
          onClick={() =>
            handleClick(`/exam-infomation/${decodeURIComponent(idExam)}`)
          }
        >
          Quay lại
        </Button>
        <Button
          variant="default"
          onClick={() =>
            handleClick(`/take-exam/${decodeURIComponent(idExam)}`)
          }
        >
          Bắt đầu làm bài
        </Button>
      </div>
    </div>
  );
};

export default Section;
