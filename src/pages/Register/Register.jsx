import { Link } from "react-router-dom";
import "./Register.css";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createUser } from "../../models/User";

export default function Register() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const user = await createUser(formData);
    if (user.status === 201) {
      redirectToSuccessPage(user.payload._id);
    } else {
      setInfo(user.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/`)
  }
  return (
    <>
      <div id="container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            CHOOSE STATUS
          </FormLabel>
          <br />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="teacher"
                control={<Radio />}
                label="Teacher"
                onChange={e => handleChange(e)}/>
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                onChange={e => handleChange(e)}/>
            </RadioGroup>
          <br />
          <Button
            className="btnSend"
            variant="contained"
            onClick={handlePost}
            endIcon={<SendIcon />}
          >
            SEND
          </Button>
        </FormControl>
        <br />
        <Link to={"/Login"}>
          <Button className="btnLogin" variant="outlined">
            LOGIN
          </Button>
        </Link>
      </div>
    </>
  );
}
