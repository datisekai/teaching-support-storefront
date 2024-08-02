import Section from "@/components/account-setting/section";
import Footer from "@/components/custom/footer";
import SubHeader from "@/components/custom/sub-header";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

const AccountSetting = () => {
  const content = { id: 1, title: "Cài đặt" };
  return (
    <div>
      <CardHeader className="px-4 bg-[url('/images/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} iconRight={<></>} />
      </CardHeader>
      <CardContent className="mt-2 px-4">
        <Section />
      </CardContent>
    </div>
  );
};

export default AccountSetting;
