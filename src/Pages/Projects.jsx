// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CaseStudy from "./Projects/CaseStudy";
import Eir from "./Projects/Eir";
import EirEvo from "./Projects/EirEvo";
import Europcar from "./Projects/Europcar";
import HelenTurkington from "./Projects/HelenTurkington";
import HabitusHealth from "./Projects/HabitusHealth";

export default function Projects() {
  return (
    <Routes>
      <Route path="/" element={<CaseStudy />} />
      <Route path="/habitus-health" element={<HabitusHealth />} />
      <Route path="/eir" element={<Eir />} />
      <Route path="/europcar" element={<Europcar />} />
      <Route path="/helen-turkington" element={<HelenTurkington />} />
      <Route path="/eirevo" element={<EirEvo />} />
      
    </Routes>
  );
}
