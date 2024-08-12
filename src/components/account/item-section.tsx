import React from "react";
import { Card, CardContent } from "../ui/card";
import { Heart } from "lucide-react";

interface IITEMSECTION {
  content: any;
}

const ItemSection: React.FC<IITEMSECTION> = ({ content }) => {
  return (
    <Card className="text-start rounded-xl">
      <CardContent className="px-2 pt-2">
        <Heart />
        <div className="mt-2">
          <p className="text-xs text-slate-500">{content.title}</p>
          <p className="font-bold">{content.decription}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemSection;
