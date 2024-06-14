import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTopic } from "../../models/Topic";
import { Link } from "react-router-dom";

export default function TeacherTopicLink(props) {
  let rank = <div className="btnNotChosen">NOT SELECTED</div>;

  if (props.status) {
    rank = <div className="btnChosen">SELECTED</div>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await deleteTopic(props._id.$oid);
    if (data.status === 200) {
      window.location.reload();
    } else {
      setInfo(data.msg);
    }
  };

  return (
    <>
      <div className="flex">
        {/*<p>{props.student_name}</p> */}
        <p>Mirek Kokot</p>
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
            <Typography>{props.description}</Typography>
          </AccordionDetails>
        </Accordion>
        <p>{props.year}</p>
        <p>{props.subject}</p>
        <div>{rank}</div>

        <Link to={`/topicupdate/${props._id.$oid}`}>
          <Button variant="contained">EDIT</Button>
        </Link>

        <div className="delete">
          <Button onClick={handleDelete} variant="contained">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
