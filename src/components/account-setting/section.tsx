"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight, RectangleEllipsis } from "lucide-react";
import { deleteCookieServer } from "@/utils";
import { COOKIE_TOKEN } from "@/constants";
import { useRouter } from "next/navigation";

const Section = () => {
  const router = useRouter();
  const handleClick = () => {
    deleteCookieServer(COOKIE_TOKEN);
    router.push("/login");
  };
  return (
    <div>
      <div className="flex justify-between items-center py-4 border-b-2">
        <div className="flex items-center justify-center">
          <RectangleEllipsis className="text-slate-500 mr-4" />
          <div>Mật khẩu</div>
        </div>
        <div className="flex items-center justify-center text-slate-500 ">
          <div>Thay đổi</div>
          <ChevronRight className="" />
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full border-primary text-primary font-bold mt-4"
        onClick={handleClick}
      >
        Đăng xuất
      </Button>
    </div>
  );
};

export default Section;
