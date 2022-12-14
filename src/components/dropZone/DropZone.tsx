import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TItem, TItemImg } from "../../types/dragItems";
import DropItems from "./dropItems/DropItems";
import { Box, DropArea } from "./DropZone.styled";

interface IProps {
  textItems: string;
  itemImg: TItemImg;
}

const DropZone: React.FC<IProps> = ({ textItems, itemImg }) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    textItems &&
      setItems((prev) => [
        ...prev,
        { type: "text", text: textItems, id: uuidv4() },
      ]);
  }, [textItems]);

  const onHandleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onHandleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (Object.keys(itemImg).length < 1) return;

    const newPosition = {
      x: e.clientX - areaRef.current?.offsetLeft! - itemImg.position.x,
      y: e.clientY - areaRef.current?.offsetTop! - itemImg.position.y,
    };

    setItems((prev) => [
      ...prev,
      { ...itemImg, position: newPosition, id: uuidv4() },
    ]);
  };

  return (
    <Box>
      <DropArea
        ref={areaRef}
        onDragOver={onHandleDragOver}
        onDrop={onHandleDrop}
      >
        {items.length > 0 && <DropItems items={items} />}
      </DropArea>
    </Box>
  );
};

export default DropZone;
