import { useState } from "react";
import styled from "styled-components";
import AppBar from "./components/appBar/AppBar";
import DropZone from "./components/dropZone/DropZone";
import { TItemImg } from "./types/dragItems";
import { defaultImg } from "./utils/defaultImg";

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const App: React.FC = () => {
  const [textItems, setTextItems] = useState("");
  const [itemImg, setItemImg] = useState<TItemImg>(defaultImg);

  return (
    <Container>
      <AppBar setTextItems={setTextItems} setItemImg={setItemImg} />
      <DropZone textItems={textItems} itemImg={itemImg} />
    </Container>
  );
};

export default App;
