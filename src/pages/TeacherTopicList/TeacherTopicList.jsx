import { Link } from "react-router-dom";
import TeacherTopicLink from "./TeacherTopicLink";
import { useState, useEffect } from "react";
import { getTopics } from "../../models/Topic";
import "./TeacherTopicList.css"

export default function TopicList() {
  const [topics, setTopics] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    // const data = await getTopics();
    const data = {
      status: 200,
      payload: [
        {
          name: "ganggang",
          year: "2024/28",
          subject: "bRRRRRRRR",
        },
        {
          name: "ganggang",
          year: "2024/28",
          subject: "bRRRRRRRR",
        },
        {
          name: "ganggang",
          year: "2024/28",
          subject: "bRRRRRRRR",
        },
        {
          name: "ganggang",
          year: "2024/28",
          subject: "bRRRRRRRR",
        },
        {
          name: "ganggang",
          year: "2024/28",
          subject: "bRRRRRRRR",
        },
      ],
    };
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTopics(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Topics not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Topics are loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Topic list</h1>
      <div className="line"></div>
      {topics.map((topic, index) => (
        <TeacherTopicLink key={index} {...topic} />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
