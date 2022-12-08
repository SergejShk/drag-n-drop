import styled from "styled-components";

const Box = styled.div`
  width: calc(100vw - 300px);
  background-color: #fff;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const DropArea = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 0 30px -15px #343a40;
  border: 2px solid #00979e;
  overflow: hidden;
`;

const DropZone: React.FC = () => {
  return (
    <Box>
      <DropArea />
    </Box>
  );
};

export default DropZone;
