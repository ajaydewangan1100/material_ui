import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="h5">
        Link
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Link - Secondary
      </Link>
      <Typography variant="body2">
        <Link href="#" color="secondary" underline="hover">
          Link - Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
