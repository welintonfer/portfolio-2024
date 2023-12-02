import { Link } from "react-router-dom";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import Footer from "../../Components/Footer";
import CaseStudy from "../../Components/CaseStudy";
import SubHero from "../../Components/SubHero";

import eir from "../../data/eir";
import eirEvo from "../../data/eirEvo";

export default function ProjectList() {
  return (
    <>
      <LightBg />
      <HeaderOne />
      <SubHero />

      {eir.map((project) => (
        <CaseStudy
          showTitle={false}
          key={project.id}
          title={project.title}
          tag={project.tag}
          overview={project.overview}
          caseStudyCover={project.caseStudyCover}
          linkTo={`/projects/eir/${project.id}`} // Ajuste aqui
        />
      ))}

      {eirEvo.map((project) => (
        <CaseStudy
          showTitle={false}
          key={project.id}
          title={project.title}
          tag={project.tag}
          overview={project.overview}
          caseStudyCover={project.caseStudyCover}
          linkTo={project.url}
        />
      ))}

      <Footer />
    </>
  );
}
