import styled from "styled-components";
import AppBar from "./components/appBar/AppBar";
import DropZone from "./components/dropZone/DropZone";

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const App: React.FC = () => {
  return (
    <Container>
      <AppBar />
      <DropZone />
    </Container>
  );
};

export default App;
