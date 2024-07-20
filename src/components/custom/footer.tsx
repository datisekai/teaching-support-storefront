"use client";
import { House, QrCode, Settings } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsQrCodeScan } from "react-icons/bs";
type FooterProps = {
  activeItem?: string;
};
const Footer: React.FC<FooterProps> = ({ activeItem = "/user" }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="bg-white flex items-center h-full w-full px-2">
      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/user" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/user")}
      >
        <House width={24} height={24} />
        <p className="text-xs ">Trang chủ</p>
      </div>

      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/user/qr-scanner1" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/user/qr-scanner1")}
      >
        <House width={24} height={24} />
        <p className="text-xs ">Trang chủ</p>
      </div>

      <div
        className={`w-1/5 flex justify-center items-center pb-2 ${
          activeItem === "/user/qr-scanner" ? "text-primary" : "text-slate-500"
        }`}
        onClick={() => handleClick("/user/qr-scanner")}
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
        <Settings width={24} height={24} />
        <p className="text-xs ">Cài đặt</p>
      </div>

      <div
        className={`w-1/5 flex flex-col items-center ${
          activeItem === "/setting" ? "text-primary" : "text-slate-500"
        }`}
      >
        <Settings width={24} height={24} />
        <p className="text-xs ">Cài đặt</p>
      </div>
    </div>
  );
};

export default Footer;
