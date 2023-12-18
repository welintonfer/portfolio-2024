import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "../Pages/Homepage";
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import WhatIdo from "../Pages/WhatIDo";
import PresentationFigma from "../Pages/PresentationFigma";

export default function AppRouter() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/what-i-do" element={<WhatIdo />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/ux-audit-habitus" element={<PresentationFigma />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
