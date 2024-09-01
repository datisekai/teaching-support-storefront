import React from "react";
import { Card, CardContent } from "../ui/card";
import { Heart } from "lucide-react";

interface IItemSection {
  content: any;
}

const ItemSection: React.FC<IItemSection> = ({ content }) => {
  return (
    <Card className="rounded-xl w-full mb-2">
      <CardContent className="px-2 py-4 flex items-center">
        {content.icon}
        <div className="ml-4">
          <p className="text-xs text-slate-500">{content.title}</p>
          <p className="font-bold">{content.result}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemSection;
