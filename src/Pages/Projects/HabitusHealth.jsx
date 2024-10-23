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
import img10 from "../../assets/img/habitus/blender-cameras-for-photos-min.png";
import img11 from "../../assets/img/habitus/3d-back-isometric.png";
import img12 from "../../assets/img/habitus/3d-front-isometric.png";
import img13 from "../../assets/img/habitus/php-croper-img.png";
import img14 from "../../assets/img/habitus/habitus-health-logo-2d@2x.png";

import video01 from "../../assets/video/habitus-health-logo-3d.mp4";

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
          <img src={logo} alt="Habitus Health logo" />
          <div className="overview">
            <h1 className="h1">Habitus Health Project Overview</h1>
            <p>
            This UX audit identified areas to enhance the user experience, aligned with Habitus Health’s mission: promoting well-being in the workplace. The platform addresses improper posture, reducing the impact on physical and mental health. My consulting work focused on detecting friction points, optimizing navigation, and improving user satisfaction to convert users into loyal advocates.
            </p>
          </div>
        </section>
        <section className="case-study-single__design-process">
          <h2 className="h2">Design Process</h2>
            <p>
              The review centered on optimizing the user journey within the application to ensure a smooth and engaging experience. Key areas of focus included:
            </p>
          <ol className="ol-list">
              <li><strong>Identifying friction points</strong> affecting user flow.</li>
              <li><strong>Improving navigation</strong> to boost intuitiveness.</li>
              <li><strong>Optimising interactions</strong> to align with user expectations.</li>
          </ol>
          <br />
          <p>This approach ensures that the platform provides <strong>consistent</strong>, <strong>efficient</strong>, <strong>and enjoyable experiences</strong> for all users.</p>
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
            <strong>Issue Identified:</strong><br />
            The user profile demonstrates a solid foundation but lacks <strong>consistency in layout</strong> and a clear <strong>information hierarchy</strong>. This results in minor friction points, affecting usability and user comprehension.
            </p>
            <p>
              <strong>Proposed Solution:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    <strong>Information Hierarchy</strong>: Introduce section dividers and utilize icons to categorize key elements logically.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    <strong>Spacing and Alignment</strong>: Ensure consistent padding and font sizes across all components.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    <strong>User Journey Optimisation</strong>: Use visual hierarchy to guide users through the interface intuitively, ensuring a smooth navigation flow.
                  </p>
                </li>
              </ul>
            </div>
            <img src={img03} alt="Consistency and standards" className="img1" />
            <p>
              <strong>Issue Identified</strong>: In the
              The user profile is well-structured but needs improved consistency and information hierarchy to optimize navigation and comprehension.
            </p>
            <p>
              <strong>Solution</strong>: In the proposed design, I employed information hierarchy using iconography to segment elements logically, which enhances user flow. This structured approach ensures smooth, intuitive navigation and promotes a better overall experience.
            </p>
            <p>
              <strong>Key Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    Strategic use of information hierarchy.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    Effective iconography for segmentation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    Optimized user journey and seamless interactions.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article className="sub-content">
            <h2 className="h2">Aesthetic and Minimalist Design</h2>
            <p>
              During the review of the Workout section, we identified that the extensive use of white space created a visually cold experience. To improve the user experience, the design should focus on creating visual balance with warmer tones or inviting elements that promote engagement.
            </p>
            <p>
              <strong>Key Improvements:</strong>
            </p>

            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. </strong>
                    <strong>Introduce Warm Visual Elements</strong>: Soften the interface with subtle colors.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. </strong>
                    <strong>Clarify Section Divisions</strong>: Use imagery strategically to segment content and improve readability.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. </strong>
                    <strong>Enhance Design Consistency</strong>: Maintain uniformity across all elements to create a more cohesive and friendly user interface.
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
            <h2 className="h2">
              3D Simulation and Image Processing Workflow at Habitus Health
            </h2>
            <p>
              <strong>1. Creating and Exporting the Simulation in Blender</strong>: To ensure ergonomic accuracy, we developed a 3D avatar in Blender, articulating correct postures for the workplace. Using <strong>Python automation</strong>, multiple cameras were positioned in circular layers to capture various angles effortlessly.ssential step
              towards establishing a cohesive design language.
            </p>
            <img
              src={img10}
              alt="3D Simulation and Image Processing Workflow at Habitus Health"
              className="img1 rounded__6"
            />

            <p><strong>2. Batch Exporting the Rendered Images</strong>: The rendered images are batch-exported using custom scripts, ensuring high quality and transparency. This automation streamlines the capture process without manual effort.</p>

            <img
              src={img11}
              alt="3d Back Isometric"
              className="img1"
            />


            <img
              src={img12}
              alt="3d Front Isometric"
              className="img1"
            />

            <p><strong>3. Image Processing with PHP</strong>: Once exported, a PHP web tool resizes, rotates, and optimizes the images to maintain quality and compress the files. This ensures smooth integration across the Habitus Health platform.</p>

            <img
              src={img13}
              alt="Processing with PHP"
              className="img1"
            />

            <h3 className="h4">The Importance of This Feature for Users</h3>
            <p>
            This 3D simulation feature offers an immersive and user-friendly way to educate users on <strong>ergonomically correct postures</strong>. It promotes well-being by guiding posture correction visually, supporting compliance with <strong>occupational health standards</strong>. This enhances the user experience while fostering healthier workplace habits.
            </p>
            
          </article>

          <article className="sub-content">
            <h2 className="h2">
            Habitus Health Logo Evolution From 2D to 3D Design
            </h2>
            <p>
            This section showcases the creative process behind the <strong>Habitus Health</strong> logo, transitioning from a flat <strong>2D concept</strong> to a <strong>3D render</strong> using Spline Design. Each step reflects the brand’s commitment to innovation and well-being through modern and organic aesthetics.
            </p>
            

            <p><strong>1. 2D Logo Creation</strong></p>
            <p>The initial design explores soft shapes and colors aligned with the brand's identity.</p>

            <img
              src={img14}
              alt="2D Logo Creation"
              className="img1"
            />

            <p><strong>2. 3D Modeling and Rendering</strong></p>
            <p>Using <strong>Spline Design</strong>, the logo gains depth and volume, reinforcing the brand’s digital presence and offering flexibility for interactive applications.</p>

            <video
              src={video01}
              className="video-case rounded__6"
              autoPlay
              muted
              loop
              alt="3D Modeling and Rendering"
            ></video>

            <h3 className="h4">Why This Design Matters for User Experience</h3>
            <p>
            A well-crafted logo fosters <strong>emotional connections</strong> with users and builds trust, aligning with Habitus Health's mission to promote well-being. The 3D version also opens new opportunities for animations and interactive experiences, enhancing user engagement.
            </p>
            
            
          </article>





          <article className="sub-content">
            <h2 className="h2">Conclusion</h2>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <strong>1. Onboarding Screens</strong>: Five screens focused on assessments, insights, and compliance.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>2. Design System</strong>: Emphasized the importance of a unified visual language.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>3. User Flow Optimisation</strong>: Improved navigation and consistency for better user satisfaction.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>4. 3D Simulation</strong>: Enhanced user engagement through ergonomic posture modeling.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>5. Brand Identity</strong>: Strengthened through logo evolution and consistent visual design.
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



