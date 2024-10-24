import { motion } from "framer-motion";

import figma from "../../assets/img/skills/figma.svg";
import psd from "../../assets/img/skills/ps.svg";
import ai from "../../assets/img/skills/ai.svg";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import ContactLabel from "../../Components/ContactLabel";
import Footer from "../../Components/Footer";

import europcarLogo from "../../assets/img/europcar/Europcar-logo@2x.png"
import europcarPhase1 from "../../assets/img/europcar/europcar-phase-1@2x.png"
import europcarPhase2 from "../../assets/img/europcar/europcar-phase-2@2x.png"
import europcarWireframe from "../../assets/img/europcar/europcar-wireframe.png"
import europcarUI from "../../assets/img/europcar/europcar-ui.png"
import invisionApp from "../../assets/img/europcar/europcar-invisionapp@2x.png"




import ScrollToTopOnMount from "../../Components/KeepTopPosition";



export default function Europcar() {

  console.log("Renderizando Europcar...");

  const skills = [
    {
      id: 1,
      logo: figma,
      alt: "Figma",
      color: "#1E1E1E",
      borderColor: "#2C2C2C",
      bg: "#fff",
    },
    {
      id: 2,
      logo: psd,
      alt: "Adobe Photoshop",
      color: "#080138",
      borderColor: "#5F97D7",
      bg: "#fff",
    },
    {
      id: 3,
      logo: ai,
      alt: "Adobe Illustrator",
      color: "#080138",
      borderColor: "#eda741",
      bg: "#fff",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <main className="case-study-single">
        <section className="case-study-single__herocase">
          <img className="py__32" src={europcarLogo} alt="Europcar Logo" />
          <div className="overview">
            <h1 className="h1">Europcar Project Overview</h1>
            <p>
              <strong>Redefining Car Rentals for Europcar During COVID-19: </strong>During the unprecedented times of 2020, our team reimagined Europcar's rental experience. With public health measures in place, we designed a seamless, contactless journey that allowed customers to rent and pick up cars directly from the garage eliminating the need for in-person contact at kiosks.
            </p>
          </div>
        </section>
        <section className="case-study-single__design-process">
          <h2 className="h2">Design Process</h2>
            <p>
              <strong>Design Framework and Strategy: Inspired by Jake Knapp’s Sprint: </strong>While the sprint process extended beyond the typical five days outlined in Jake Knapp's <em>"Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days,"</em> we applied its core principles to design, prototype, and validate a full user journey within two weeks. The use of iterative design, rapid prototyping, and cross-functional collaboration ensured alignment between user needs and <strong>business goals</strong>.
            </p>
            <h3 className="h4 text-left "><strong>Objectives and Challenges</strong></h3>
          <ol className="ol-list">
              <li><strong>Create</strong> a fully digital, contactless rental experience.</li>
              <li><strong>Enable fast verification</strong> with real-time photo uploads.</li>
              <li><strong>Design an intuitive user journey</strong> for seamless pick-up and return processes.</li>
          </ol>
          
          <h3 className="h3">Design Toolkit</h3>
          <ul>
            {skills.map((skill) => (
              <li
                className="skill-icon"
                key={skill.id}
                style={{
                  backgroundColor: `${skill.bg}`,
                  boxShadow: `0.74519px 0.74519px 0px 0px ${skill.color}, 1.49038px 1.49038px 0px 0px ${skill.color}, 2.23558px 2.23558px 0px 0px ${skill.color}`,
                  border: `2px solid  ${skill.borderColor}`,
                }}
              >
                <img src={skill.logo} alt={skill.alt} />
              </li>
            ))}
          </ul>
        </section>
        <section className="case-study-single__content">
          <article className="sub-content">
            <h2 className="h2">Process and Workflow</h2>
            <p>
                <strong>Phase 1: Wireframing and User Flow Design </strong> <br /> This phase mapped the core touchpoints such as ID uploads, vehicle unlocking, and return inspections ensuring every interaction was intuitive.
            </p>
            <img
              src={europcarPhase1}
              alt="Europcar Phase 1 Sprint"
              className="img1 rounded__6"
            />
            <p>
              <strong>Wireframe at full user journey</strong>
            </p>
            <img
              src={europcarWireframe}
              alt="Europcar Wireframe"
              className="img1 rounded__6"
            />
            <p></p>
          </article>

          <article className="sub-content">
            <h2 className="h2">Phase 2: UI Design and Prototyping (InVision App)</h2>
            <img
              src={invisionApp}
              alt="Phase 2: UI Design and Prototyping (InVision App)"
              className="img1 rounded__6"
            />
            <p>
              The wireframes were refined into high-fidelity designs, ready for seamless developer handoff. These prototypes were built pixel-perfect, ensuring consistency.
            </p>
            <img
              src={europcarPhase2}
              alt="Europcar Phase 2 Sprint"
              className="img1 rounded__6"
            />
            <p>
              A <strong>flowchart</strong>of the full user journey will be included to visually represent the end-to-end process, helping stakeholders grasp the complete flow at a glance.
            </p>
            <img
              src={europcarUI}
              alt="Europcar UI"
              className="img1 rounded__6"
            />
            
          </article>

          <article className="sub-content">
            <h2 className="h2">Phase 3: Validation and Iteration</h2>
              <p>
              Regular feedback loops with Europcar stakeholders enabled fast adjustments. We conducted usability testing and refined the prototypes based on real-time feedback, guaranteeing a smooth experience across various scenarios.
              </p>
            
            <p>
              <strong>Key Features and Innovations:</strong>
            </p>
            <div className="list">
              <ul>
                <li><strong>ID and License Verification:</strong> Customers could quickly upload photos, starting the rental within minutes.</li>
                <li><strong>Contactless Car Access:</strong> Real-time photo validation allowed car unlocks without visiting a counter.</li>
                <li><strong>Automated Return Process:</strong>  Customers followed a photo-based checklist for transparent returns, reducing disputes.</li>
              </ul>
            </div>

          </article>






          <article className="sub-content">
            <h2 className="h2">Results and Impact</h2>
              <p>
              This project set a new benchmark for Europcar’s digital transformation, offering a future-ready, scalable rental model.
              </p>
            
            <p>
              <strong>Key Outcomes:</strong>
            </p>
            <div className="list">
              <ul>
                <li><strong>Improved customer satisfaction:</strong> with a self-service model.</li>
                <li><strong>Reduced rental times:</strong> Reduced rental times by eliminating wait times at counters.</li>
                <li><strong>Scalable solution:</strong> ready for other Europcar locations.</li>
              </ul>
            </div>
          </article>



          <article className="sub-content">
            <h2 className="h2">Conclusion: A New Standard in Car Rentals</h2>
              <p>
              This project stands as a testament to how <strong>thoughtful UX design</strong>, agile collaboration, and innovation can transform industries even in the most challenging times. The contactless journey we developed not only met public health requirements but also aligned perfectly with Europcar’s goals to enhance the user experience.
              </p>
            
            <p>
            This case study exemplifies how I combine <strong>design thinking, rapid prototyping, and a user-centered approach</strong> to deliver impactful solutions that drive business success.
            </p>
            
          </article>
          
        </section>
      </main>
      <ContactLabel />
      <Footer />
    </motion.div>
  );
}


