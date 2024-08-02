"use client";
import { House, QrCode, Settings, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsQrCodeScan } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import { MdOutlineAssignment } from "react-icons/md";

type FooterProps = {
  activeItem?: string;
};
const Footer: React.FC<FooterProps> = ({ activeItem = "/" }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="bg-white flex items-center h-full w-full px-2">
      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/")}
      >
        <House width={24} height={24} />
        <p className="text-xs ">Trang chủ</p>
      </div>

      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/attendance-history"
            ? "text-primary"
            : "text-slate-500"
        }`}
        onClick={() => handleClick("/attendance-history")}
      >
        <LuUserCheck className="text-[24px]" />
        <p className="text-xs ">Lịch sử</p>
      </div>

      <div
        className={`w-1/5 flex justify-center items-center pb-2 ${
          activeItem === "/qr-scanner" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/qr-scanner")}
      >
        <div className="bg-primary rounded-full p-2">
          <BsQrCodeScan className="w-8 h-8 text-white" />
        </div>
      </div>

      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/setting1" ? "text-primary" : "text-slate-500"
        }`}
      >
        <MdOutlineAssignment className="text-[24px]" />
        <p className="text-xs ">Kiểm tra</p>
      </div>

      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/account" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/account")}
      >
        <UserRound width={24} height={24} />
        <p className="text-xs ">Tài khoản</p>
      </div>
    </div>
  );
};

export default Footer;
