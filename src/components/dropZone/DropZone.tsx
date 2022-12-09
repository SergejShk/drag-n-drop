import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

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
  cursor: context-menu;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #b3e7e9;
  }
`;

interface IProps {
  textItems: string[];
}

const DropZone: React.FC<IProps> = ({ textItems }) => {
  const nodeRef = React.useRef(null);

  return (
    <Box>
      <DropArea>
        {textItems.length > 0 &&
          textItems.map((item, idx) => (
            <Draggable key={idx} nodeRef={nodeRef}>
              <TextItem ref={nodeRef}>{item}</TextItem>
            </Draggable>
          ))}
      </DropArea>
    </Box>
  );
};

export default DropZone;
