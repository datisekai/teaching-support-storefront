"use client";
import React, { useEffect, useState } from "react";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SubHeader from "@/components/custom/sub-header";
import Footer from "@/components/custom/footer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QRScanner = () => {
  const content = { id: 1, title: "Quét QR" };

  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [device, setDevice] = useState("-1");

  useEffect(() => {
    const checkCameraAvailability = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(
          (device) => device.kind === "videoinput"
        );
        if (cameras.length === 0) {
          console.error("No cameras found.");
          return;
        }
        setCameras(cameras);
      } catch (error) {
        console.error("Error checking camera availability:", error);
      }
    };

    checkCameraAvailability();
  }, []);

  const handleClick = (result: IDetectedBarcode[]) => {
    console.log(result);
  };
  const handleChange = (value: string) => {
    setDevice(value);
  };

  return (
    <Card className="h-[calc(100vh-64px)] md:w-[60vh] w-full rounded-none border-none">
      <CardHeader className="px-4 bg-[url('/background-header.png')] h-[40px] flex justify-center">
        <SubHeader content={content} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between mt-12">
        <div className="flex flex-col justify-center items-center mb-4">
          <Select onValueChange={(value) => handleChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn camera..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="-1">Chọn camera</SelectItem>
                {cameras.map((item, index) => {
                  return (
                    <SelectItem value={item.deviceId} key={index}>
                      {item.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {cameras.length === 0 && (
          <div className="items-center text-destructive text-center">
            Cấp quyền truy cập hoặc kiểm tra lại camera và tải lại trang!
          </div>
        )}
        <div className="items-center">Hướng camera về phía mã QR</div>
        <Scanner
          components={{
            onOff: true,
          }}
          constraints={{ deviceId: device }}
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
