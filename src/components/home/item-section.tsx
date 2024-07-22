import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";
interface ItemSectionProps {
  content: any;
}
const ItemSection: React.FC<ItemSectionProps> = ({ content }) => {
  return (
    <div className="flex  border-b-2 py-2 last:border-none">
      <div className="aspect-square ">
        <Image
          src="/images/icons8-page-80.png"
          alt="Image"
          className="rounded-md object-cover"
          width={120}
          height={120}
        />
      </div>

      <div>
        <p className="text-sm font-normal truncate-2-lines">{content.title}</p>
        <p className="text-xs text-muted-foreground">
          {content.className} - {content.updatedAt}
        </p>
      </div>
    </div>
  );
};

export default ItemSection;
