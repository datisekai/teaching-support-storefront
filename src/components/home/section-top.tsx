"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SectionTopProps {
  content: any;
}

const SectionTop: React.FC<SectionTopProps> = ({ content }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <div
      className="flex flex-col items-center justify-center mr-4"
      onClick={() => handleClick("/user/attendance-history")}
    >
      {content.image}
      <p className="text-sm">{content.name}</p>
      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <p className="">{content.name}</p>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{content.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </div>
  );
};

export default SectionTop;
