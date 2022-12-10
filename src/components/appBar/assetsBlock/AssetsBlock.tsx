import { Dispatch, SetStateAction } from "react";
import { TItemImg } from "../../../types/dragItems";
import TitleBlock from "../shared/titleBlock/TitleBlock";
import AddText from "./addText/AddText";
import ImagesBlock from "./imagesBlock/ImagesBlock";

interface IProps {
  setTextItems: Dispatch<SetStateAction<string>>;
  setItemImg: Dispatch<TItemImg>;
}

const AssetsBlock: React.FC<IProps> = ({ setTextItems, setItemImg }) => {
  return (
    <>
      <TitleBlock>Assets</TitleBlock>

      <AddText setTextItems={setTextItems} />
      <ImagesBlock setItemImg={setItemImg} />
    </>
  );
};

export default AssetsBlock;
