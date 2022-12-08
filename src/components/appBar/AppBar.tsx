import styled from "styled-components";
import AssetsBlock from "./assetsBlock/AssetsBlock";
import UploadImgBlock from "./uploadImgBlock/UploadImgBlock";

const Box = styled.div`
  width: 300px;
  min-height: 100vh;
  background-color: #edf0f1;
  padding: 20px;
`;

const AppBar: React.FC = () => {
  return (
    <Box>
      <UploadImgBlock />

      <AssetsBlock />
    </Box>
  );
};

export default AppBar;
