import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
// icon import - video -4
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButtons = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log("1", { formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
    console.log(formats);
  };
  return (
    <Stack spacing={4}>
      {/* button variants - 3 */}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* Anchor tags element from button - href */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          text - google.com
        </Button>
        <Button variant="contained" href="https://google.com">
          contained - google.com
        </Button>
        <Button variant="outlined" href="https://google.com">
          outlined - google.com
        </Button>
      </Stack>

      {/* Colors - defaults - 6*/}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Seconday
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* size - buttons - small / medium / large */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>

        {/* icon without text- we can also give color and size props */}
        <IconButton aria-label="send" color="success" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack spacing={2} direction="row">
        {/* disableElevation - with contained - shadow not show */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send - disableElevation
        </Button>

        {/* disableRipple - with contained - riple not show [effect on click] */}
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send - disbaleRipple
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        {/* onlclick - same as before */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert("Onclick sample button")}
        >
          Onclick sample button
        </Button>
      </Stack>

      {/* ButtonGroup - grouping or making component with buttons -  */}
      <Stack direction="row" spacing={4}>
        {/* first group */}
        <ButtonGroup
          variant="contained"
          size="small"
          color="secondary"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left Clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        {/* second group */}
        <ButtonGroup variant="text" size="small" color="success">
          <Button>Left</Button>
          <Button onClick={() => alert("Center Clicked")}>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        {/* third group */}
        <ButtonGroup variant="outlined" size="medium" color="primary">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button onClick={() => alert("Right Clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* ToggleButton & TogglButtonGroup  - video - 6 */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="secondary"
          orientation="vertical"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />{" "}
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />{" "}
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />{" "}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
