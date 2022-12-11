import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const ImgBox = styled.div`
  width: 125px;
  height: 115px;
  background-color: #fff;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  /* &:active {
    position: absolute;
    transform: translate(-25%, -25%);
    width: initial;
    height: initial;
  } */
`;
