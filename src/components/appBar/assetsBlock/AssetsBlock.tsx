import { Dispatch, SetStateAction } from "react";
import TitleBlock from "../shared/titleBlock/TitleBlock";
import AddText from "./addText/AddText";
import Images from "./imagesBlock/ImagesBlock";

interface IProps {
  setTextItems: Dispatch<SetStateAction<string[]>>;
}

const AssetsBlock: React.FC<IProps> = ({ setTextItems }) => {
  return (
    <>
      <TitleBlock>Assets</TitleBlock>

      <AddText setTextItems={setTextItems} />
      <Images />
    </>
  );
};

export default AssetsBlock;
