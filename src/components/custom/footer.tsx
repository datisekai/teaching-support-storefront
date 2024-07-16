"use client";
import { House, QrCode, Settings } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { BsQrCodeScan } from "react-icons/bs";
const Footer = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div className="bg-white flex items-center h-full w-full px-6">
      <div className="w-1/5 flex flex-col items-center">
        <House width={24} height={24} className="text-slate-500" />
        <p className="text-xs text-slate-500">Trang chủ</p>
      </div>

      <div className="w-1/5 flex flex-col items-center">
        <House width={24} height={24} className="text-slate-500" />
        <p className="text-xs text-slate-500">Trang chủ</p>
      </div>

      <div className="w-1/5 flex justify-center items-center pb-2">
        <div
          className="bg-primary rounded-full p-2"
          onClick={() => handleClick("/qr-scanner")}
        >
          <BsQrCodeScan className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="w-1/5 flex flex-col items-center">
        <Settings width={24} height={24} className="text-slate-500" />
        <p className="text-xs text-slate-500">Cài đặt</p>
      </div>

      <div className="w-1/5 flex flex-col items-center">
        <Settings width={24} height={24} className="text-slate-500" />
        <p className="text-xs text-slate-500">Cài đặt</p>
      </div>
    </div>
  );
};

export default Footer;
