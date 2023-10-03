import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      {/* circular progress */}
      <CircularProgress />
      <CircularProgress color="error" />
      <CircularProgress variant="determinate" value={70} />

      {/* Linear Progress */}
      <LinearProgress />
      <LinearProgress color="error" />
      <LinearProgress variant="determinate" value={70} />
    </Stack>
  );
};
