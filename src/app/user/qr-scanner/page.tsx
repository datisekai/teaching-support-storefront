"use client";
import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

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
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/slider2_1240x450-min.jpg')] bg-cover bg-center">
    <Card className="h-[calc(100vh-64px)] md:w-[60vh] w-full rounded-none">
      <CardHeader className="bg-[url('/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-20">
        <div className="items-center">Hướng camera về phía mã QR</div>
        <Scanner onScan={(result) => console.log(result)} />
      </CardContent>
      <CardFooter className="pb-0 p-0 md:w-[60vh] w-full z-10 h-16 flex items-center justify-between fixed left-1/2 transform -translate-x-1/2 bottom-0 ">
        <Footer activeItem="/qr-scanner" />
      </CardFooter>
    </Card>
    // </main>
  );
};

export default QRScanner;
