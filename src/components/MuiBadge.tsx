import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row" my="20px">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge variant='dot' color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" showZero max={999}>
        <MailIcon />
      </Badge>
      <Badge variant='dot' color="primary" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
