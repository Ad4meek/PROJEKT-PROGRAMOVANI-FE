import * as React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { chooseTopic } from "../../models/ChooseTopic";

export default function StudentTopicLink(props) {
  const handleChoose = async (e) => {
    console.log(e);
    e.preventDefault()
    const data = await chooseTopic(props._id.$oid)

    window.location.reload()
    console.log(data);
  }

  let rank = (
    <Button variant="contained" color="success" onClick={handleChoose}>
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
      <div id="studentTopicList">
        <div className="flex3">
          <div>
            <p>{props.name}</p>
          </div>
          <div>
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
                  <p>{props.description}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <p>{props.year}</p>
          </div>
          <div>
            <p>{props.subject}</p>
          </div>
          <div>
            <p>{rank}</p>
          </div>
        </div>
      </div>
    </>
  );
}
