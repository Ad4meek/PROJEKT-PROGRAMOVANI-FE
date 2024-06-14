import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TeacherTopicList from "./pages/TeacherTopicList/TeacherTopicList";
import CreateTopic from "./pages/CreateTopic/CreateTopic";
import StudentTopicList from "./pages/StudentTopicList/StudentTopicList";
import TopicUpdateForm from "./pages/TopicUpdateForm/TopicUpdateForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student" element={<StudentTopicList />} />
        <Route path="/createtopic" element={<CreateTopic />} />
        <Route path="/teacher" element={<TeacherTopicList />} />
        <Route path="/topicupdate/:id" element={<TopicUpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}