import { Routes, Route } from "react-router-dom";
import ProjectList from "./Projects/ProjectList";
import ProjectDetails from "./Projects/ProjectDetails";

export default function Projects() {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path=":projectId" element={<ProjectDetails />} />
    </Routes>
  );
}
