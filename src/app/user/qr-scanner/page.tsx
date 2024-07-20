"use client";
import React, { useEffect, useState } from "react";
import { IDetectedBarcode, Scanner, outline } from "@yudiel/react-qr-scanner";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Footer from "@/components/custom/footer";

const QRScanner = () => {
  const content = { id: 1, title: "Quét QR" };
  const handleClick = (result: IDetectedBarcode[]) => {
    console.log(result);
  };

  const [hasCamera, setHasCamera] = useState<boolean>(false);

  useEffect(() => {
    const checkDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log(devices);
      } catch (error) {
        console.error("Error enumerating devices:", error);
      }
    };

    checkDevices();
  }, []);

  return (
    <Card className="h-[calc(100vh-64px)] md:w-[60vh] w-full rounded-none border-none">
      <CardHeader className="px-4 bg-[url('/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-20">
        <div className="items-center">Hướng camera về phía mã QR</div>
        <Scanner
          components={{
            onOff: true,
          }}
          onScan={(result) => handleClick(result)}
        />
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/qr-scanner" />
      </CardFooter>
    </Card>
  );
};

export default QRScanner;
