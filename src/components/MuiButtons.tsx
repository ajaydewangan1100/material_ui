import { Stack, Button, IconButton } from "@mui/material";
// icon import - video -4
import SendIcon from "@mui/icons-material/Send";

export const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      {/* button variants - 3 */}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
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
    </Stack>
  );
};
