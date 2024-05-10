import { Link, useParams, useNavigate } from "react-router-dom";
import { getTopic, deleteTopic } from "../../models/Topic";
import { useState, useEffect } from "react";

export default function TopicView() {
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
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (topic.name === formData) {
      const data = await deleteTopic(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Topic not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Topic is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Topic view</h1>
      <p>{id}</p>
      <p>{topic.name}</p>
      <p>{topic.legs}</p>
      <p>{topic.color}</p>
      <form>
        <input type="text" placeholder={topic.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatetopic/${id}`}>
        <p>Update topic</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}