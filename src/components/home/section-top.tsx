import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SectionTopProps {
  content: any;
}

const SectionTop: React.FC<SectionTopProps> = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center mr-4">
      <Image
        width={40}
        height={40}
        src={content.image}
        alt="Image"
        className="rounded-md object-cover"
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <p className="">{content.name}</p>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{content.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SectionTop;
