import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

export const MuiAutocomplete = () => {
  // for single value selection
  const skills = ["HTML", "CSS", "JS", "TYPESCRIPT", "REACT"];

  const [value, setValue] = useState<string | null>(null);
  //   console.log({ value });

  //   for multiple value selction
  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  const [skill, setSkill] = useState<Skill | null>(null);
  //   console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      {/* for single value */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      {/* for multiple value */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
