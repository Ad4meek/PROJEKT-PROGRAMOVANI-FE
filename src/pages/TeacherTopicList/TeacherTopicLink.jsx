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
      <div id="teacherTopicList">
        <div className="flex">
          {/*<p>{props.student}</p> */}
          <div>
            <p>Mirek Kokot</p>
          </div>
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
                <Typography>{props.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <p>{props.year}</p>
          </div>
          <div>
            <p>{props.subject}</p>
          </div>
          <div>{rank}</div>
          <div>
            <Link to={`/topicupdate/${props._id.$oid}`}>
              <div className="Button">EDIT</div>
            </Link>
          </div>
          <div className="Button" onClick={handleDelete}>
            DELETE
          </div>
        </div>
      </div>
    </>
  );
}
