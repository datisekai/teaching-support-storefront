import { House, QrCode, Settings } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center w-full px-4">
      <div className="flex flex-col items-center">
        <House width={24} height={24} />
        <p className="text-xs">Trang chủ</p>
      </div>
      <div className="mb-2">
        <QrCode width={40} height={40} />
      </div>

      <div className="flex flex-col items-center">
        <Settings width={24} height={24} />
        <p className="text-xs">Cài đặt</p>
      </div>
    </div>
  );
};

export default Footer;
