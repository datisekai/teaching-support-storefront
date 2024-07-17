"use client";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface SubHeaderProps {
  content: any;
}

const SubHeader: React.FC<SubHeaderProps> = ({ content }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className="flex items-center text-white">
      <IoIosArrowRoundBack className="text-[24px] mr-2" onClick={handleClick} />
      <div className="text-sm">{content.title}</div>
    </div>
  );
};

export default SubHeader;
