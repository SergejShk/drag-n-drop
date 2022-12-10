import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import { TItemImg } from "../../types/dragItems";
import { Box, DropArea, ImgItem, TextItem } from "./DropZone.styled";

interface IProps {
  textItems: string;
  itemImg: TItemImg;
}

const DropZone: React.FC<IProps> = ({ textItems, itemImg }) => {
  const nodeRef = useRef(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<{}[]>([]);

  useEffect(() => {
    textItems &&
      setItems((prev) => [...prev, { type: "text", text: textItems }]);
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
        {/* {textItems.length > 0 &&
          textItems.map((item, idx) => (
            <Draggable key={idx} nodeRef={nodeRef}>
              <TextItem ref={nodeRef}>{item}</TextItem>
            </Draggable>
          ))} */}

        {items.length > 0 &&
          items.map((item: any, idx) => (
            <Draggable
              key={idx}
              nodeRef={nodeRef}
              defaultPosition={item.position}
            >
              {item.type === "img" ? (
                <ImgItem
                  src={item.src}
                  alt={item.alt}
                  ref={nodeRef}
                  draggable={false}
                />
              ) : (
                <TextItem ref={nodeRef}>{item.text}</TextItem>
              )}
            </Draggable>
          ))}
      </DropArea>
    </Box>
  );
};

export default DropZone;
