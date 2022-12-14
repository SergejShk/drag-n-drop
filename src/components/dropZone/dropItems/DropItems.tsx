import { useState, useRef, useEffect } from "react";
import { TItem } from "../../../types/dragItems";
import { ImgItem, TextItem } from "./DropItems.styled";

interface IProps {
  items: TItem[];
}

const DropItems: React.FC<IProps> = ({ items }) => {
  const [id, setId] = useState("");
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    const container = target.parentElement;
    if (!container) return;

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, [id]);

  const handleMouseDown = (e: {
    target: any;
    clientY: number;
    clientX: number;
    currentTarget: any;
  }) => {
    coords.current.startX = e.clientX;
    coords.current.startY = e.clientY;
    coords.current.lastX = e.target.offsetLeft;
    coords.current.lastY = e.target.offsetTop;
    isClicked.current = true;
    setId(e.currentTarget!.id);
  };

  return (
    <>
      {items.map((item: any, idx) => {
        if (item.type === "img") {
          return (
            <ImgItem
              key={idx}
              id={item.id}
              src={item.src}
              alt={item.alt}
              draggable={false}
              style={{ top: item.position.y, left: item.position.x }}
              onMouseDown={handleMouseDown}
            />
          );
        } else {
          return (
            <TextItem key={idx} id={item.id} onMouseDown={handleMouseDown}>
              {item.text}
            </TextItem>
          );
        }
      })}
    </>
  );
};

export default DropItems;
