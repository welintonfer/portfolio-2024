// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CaseStudy from "./Projects/CaseStudy";
import Eir from "./Projects/Eir";
import EirEvo from "./Projects/EirEvo";
import HelenTurkington from "./Projects/HelenTurkington";

export default function Projects() {
  return (
    <Routes>
      <Route path="/" element={<CaseStudy />} />
      <Route path="/eir" element={<Eir />} />
      <Route path="/helen-turkington" element={<HelenTurkington />} />
      <Route path="/eirevo" element={<EirEvo />} />
    </Routes>
  );
}
