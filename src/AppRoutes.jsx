import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import MainPage from "./pages/MainPage/MainPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}
