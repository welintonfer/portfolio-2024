import LightBg from "../Components/LightBg";
import HeaderOne from "../Components/HeaderOne";
import Hero from "../Components/Hero";
import TechnologiesMaster from "../Components/TechnologiesMaster";
import MyProcess from "../Components/MyProcess";
import CaseStudy from "../Components/CaseStudy";
import ContactLabel from "../Components/ContactLabel";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

import projectsData from "../data/projectsData";

export default function Homepage() {
  return (
    <>
      <ScrollToTopOnMount />
      {/* <LightBg /> */}
      <HeaderOne />
      <Hero />
      <TechnologiesMaster />
      <MyProcess />

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

      <ContactLabel />
      <Footer />
      <LightBg />
    </>
  );
}
