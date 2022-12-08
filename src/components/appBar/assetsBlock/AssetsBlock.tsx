import TitleBlock from "../shared/titleBlock/TitleBlock";
import AddText from "./addText/AddText";
import Images from "./imagesBlock/ImagesBlock";

const AssetsBlock: React.FC = () => {
  return (
    <>
      <TitleBlock>Assets</TitleBlock>

      <AddText />
      <Images />
    </>
  );
};

export default AssetsBlock;
