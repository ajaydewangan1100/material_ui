import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [input, setInput] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form  " required />
        <TextField label="Form input" helperText="Do not share password" />
        <TextField label="Password" type="password" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Deegree- disabled" variant="outlined" disabled />
        <TextField
          label="read only"
          variant="filled"
          inputProps={{ readOnly: true }}
        />
        <TextField label="name" variant="standard" />
      </Stack>
      {/* input Adornment */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          variant="standard"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      {/* error and conditional error helper text */}
      <Stack direction="row" spacing={2}>
        <TextField label="Error and required input" error required />
        <TextField
          label="Conditional helperText"
          aria-required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          error={!input}
          helperText={!input ? "required" : "do not share details"}
        />
      </Stack>
    </Stack>
  );
};
