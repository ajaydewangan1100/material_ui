import React from "react";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButtons } from "./components/MuiButtons";
import { Container } from "@mui/material";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
// import css
import "./App.css";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiRating } from "./components/MuiRating";

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

      {/* Radio Button - video 9 */}
      <MuiRadioButton />
      <hr />

      {/* Checkbox - video 10 */}
      <MuiCheckbox />
      <hr />

      {/* switch - video 11 */}
      <MuiSwitch />
      <hr />

      {/* Rating - video 12 */}
      <MuiRating />
      <hr />
    </Container>
  );
}

export default App;
