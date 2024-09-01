"use client";
import React, { useEffect, useState } from "react";
import { Attendance } from "@/types/AttendanceModel";
import ItemSection from "./item-section";

interface ISection {
  contents: Attendance[];
}

const Section: React.FC<ISection> = ({ contents }) => {
  return (
    <div>
      <div className="mb-20">
        {contents.length > 0 ? (
          contents.map((item: Attendance, index: number) => (
            <ItemSection content={item} key={index} />
          ))
        ) : (
          <div className="flex justify-center content-center mt-28">
            Chưa có lần điểm danh nào
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
