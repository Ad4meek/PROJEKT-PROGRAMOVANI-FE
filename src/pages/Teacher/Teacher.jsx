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
    
    if (topic.status === 200) {
      return navigate("/teachertopiclist")
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
              name="name"
              required
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
              name="description"
              required
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
                name="year"
                required
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
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Typ práce
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="type"
                required
              >
                <FormControlLabel
                  value="Ročníková práce"
                  control={<Radio />}
                  label="Ročníková práce"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Maturitní práce"
                  control={<Radio />}
                  label="Maturitní práce"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Bakalářská práce"
                  control={<Radio />}
                  label="Bakalářská práce"
                  onChange={(e) => handleChange(e)}
                />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Předmět</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="subject"
                required
              >
                <FormControlLabel
                  value="Hardware"
                  control={<Radio />}
                  label="Hardware"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Programování"
                  control={<Radio />}
                  label="Programování"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Webové aplikace"
                  control={<Radio />}
                  label="Webové aplikace"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Počítačové sítě"
                  control={<Radio />}
                  label="Počítačové sítě"
                  onChange={(e) => handleChange(e)}
                />
                <FormControlLabel
                  value="Číslicová technika"
                  control={<Radio />}
                  label="Číslicová technika"
                  onChange={(e) => handleChange(e)}
                />
              </RadioGroup>
            </FormControl>

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
