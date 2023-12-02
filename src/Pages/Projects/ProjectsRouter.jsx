import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseStudy from "./CaseStudy";
import Eir from "./Eir";
import HelenTurkington from "./HelenTurkington";

export default function ProjectsRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseStudy />} />
        <Route path="/projects/eir" element={<Eir />} />
        <Route
          path="/projects/helen-turkington"
          element={<HelenTurkington />}
        />
      </Routes>
    </Router>
  );
}
