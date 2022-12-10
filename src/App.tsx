import { useState } from "react";
import styled from "styled-components";
import AppBar from "./components/appBar/AppBar";
import DropZone from "./components/dropZone/DropZone";
import { TItemImg } from "./types/dragItems";

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const defaultImg = {
  id: "",
  type: "img",
  src: "",
  alt: "",
  position: {
    x: 0,
    y: 0,
  },
};

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
