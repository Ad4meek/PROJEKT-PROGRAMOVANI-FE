import "./Teacher.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTopic } from "../../models/Topic";

export default function Teacher() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const topic = await createTopic(formData);
    if (topic.status === 201) {
      redirectToSuccessPage(topic.payload._id);
    } else {
      setInfo(topic.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdcat/${id}`);
  };
  return (
    <>
      <div id="teacher">
        <div className="container">
          <div className="columnLeft">
            <TextField
              id="filled-basic"
              label="Název práce"
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Popis"
              placeholder="Popis"
              multiline
              rows={12}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br />
          <br />
          <div className="columnRight">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Školní rok
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="2023/24"
                  control={<Radio />}
                  label="2023/24"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="2024/25"
                  control={<Radio />}
                  label="2024/25"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="2025/26"
                  control={<Radio />}
                  label="2025/26"
                  onChange={(e) => handleChange(e)}
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormGroup>
              <FormLabel>Typ práce</FormLabel>
              <FormControlLabel
                control={<Checkbox />}
                label="Ročníková práce"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Maturitní práce"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bakalářská práce"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <br />
            <br />
            <FormGroup>
              <FormLabel>Předmět</FormLabel>
              <FormControlLabel
                control={<Checkbox />}
                label="Hardware"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Programování"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Webové aplikace"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Počítačové sítě"
                onChange={(e) => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Číslicová technika"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <br />
            <br />
          </div>
        </div>
        <div className="sendBtn">
          <Button
            onClick={handlePost}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
