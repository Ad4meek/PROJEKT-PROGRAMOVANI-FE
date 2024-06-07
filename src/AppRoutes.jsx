import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TeacherTopicList from "./pages/TeacherTopicList/TeacherTopicList";
import StudentTopicView from "./pages/StudentTopicView/StudentTopicView";
import TeacherTopicView from "./pages/TeacherTopicView/TeacherTopicView";
import CreateTopic from "./pages/CreateTopic/CreateTopic";
import StudentTopicList from "./pages/StudentTopicList/StudentTopicList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student" element={<StudentTopicList />} />
        <Route path="/createtopic" element={<CreateTopic />} />
        <Route path="/teacher" element={<TeacherTopicList />} />
        <Route path="/studenttopicview/:id" element={<StudentTopicView />} />
        <Route path="/teachertopicview/:id" element={<TeacherTopicView />} />
      </Routes>
    </BrowserRouter>
  );
}