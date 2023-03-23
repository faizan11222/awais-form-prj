import { Container } from "@mui/system";
import Tarif from "./components/Tarif";

function App() {
  return (
    <div style={{marginTop: "100px"}}>
      <Container fixed>
        <Tarif />
      </Container>
    </div>
  );
}

export default App;
