import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { TItemImg } from "../../../../types/dragItems";
import SubTitle from "../../shared/subTitle/SubTitle";
import { images } from "./imagesBlockHelpers";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ImgBox = styled.div`
  width: 125px;
  height: 115px;
  background-color: #fff;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

interface IProps {
  setItemImg: Dispatch<TItemImg>;
}

const ImagesBlock: React.FC<IProps> = ({ setItemImg }) => {
  const [img, setImg] = useState({});

  const onDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    const newEl = {
      id: e.currentTarget.id,
      type: "img",
      src: e.currentTarget.src,
      alt: e.currentTarget.alt,
      position: { x: e.currentTarget.width, y: e.currentTarget.height },
    };
    setItemImg(newEl);
    setImg(newEl);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    setItemImg({
      id: "",
      type: "img",
      src: "",
      alt: "",
      position: {
        x: 0,
        y: 0,
      },
    });
  };

  return (
    <>
      <SubTitle>Images</SubTitle>

      <Box>
        {images.map((image) => (
          <ImgBox key={image.src}>
            <Img
              src={image.src}
              alt={image.alt}
              draggable
              onDragStart={onDragStart}
              onDragEnd={handleDragEnd}
            />
          </ImgBox>
        ))}
      </Box>
    </>
  );
};

export default ImagesBlock;
