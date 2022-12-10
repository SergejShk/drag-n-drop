import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import styled from "styled-components";
import { TItemImg } from "../../types/dragItems";

const Box = styled.div`
  width: calc(100vw - 300px);
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const DropArea = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  box-shadow: 0 0 30px -15px #343a40;
  border: 2px solid #00979e;
  overflow: hidden;
`;

const TextItem = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #b3e7e9;
  }

  &:active {
    cursor: move;
    border: 1px solid #00979e;
  }
`;

const ImgItem = styled.img`
  position: absolute;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #b3e7e9;
  }

  &:active {
    cursor: move;
    border: 1px solid #00979e;
  }
`;

interface IProps {
  textItems: string;
  itemImg: TItemImg;
}

const defaultImg = {
  id: "",
  type: "",
  src: "",
  alt: "",
  position: {
    x: 0,
    y: 0,
  },
};

const DropZone: React.FC<IProps> = ({ textItems, itemImg }) => {
  const nodeRef = useRef(null);
  const areaRef = useRef<HTMLDivElement>();

  const [items, setItems] = useState<{}[]>([]);

  useEffect(() => {
    !textItems &&
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
  console.log(items);
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
