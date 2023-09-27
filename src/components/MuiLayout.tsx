import { Box } from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      {/* Box with normal css things given by - sx */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "200px",
          height: "150px",
          padding: "14px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Mui Layout component - Box
      </Box>

      {/* Used with system properties */}
      <Box
        display="flex"
        height="150px"
        width="150px"
        bgcolor="success.light"
        m={4}
        p={2}
        color="error.dark"
      >
        css directly used - Box
      </Box>
    </>
  );
};
