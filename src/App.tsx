import React from "react";
// import css
import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButtons } from "./components/MuiButtons";
import { Container } from "@mui/material";
import { MuiTextField } from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiRating } from "./components/MuiRating";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiLayout } from "./components/MuiLayout";
import { MuiCards } from "./components/MuiCards";
import { MuiAccordian } from "./components/MuiAccordian";
import { MuiImageList } from "./components/MuiImageList";
import { MuiNavBar } from "./components/MuiNavBar";
import { MuiLink } from "./components/MuiLink";
import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiBadge } from "./components/MuiBadge";
import { MuiList } from "./components/MuiList";
import { MuiChip } from "./components/MuiChip";
import { MuiToolTip } from "./components/MuiToolTip";
import { MuiTable } from "./components/MuiTable";

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
      {/* Autocomplete - video 13 */}
      <MuiAutocomplete />
      <hr />
      {/* Layout component - video 14 - 17 */}
      <MuiLayout />
      <hr />
      {/* Card component - video 18 */}
      <MuiCards />
      <hr />
      {/* Accordian - (show & hide) - video 19 */}
      <MuiAccordian />
      <hr />
      {/* ImageList - video 20 */}
      <MuiImageList />
      <hr />
      {/* NavBar - video 21 - 22 */}
      <MuiNavBar />
      <hr />
      {/* Link (acnhor) - video 23 */}
      <MuiLink />
      <hr />
      {/* Breadcrumbs - (Link) - video 24 */}
      <MuiBreadcrumbs />
      <hr />
      {/* Drawer - video 25 */}
      <MuiDrawer />
      <hr />
      {/* Speed Dial - component - video 26 */}
      <MuiSpeedDial />
      <hr />
      {/* Bottom Navigation - video 27 */}
      <MuiBottomNavigation />
      <hr />
      {/* Data Display Components */}
      {/* Avatar - video 28 */}
      <MuiAvatar />
      <hr />
      {/* Badge video 29 */}
      <MuiBadge />
      <hr />
      {/* List - display data as list - video 30 */}
      <MuiList />
      <hr />
      {/* Chip - (to enter information, make selection, filter content or trigger actions) - video 31 */}
      {<MuiChip />}
      <hr />
      {/* Tooltip - video 32 */}
      <MuiToolTip />
      <hr />
      {/* Table - video 33 */}
      <MuiTable />

      <hr />
    </Container>
  );
}

export default App;
