import TitleBlock from "../shared/titleBlock/TitleBlock";
import UploadFile from "./uploadFile/UploadFile";

const UploadImgBlock: React.FC = () => {
  return (
    <>
      <TitleBlock>Upload image</TitleBlock>
      <UploadFile />
    </>
  );
};

export default UploadImgBlock;
