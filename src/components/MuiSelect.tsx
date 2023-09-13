import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleMultipleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box>
      <Box width="250px">
        {/* single select dropdown */}
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="Au">Australia</MenuItem>
        </TextField>
      </Box>
      <br />
      <Box width="250px">
        {/* multiple selct dropdown */}
        <TextField
          label="Select Countries"
          select
          value={countries}
          onChange={handleMultipleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Select your country"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="Au">Australia</MenuItem>
        </TextField>
        <br />
      </Box>
    </Box>
  );
};
