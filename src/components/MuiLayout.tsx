import { Box, Stack, Divider, Grid } from "@mui/material";

export const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid", width: "80%" }}
        direction="row-reverse"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
      </Stack>
      {/* Grid component - video 16 */}
      <Grid container my={4} p={1} rowSpacing={3} columnSpacing={4}>
        <Grid item xs="auto" md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
