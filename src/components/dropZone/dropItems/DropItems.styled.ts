import styled from "styled-components";

export const TextItem = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
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
