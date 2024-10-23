import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseStudy from "./CaseStudy";
import HabitusHealth from "./HabitusHealth";
import Eir from "./Eir";
import Europcar from "./Europcar";
import HelenTurkington from "./HelenTurkington";


export default function ProjectsRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseStudy />} />
        <Route path="/projects/habitus-health" element={<HabitusHealth />} />
        <Route path="/projects/eir" element={<Eir />} />
        <Route path="/projects/europcar" element={<Europcar />} />
        <Route
          path="/projects/helen-turkington"
          element={<HelenTurkington />}
        />
      </Routes>
    </Router>
  );
}
