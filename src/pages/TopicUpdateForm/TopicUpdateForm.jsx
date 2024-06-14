import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTopic, getTopic } from "../../models/Topic";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function TopicUpdateForm() {
  const { id } = useParams();
  const [topic, setTopic] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTopic(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTopic(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const topic = await updateTopic(id, formData);
    if (topic.status === 200) {
      navigate(`/teacher`);
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

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Topic not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Topic is loading...</p>
      </>
    );
  }

  return (
    /*<>
      <h1>Topic update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={topic.name}
          name="name"
          required
          placeholder="Enter topic name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={topic.legs}
          name="legs"
          required
          placeholder="Enter legs"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={topic.color}
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update topic</button>
      </form>
      <Link to={"/teacher"}>
        <p>Go back</p>
      </Link>
    </>*/
    <>
      <Link to={"/teacher"}>
        <Button variant="outlined">Go back</Button>
      </Link>
      <div id="teacher">
        <div className="container">
          <div className="columnLeft">
            <TextField
              id="filled-basic"
              label="Název práce"
              variant="filled"
              defaultValue={topic.name}
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
              defaultValue={topic.description}
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
                defaultValue={topic.year}
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
                defaultValue={topic.type}
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
                defaultValue={topic.subject}
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
          <Link to={"/teacher"}>
            <Button
              onClick={handlePost}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
