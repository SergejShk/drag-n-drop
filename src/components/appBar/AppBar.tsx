import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import AssetsBlock from "./assetsBlock/AssetsBlock";
import UploadImgBlock from "./uploadImgBlock/UploadImgBlock";

const Box = styled.div`
  width: 300px;
  min-height: 100vh;
  background-color: #edf0f1;
  padding: 20px;
`;

interface IProps {
  setTextItems: Dispatch<SetStateAction<string[]>>;
}

const AppBar: React.FC<IProps> = ({setTextItems}) => {
  return (
    <Box>
      <UploadImgBlock />

      <AssetsBlock setTextItems={setTextItems} />
    </Box>
  );
};

export default AppBar;
