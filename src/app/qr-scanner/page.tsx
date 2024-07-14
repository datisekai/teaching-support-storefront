"use client";
import React from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
const QRScanner = () => {
  return (
    <div className="bg-transparent flex flex-col items-center justify-between mt-20">
      <div className="items-center">Hướng camera về phía mã QR</div>
      <Scanner onScan={(result) => console.log(result)} />
    </div>
  );
};

export default QRScanner;
