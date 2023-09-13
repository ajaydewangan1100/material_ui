import React from "react";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButtons } from "./components/MuiButtons";
import { Container } from "@mui/material";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";

function App() {
  return (
    <Container className="App">
      {/* video - 3 */}
      <MuiTypography />
      <hr />

      {/* video - 4 */}
      <MuiButtons />
      <hr />

      {/* textFields - video - 7 */}
      <MuiTextField />
      <hr />

      {/* Select component - video 8 */}
      <MuiSelect />
      <hr />
    </Container>
  );
}

export default App;
