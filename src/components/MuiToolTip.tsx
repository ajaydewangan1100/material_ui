import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiToolTip = () => {
  return (
    <Tooltip
      title="delete"
      placement="right-start"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
