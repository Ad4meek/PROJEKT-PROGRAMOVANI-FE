import { Link } from "react-router-dom";
import TeacherTopicLink from "./TeacherTopicLink";
import { useState, useEffect } from "react";
import { getTopics } from "../../models/Topic";
import "./TeacherTopicList.css"
import * as React from 'react';
import Button from '@mui/material/Button';

export default function TopicList() {
  const [topics, setTopics] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getTopics();
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
      <h1>List of works</h1>
      <div className="line"></div>
      <Link to={"/teacher"}>
        <div className="btn">
          <Button variant="outlined">Create topic</Button>
        </div>
      </Link>
      
      <div className="pepa">

      {topics.map((topic, index) => (
        <TeacherTopicLink key={index} {...topic} />
      ))}
      </div>
    </>
  );
}