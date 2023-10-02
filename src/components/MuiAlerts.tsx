import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const MuiAlerts = () => {
  return (
    <Stack spacing={2}>
      {/* Normal alerts */}
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>
      {/* outlined errors */}
      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert
      </Alert>
      {/* filled alert */}
      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
      <br />

      <Stack spacing={2}>
        {/* change default icon & add actions */}
        change default icon & add actions
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close alert")}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={<Button color="inherit" size='small'>undo</Button>}
        >
          <AlertTitle>Success - changed icon</AlertTitle>
          Icon changed - success alert
        </Alert>
      </Stack>
    </Stack>
  );
};
