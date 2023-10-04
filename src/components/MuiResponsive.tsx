import { Box } from "@mui/material";

export const MuiResponsive = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100, // above 0
          sm: 200, // above 600px
          md: 300, // above 900px
          lg: 400, // above 1200px
          xl: 500, // above 1536px
        },
        bgcolor: "primary.main",
      }}
    ></Box>
  );
};
