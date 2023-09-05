import React from "react";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButtons } from "./components/MuiButtons";
import { Container } from "@mui/material";

function App() {
  return (
    <Container className="App">
      {/* video - 3 */}
      <MuiTypography />
      <hr />

      {/* video - 4 */}
      <MuiButtons />
    </Container>
  );
}

export default App;
