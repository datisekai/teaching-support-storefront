import React from "react";
interface ItemSectionProps {
  content: any;
}
const ItemSection: React.FC<ItemSectionProps> = ({ content }) => {
  return (
    <div>
      <p className="text-sm font-normal leading-tight truncate-2-lines">
        {content.title}
      </p>
      <p className="text-xs text-muted-foreground">
        {content.className} - {content.updatedAt}
      </p>
      <div className="border-b-2 pt-4 mb-4"></div>
    </div>
  );
};

export default ItemSection;
