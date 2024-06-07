import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function TeacherTopicLink(props) {
  return (
    <>
    <div className="flex">
      
      <p>{props.name}</p>
      <p>{props.year}</p>
      <p>{props.subject}</p>
      <Link to={`/topicview/${props._id.$oid}`}>

        <div className="button">
        <Button variant="contained" endIcon={<SendIcon />}>
          Show details
        </Button>
        </div>
      </Link>
      </div>
    </>
  );
}
