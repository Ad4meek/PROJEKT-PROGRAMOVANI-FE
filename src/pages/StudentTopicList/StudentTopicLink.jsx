import * as React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function StudentTopicLink(props) {
  let rank = (
    <Button variant="contained" color="success">
      CHOOSE
    </Button>
  );
  if (props.status) {
    rank = (
      <Button variant="outlined" color="error">
        CHOOSEN
      </Button>
    );
  }

  return (
    <>
      <div className="flex2">
        <p>{props.name}</p>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Decription</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>{props.descrition}</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <p>{props.year}</p>
        <p>{props.subject}</p>
        <p>{rank}</p>
      </div>
    </>
  );
}
