import React, { Dispatch } from "react";
import { defaultImg } from "../../../../utils/defaultImg";
import SubTitle from "../../shared/subTitle/SubTitle";
import { images } from "./imagesBlockHelpers";
import { TItemImg } from "../../../../types/dragItems";
import { Box, Img, ImgBox } from "./ImagesBlock.styled";

interface IProps {
  setItemImg: Dispatch<TItemImg>;
}

const ImagesBlock: React.FC<IProps> = ({ setItemImg }) => {
  const onDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    const newEl = {
      id: e.currentTarget.id,
      type: "img",
      src: e.currentTarget.src,
      alt: e.currentTarget.alt,
      position: {
        x: e.currentTarget.width,
        y: e.currentTarget.height,
      },
    };
    setItemImg(newEl);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    setItemImg(defaultImg);
  };

  return (
    <>
      <SubTitle>Images</SubTitle>

      <Box>
        {images.map((image) => (
          <ImgBox key={image.src}>
            <Img
              id={image.id}
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
