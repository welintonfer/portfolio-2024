import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import LightBg from "../Components/LightBg";
import HeaderOne from "../Components/HeaderOne";
import Hero from "../Components/Hero";
import TechnologiesMaster from "../Components/TechnologiesMaster";
import MyProcess from "../Components/MyProcess";
import CaseStudy from "../Components/CaseStudy";
import ContactLabel from "../Components/ContactLabel";
import Footer from "../Components/Footer";

import projectsData from "../data/projectsData";

export default function Homepage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <LightBg />
      <HeaderOne />
      <Hero />
      <TechnologiesMaster />
      <MyProcess />
      <section className="skills py__24">
        <p className="h2">Case Study</p>
      </section>
      {projectsData.map((project) => (
        <CaseStudy
          showTitle={true}
          key={project.id}
          title={project.title}
          tag={project.tag}
          overview={project.overview}
          caseStudyCover={project.caseStudyCover}
        />
      ))}
      
      <section className="skills py__24">
        <Link className="btn-case-study" to="/projects">See all projects</Link>
      </section>

      <ContactLabel />
      <Footer />
    </motion.div>
  );
}
