import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExapnded: boolean, panel: string) => {
    setExpanded(isExapnded ? panel : false);
  };
  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_event, isExapnded) => handleChange(isExapnded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            voluptates dolores eius expedita omnis inventore officia nulla quae
            repudiandae temporibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_event, isExapnded) => handleChange(isExapnded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            voluptates dolores eius expedita omnis inventore officia nulla quae
            repudiandae temporibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_event, isExapnded) => handleChange(isExapnded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            voluptates dolores eius expedita omnis inventore officia nulla quae
            repudiandae temporibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
