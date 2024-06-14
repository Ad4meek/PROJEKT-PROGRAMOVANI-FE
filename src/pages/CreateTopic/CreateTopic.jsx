import "./CreateTopic.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTopic } from "../../models/Topic";

export default function CreateTopic() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    year: "",
    type: "",
    subject: "",
  });
  const [info, setInfo] = useState();
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, description, year, type, subject } = formData;
    setIsFormValid(name && description && year && type && subject);
  }, [formData]);

  const postForm = async () => {
    const topic = await createTopic(formData);

    if (topic.status === 200) {
      return navigate("/teacher");
    } else {
      setInfo(topic.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (isFormValid) {
      postForm();
    } else {
      setInfo("Please fill in all required fields.");
    }
  };

  return (
    <>
      <div id="teacher">
        <Link to={"/teacher"}>
          <Button variant="outlined">Go back</Button>
        </Link>
        <div className="container">
          <div className="columnLeft">
            <TextField
              id="filled-basic"
              label="Název práce"
              variant="filled"
              name="name"
              inputProps={{ maxLength: 15 }}
              required
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <div className="columnRight">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" required>
                Školní rok
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="year"
                onChange={handleChange}
              >
                <FormControlLabel
                  value="2023/24"
                  control={<Radio />}
                  label="2023/24"
                />
                <FormControlLabel
                  value="2024/25"
                  control={<Radio />}
                  label="2024/25"
                />
                <FormControlLabel
                  value="2025/26"
                  control={<Radio />}
                  label="2025/26"
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
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Ročníková práce"
                  control={<Radio />}
                  label="Ročníková práce"
                />
                <FormControlLabel
                  value="Maturitní práce"
                  control={<Radio />}
                  label="Maturitní práce"
                />
                <FormControlLabel
                  value="Bakalářská práce"
                  control={<Radio />}
                  label="Bakalářská práce"
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
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Hardware"
                  control={<Radio />}
                  label="Hardware"
                />
                <FormControlLabel
                  value="Programování"
                  control={<Radio />}
                  label="Programování"
                />
                <FormControlLabel
                  value="Webové aplikace"
                  control={<Radio />}
                  label="Webové aplikace"
                />
                <FormControlLabel
                  value="Počítačové sítě"
                  control={<Radio />}
                  label="Počítačové sítě"
                />
                <FormControlLabel
                  value="Číslicová technika"
                  control={<Radio />}
                  label="Číslicová technika"
                />
              </RadioGroup>
            </FormControl>

            <br />
            <br />
          </div>
        </div>
        {info && <div className="info">{info}</div>}
        <div className="sendBtn">
          <Button
            onClick={handlePost}
            variant="contained"
            endIcon={<SendIcon />}
            disabled={!isFormValid}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
