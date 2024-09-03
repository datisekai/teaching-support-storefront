"use client";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface SubHeaderProps {
  isBack?: boolean;
  content: { id: number; title: string };
  iconRight: React.ReactElement;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  isBack = true,
  content,
  iconRight,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const handleRouter = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex items-center">
        {isBack && (
          <IoIosArrowRoundBack
            className="text-[24px] mr-2"
            onClick={handleClick}
          />
        )}

        <div className="text-sm font-bold">{content.title}</div>
      </div>
      <div onClick={() => handleRouter("/account-setting")}>{iconRight}</div>
    </div>
  );
};

export default SubHeader;
