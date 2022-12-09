import { useState } from "react";
import styled from "styled-components";
import AppBar from "./components/appBar/AppBar";
import DropZone from "./components/dropZone/DropZone";

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const App: React.FC = () => {
  const [textItems, setTextItems] = useState<string[]>([]);

  return (
    <Container>
      <AppBar
       setTextItems={setTextItems}
      />
      <DropZone textItems={textItems} />
    </Container>
  );
};

export default App;
