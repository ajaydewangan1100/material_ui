import {
  Box,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

export const MuiMasonry = () => {
  return (
    <Stack spacing={2} direction="row">
      {/* normal use of - Masonry */}
      <Box sx={{ width: 500, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height,
                border: "1px solid",
                bgcolor: `#${index}${index}${index}`,
              }}
            >
              {index + 1}
            </Paper>
          ))}
        </Masonry>
      </Box>

      {/* Masonry with - Accordion */}
      <Box sx={{ width: 550, minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                border: "1px solid",
              }}
            >
              <Accordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content lorem</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
};
