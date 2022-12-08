import styled from "styled-components";
import SubTitle from "../../shared/subTitle/SubTitle";
import { TImages, images } from "./imagesBlockHelpers";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 125px;
  height: 115px;
  background-color: #fff;
`;

const ImagesBlock: React.FC = () => {
  return (
    <>
      <SubTitle>Images</SubTitle>

      <Box>
        {images.map((image: TImages) => (
          <Img src={image.src} key={image.src} alt={image.alt} />
        ))}
      </Box>
    </>
  );
};

export default ImagesBlock;
