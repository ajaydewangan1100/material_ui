import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chips) => chips !== chipToDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small"></Chip>
      <Chip
        label="chip outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      ></Chip>
      <Chip
        label="chip"
        color="primary"
        size="medium"
        icon={<FaceIcon />}
      ></Chip>

      {/* as button */}
      <Chip
        label="click"
        color="success"
        onClick={() => alert("Chip clicked")}
      />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("Chip clicked")}
        onDelete={() => alert("Delete handler called")}
      />

      {/* delete working chip  */}
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
