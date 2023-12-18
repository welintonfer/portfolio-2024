import { motion } from "framer-motion";

import figma from "../../assets/img/skills/figma.svg";
import psd from "../../assets/img/skills/ps.svg";
import ai from "../../assets/img/skills/ai.svg";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import ContactLabel from "../../Components/ContactLabel";
import Footer from "../../Components/Footer";

import logo from "../../assets/img/habitus/logo@2x.png";
import img01 from "../../assets/img/habitus/01@2x.png";
import img02 from "../../assets/img/habitus/02@2x.png";
import img03 from "../../assets/img/habitus/03@2x.png";
import img04 from "../../assets/img/habitus/04@2x.png";
import img05 from "../../assets/img/habitus/05@2x.png";
import img06 from "../../assets/img/habitus/06-registration-steps@2x.png";
import img07 from "../../assets/img/habitus/07-onboarding@2x.png";
import img08 from "../../assets/img/habitus/08-onboarding-example@2x.png";
import img09 from "../../assets/img/habitus/09-ui-kit@2x.png";

import ScrollToTopOnMount from "../../Components/KeepTopPosition";

export default function HabitusHealth() {
  console.log("Renderizando Habitus...");

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
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <main className="case-study-single">
        <section className="case-study-single__herocase">
          <img src={logo} alt="eir logo" />
          <div className="overview">
            <h1 className="h1">Habitushealth Project Overview</h1>
            <p>
              <strong>Usability Heuristics & Audi</strong>. o empower
              organisations in ensuring regulatory compliance and fostering a
              healthier, safer workplace environment for employees. For an
              Ecommerce site like the Habitushealth, a good user experience is
              crucial to attracting new customers and creating loyal advocates
              for the future.
            </p>
          </div>
        </section>
        <section className="case-study-single__design-process">
          <h2 className="h2">Design Process</h2>
          <p>
            <strong>About this review</strong>: For an Applications site like
            the Habitushealth, a good user experience is crucial to attracting
            new customers and creating loyal advocates for the future. In this
            review, we are looking for “on-site” issues: Areas that will make
            the user’s journey a smoother one; Any elements that might cause
            friction in the buying process; Any elements that might cause
            friction in the buying process; Room for improvement in relation to
            website navigation.
          </p>
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
            <h2 className="h2">Match between system and the real world</h2>
            <p>
              <strong>Identifying Empty Spaces</strong>: In our UX exploration
              at Habitus Health, we've noticed instances of underutilised spaces
              on pages. It is imperative to strategically fill these gaps,
              aligning with the intended visual hierarchy. By ensuring that
              these spaces are proportionately filled, we maintain a balanced
              composition where the content takes precedence without the
              distraction of excessive whitespace. This approach guarantees a
              seamless and engaging user experience, where every element
              contributes harmoniously to the overall design.
            </p>
            <img
              src={img01}
              alt="Match between system and the real world"
              className="img1"
            />
            <p>
              <strong>Suggestions - Bridging the Gap with Illustrations</strong>
              : In these examples, I strategically incorporated illustrations to
              bridge and fill the empty spaces. This not only ensures a
              consistent mockup but also contributes to a visually balanced
              aesthetic. The intentional use of illustrations harmonises the
              overall design, providing a cohesive and engaging user experience.
            </p>
            <img
              src={img02}
              alt="Bridging the Gap with Illustrations"
              className="img1"
            />
            <p></p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Consistency and standards</h2>
            <p>
              <strong>Problems - Identifying the Need for Consistency</strong> :
              The existing user profile exhibits a satisfactory foundation, yet
              it could benefit from an infusion of heightened consistency and
              information hierarchy to enhance the overall user experience.
            </p>
            <p>
              <strong>Key Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Hierarchy of information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Spacing and sizes
                  </p>
                </li>
              </ul>
            </div>
            <img src={img03} alt="Consistency and standards" className="img1" />
            <p>
              <strong>Suggestions - Improving Consistency</strong> : In the
              proposed design, I strategically employed information hierarchy by
              utilising iconography, effectively segregating specific elements.
              This implementation serves to optimise the user journey, fostering
              a more seamless and intuitive navigation experience.
            </p>
            <p>
              <strong>Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Strategic Information Hierarchy
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Iconography Utilisation
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Enhanced User Journey
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article className="sub-content">
            <h2 className="h2">Aesthetic and minimalist design</h2>
            <p>
              <strong>Problems - Optimising the Workout Section</strong> : While
              the Workout section isn't inherently flawed, the predominant use
              of white elements contributes to a visually cold page. To enhance
              the user experience, consider introducing warmer color tones or
              incorporating visually comforting design elements to create a more
              inviting and engaging interface.
            </p>
            <p>
              <strong>Key Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Visual Harmony Enhancement.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    User Experience Optimisation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Design Consistency Consideration.
                  </p>
                </li>
              </ul>
            </div>
            <img
              src={img04}
              alt="Aesthetic and minimalist design"
              className="img1"
            />
            <p>
              <strong>Suggestions - Improving Consistency</strong> : In the
              proposed design iteration, I strategically emphasized section
              division by incorporating images to exemplify each exercise for
              the user. Through meticulous attention to consistency, I aimed to
              bring prominence to each section, fostering a more visually
              cohesive and user-friendly interface.
            </p>
            <p>
              <strong>Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Sectional Clarity Emphasis.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Consistency Refinement.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Prominence for User Engagement.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Elevating UI Design Through Brand Integration
            </h2>
            <img
              src={img05}
              alt="Elevating UI Design Through Brand Integration"
              className="img1"
            />
            <p>
              <strong>Suggestions</strong>: Incorporating the brand into UI
              design, I utilised the logo as a key element, serving as both an
              inspiration and a focal point for additional design elements. An
              example of this approach is the implementation of a counter.
              However, the design possibilities are extensive, offering various
              avenues for exploration and expression
            </p>

            <p>
              <strong>Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Strategic Brand Integration.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Inspired Design Elements.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Functional Example.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article className="sub-content">
            <h2 className="h2">Registration steps</h2>
            <img src={img06} alt="Registration steps" className="img1" />
          </article>
          <article className="sub-content">
            <h2 className="h2">The Significance of Onboarding in UX Design</h2>
            <img
              src={img07}
              alt="The Significance of Onboarding in UX Design"
              className="img1"
            />
            <p>
              <strong>Suggestions</strong>: Onboarding serves as a valuable
              mechanism within UI/UX design, presenting essential information
              about the fundamental functionality of the application. Beyond its
              informative role, Onboarding also serves as an avenue to empower
              users by providing the opportunity to initiate their initial
              configurations and update user data. This strategic approach not
              only ensures a smooth introduction to the application but also
              actively involves users in shaping their individualised experience
              from the outset.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Onboarding example</h2>
            <img src={img08} alt="Onboarding example" className="img1" />
          </article>
          <article className="sub-content">
            <h2 className="h2">
              Unleashing the Power of a Design System at Habitus Health
            </h2>
            <p>
              <strong>Suggestions</strong>: In the dynamic world of digital
              design, the creation and implementation of a Design System stand
              as a pivotal cornerstone for a brand's visual consistency and user
              experience. While Habitus Health currently doesn't boast a
              comprehensive Design System, the recent introduction of new
              colours and a basic UI Kit hierarchy marks an essential step
              towards establishing a cohesive design language.
            </p>
            <img
              src={img09}
              alt=" Unleashing the Power of a Design System at Habitus Health"
              className="img1"
            />
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Consistency Across Touchpoints.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Efficiency in Design Iterations.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Scalability and Adaptability.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>4. </strong>
                    Enhancing User Experience.
                  </p>
                </li>
              </ul>
            </div>
            <p>
              <strong>Looking Forward</strong>
              <br /> While the current introduction of new colours and a basic
              UI Kit sets the groundwork, considering the development of a
              comprehensive Design System will be instrumental in unleashing the
              full potential of design at Habitus Health. This strategic
              investment will not only elevate the brand's visual identity but
              also fortify its position as a leader in delivering a seamless and
              delightful user experience.
            </p>
          </article>
          <article className="sub-content">
            <h2 className="h2">Conclusion</h2>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. Onboarding Screens</strong>: Developed five
                    onboarding screens for the Habitus Health app, emphasising
                    the importance of assessments, personalised insights,
                    compliance, and health promotion.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. Design System Importance</strong>: Explained the
                    significance of a Design System at Habitus Health,
                    addressing visual consistency, design efficiency,
                    scalability, and enhancing the user experience.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. Habitus Health Overview</strong>: Provided an
                    overview of Habitus Health's activities in the market,
                    highlighting its approach to injury prevention,
                    compliance-assistive technology, ergonomic assessments,
                    insights and reporting generation, and maintaining
                    compliance with health and safety regulations.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>4. Mission and Values</strong>: Communicated the
                    overall mission of Habitus Health, centred on protecting and
                    improving the health, safety, and well-being of employees.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>5. Concise Statement</strong>: We respect your time.
                    That's why every notification is time-stamped, so you know
                    precisely when it arrived. For example, "Today at 9:42 AM."
                    This allows you to prioritise and respond as needed, without
                    the stress of uncertainty.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>6. Offering Value-Driven Content</strong>: Created a
                    concise statement to convey Habitus Health's commitment to
                    empowering organisations in regulatory compliance and
                    occupational health promotion.
                  </p>
                </li>
              </ul>
            </div>
            <p>
              I hope this summary is helpful for your UX audit project at
              Habitus Health. If there's anything else I can assist with, feel
              free to let me know!
            </p>
          </article>
        </section>
      </main>
      <ContactLabel />
      <Footer />
    </motion.div>
  );
}
