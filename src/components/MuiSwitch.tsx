import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

export const MuiSwitch = () => {
  // for single checkbox
  const [checked, setChecked] = useState(false);
  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //   for group of checkbox
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    // sngle switch
    <Box>
      <FormControlLabel
        label="dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />

      {/* multiple switch group */}
      <Box>
        <FormControl error={!skills.length} required>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  size="small"
                  color="success"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  size="small"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Switch
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                  size="medium"
                  color="primary"
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
