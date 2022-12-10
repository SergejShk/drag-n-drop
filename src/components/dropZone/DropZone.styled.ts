import styled from "styled-components";

export const Box = styled.div`
  width: calc(100vw - 300px);
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const DropArea = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  box-shadow: 0 0 30px -15px #343a40;
  border: 2px solid #00979e;
  overflow: hidden;
`;

export const TextItem = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  cursor: context-menu;

  &:hover {
    border: 1px solid #b3e7e9;
  }

  &:active {
    cursor: move;
    border: 1px solid #00979e;
  }
`;

export const ImgItem = styled.img`
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
