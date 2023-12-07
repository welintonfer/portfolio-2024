import { motion } from "framer-motion";

import figma from "../assets/img/skills/figma.svg";
import psd from "../assets/img/skills/ps.svg";
import ai from "../assets/img/skills/ai.svg";
import github from "../assets/img/skills/github.svg";
import git from "../assets/img/skills/git.svg";
import npm from "../assets/img/skills/npm.svg";
// import java from "../assets/img/skills/java.svg";
import html5 from "../assets/img/skills/html5.svg";
import css3 from "../assets/img/skills/css3.svg";
import sass from "../assets/img/skills/sass.svg";
import bootstrap5 from "../assets/img/skills/bootstrap5.svg";
import js from "../assets/img/skills/js.svg";
import reactjs from "../assets/img/skills/reactjs.svg";

import eirLogo from "../assets/img/about-me/eir-logo-cv.svg";
import matrixLogo from "../assets/img/about-me/matrix.svg";
import pointBlankLogo from "../assets/img/about-me/point-blank.svg";
import docsmartLogo from "../assets/img/about-me/docsmart.svg";
import kionuxLogo from "../assets/img/about-me/kionux.svg";
import virtualizaLogo from "../assets/img/about-me/virtualiza.svg";
import diretrizLogo from "../assets/img/about-me/diretriz.svg";
import unibrasilLogo from "../assets/img/about-me/unibrasil.svg";

// here
import briefing from "../assets/img/what-i-do/briefing.svg";
import uxAldit from "../assets/img/what-i-do/ux-audit.svg";
import informationArchitecturePart1 from "../assets/img/what-i-do/information-architecture-part-1.svg";
import workshop from "../assets/img/what-i-do/workshop.svg";
import sprint from "../assets/img/what-i-do/sprint.svg";
import persona from "../assets/img/what-i-do/persona.svg";
import research from "../assets/img/what-i-do/research.svg";
import userJourney from "../assets/img/what-i-do/user-journey.svg";
import LowFidelityDesign from "../assets/img/what-i-do/Low-fidelity-design.svg";
import Wireframe from "../assets/img/what-i-do/wireframe.svg";
import testingPart1 from "../assets/img/what-i-do/testing-part-1.svg";

import profilePic from "../assets/img/avatarImg@2x.png";
import LightBg from "../Components/LightBg";
import HeaderOne from "../Components/HeaderOne";
import ContactLabel from "../Components/ContactLabel";
import Footer from "../Components/Footer";

import ScrollToTopOnMount from "../Components/KeepTopPosition";

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
    color: "#070401",
    borderColor: "#EDA741",
    bg: "#fff",
  },
  {
    id: 4,
    logo: github,
    alt: "Github",
    color: "#000000",
    borderColor: "#252833",
    bg: "#fff",
  },
  {
    id: 5,
    logo: git,
    alt: "Git",
    color: "#CB3C26",
    borderColor: "#DE4C36",
    bg: "#fff",
  },
  {
    id: 6,
    logo: npm,
    alt: "npm",
    color: "#BC0000",
    borderColor: "#CC0000",
    bg: "#fff",
  },
  // {
  //   id: 7,
  //   logo: java,
  //   alt: "Java",
  //   color: "#396988",
  //   borderColor: "#5382A1",
  // },
  {
    id: 8,
    logo: html5,
    alt: "Html5",
    color: "#E44D26",
    borderColor: "#F16529",
    bg: "#fff",
  },
  {
    id: 9,
    logo: css3,
    alt: "CSS3",
    color: "#264DE4",
    borderColor: "#2965F1",
    bg: "#fff",
  },
  {
    id: 10,
    logo: sass,
    alt: "Sass",
    color: "#BF3E7D",
    borderColor: "#CD6799",
    bg: "#fff",
  },
  {
    id: 11,
    logo: bootstrap5,
    alt: "Bootstrap 5",
    color: "#7040B6",
    borderColor: "#7952B3",
    bg: "#fff",
  },
  {
    id: 12,
    logo: js,
    alt: "Js",
    color: "#E0CA15",
    borderColor: "#F7DF1E",
    bg: "#fff",
  },
  {
    id: 13,
    logo: reactjs,
    alt: "React ss",
    color: "#53C6E5",
    borderColor: "#61DAFB",
    bg: "#fff",
  },
];

const resume = [
  {
    id: 1,
    company: "Eir",
    logo: eirLogo,
    job: "Lead Product Designer",
    isPresent: true,
    start: "Jul 2021",
    end: "",
    city: "Dublin",
    country: "Ireland",
    content:
      "I am accountable for the comprehensive design of Eir's websites, including the creation of assets and leading digital projects from a user experience standpoint. I outline the customer journeys to provide a top-notch experience for users on both sales and service platforms.",
    isSkills: true,
    skills: [
      "Customer Relationship Management (CRM)",
      "Prototyping",
      "Usability",
      "Design Documents ",
      " User Journeys ",
      " Interaction Design ",
      " Usability Testing ",
      " UX Research ",
      " User Flows ",
      " User-centred Design ",
      " Information Architecture ",
      " Design",
    ],
    isList: false,
    keyList: [],
  },
  {
    id: 2,
    company: "Matrix Internet",
    logo: matrixLogo,
    job: "UI/UX Designer",
    isPresent: false,
    start: "Feb 2019",
    end: "Jul 2021",
    city: "Dublin",
    country: "Ireland",
    content:
      "Join the innovative team at Matrix Internet and be a part of their mission to revolutionise web design! Since 2000, they have been leading the charge with exceptional web design, development, CMS Sites, mobile and digital marketing services, as well as providing strategic and measurement solutions to clients.",
    isSkills: true,
    skills: [
      "Customer Relationship Management (CRM)",
      "Prototyping",
      "Usability",
      "Design Documents ",
      " User Journeys ",
      " Interaction Design ",
      " Usability Testing ",
      " UX Research ",
      " User Flows ",
      " User-centred Design ",
      " Information Architecture ",
      " Design",
    ],
    isList: true,
    keyList: [
      "Bring the designs to life using storyboards, user flow diagrams, and sitemaps.",
      "Conduct comprehensive UX Audits to identify any hindrances in the user journey and provide expert recommendations for improvement.",
      "Craft compelling Wireframes and interactive prototypes, and bring your hi-fidelity UI designs to life.",
      "Develop style guidelines that embody the client's brand and ensure consistent design across all platforms.",
      "Immerse yourself in the exciting world of Digital Marketing, creating personalised graphics and videos for social media",
    ],
    contentTwo:
      "This was an amazing opportunity to take my design skills to the next level and be a part of a dynamic, creative and forward-thinking company!",
  },
  {
    id: 3,
    company: "Point Blank",
    logo: pointBlankLogo,
    job: "Front-end & UI/UX Designer",
    isPresent: false,
    start: "Jan 2016",
    end: "Feb 2019",
    city: "Dublin",
    country: "Ireland",
    content:
      "Join the dynamic team at Point Blank and be part of their mission to deliver exceptional technical and creative solutions in digital technologies! With over 15 years of experience, they have been working with companies and organisations to create new strategies and solutions that drive success.",
    isSkills: true,
    skills: [
      "Customer Relationship Management (CRM)",
      "Prototyping",
      "Usability",
      "Design Documents ",
      " User Journeys ",
      " Interaction Design ",
      " Usability Testing ",
      " UX Research ",
      " User Flows ",
      " User-centred Design ",
      " Information Architecture ",
      " Design",
    ],
    isList: true,
    keyList: [
      "Lead UI/UX projects from concept to completion, with a focus on their flagship Time & Attendance product.",
      "Utilise a tried and tested UI/UX design process that guarantees outstanding results for every project.",
      "Collaborate with the Project Manager and Product Owners on a daily basis, gathering clear business requirements and delivering designs that exceed expectations.",
      "Keep ahead of the curve by researching and analysing the competitive landscape.",
      "Bring your designs to life with wireframes, interactive prototypes (using Invision) and hi-fidelity visual UI design mockups (created using Sketch).",
      "Play an active role in client usability studies and testing.",
      "Present your designs to stakeholders with confidence and clarity.",
      "Work closely with the development team, lending your expertise in HTML/CSS/SASS and helping to create style guides that ensure accurate design implementation.",
    ],
    contentTwo:
      "This is an exciting opportunity to make a real impact and bring your design skills to the next level in a supportive, collaborative and innovative company!",
  },
  {
    id: 4,
    company: "Docsmart.AI",
    logo: docsmartLogo,
    job: "Front-end & UI/UX Designer",
    isPresent: false,
    start: "Jun 2015",
    end: "Jan 2016",
    city: "Lisbon",
    country: "Portugal",
    content:
      "Join the dynamic team at Point Blank and be part of their mission to deliver exceptional technical and creative solutions in digital technologies! With over 15 years of experience, they have been working with companies and organisations to create new strategies and solutions that drive success.Our unique feature of abstraction and autonomous learning capabilities makes Docsmart.AI technology ideal for accelerating AI projects in any organisation, providing a valuable edge in speed and autonomous functionality. As a former employee, my role involved supporting the Creative Director in the management of large-scale UI/UX projects. I was responsible for developing information architecture based on data collection and presenting new UI/UX concepts to stakeholders and leaders. Additionally, I utilised Sketch for wireframing and specification in the creation of the back-end interface for a Data Analysis product, as well as prototyping the backend using HTML5, CSS3, and Bootstrap.",
    isSkills: true,
    skills: [
      "Customer Relationship Management (CRM) ",
      " Prototyping ",
      " Usability ",
      " Design Documents ",
      " User Journeys ",
      " Interaction Design ",
      " Usability Testing ",
      " UX Research ",
      " User Flows ",
      " User-centred Design ",
      " Information Architecture ",
      " Design",
    ],
    isList: false,
    keyList: [],
    contentTwo: null,
  },
  {
    id: 5,
    company: "Kionux",
    logo: kionuxLogo,
    job: "Front-end & UI/UX Designer",
    isPresent: false,
    start: "Jun 2013",
    end: "May 2015",
    city: "Foz do Iguaçu",
    country: "Brazil",
    content:
      "Kionux is a medium-sized company based in Foz do Iguaçu, South Brazil, specialising in Linux Server advice and software and web application development. With over a decade of experience in the market, we have the expertise to deliver technologically advanced and secure products. Utilising the most modern tools available, we provide customers with a cutting-edge design that strikes a balance between functionality and security. Our use of SEO techniques, such as optimising source codes and improving user-friendliness for search engine spiders and robots, further enhances our offerings. As a former employee, I led the UI/UX design for international clients across Buenos Aires, Dallas, London, and various other locations in Brazil, working on commercial applications such as marketplaces and e-commerce sites. I utilized Adobe Photoshop and Adobe Fireworks to create mockups and UI designs, improving the overall user experience with sleek, innovative designs. Additionally, I produced wireframes, interactive prototypes, and high-fidelity visual designs and established a systematic approach for delivering assets and design specifications to the front-end development team.",
    isSkills: true,
    skills: [
      "Customer Relationship Management (CRM) ",
      " Prototyping ",
      " Usability ",
      " Design Documents ",
      " User Journeys ",
      " Interaction Design ",
      " Usability Testing ",
      " UX Research ",
      " User-centred Design ",
      " Information Architecture ",
      " Design",
    ],
    isList: false,
    keyList: [],
    contentTwo: null,
  },
  {
    id: 6,
    company: "Virtualiza São Paulo",
    logo: virtualizaLogo,
    job: "Lead Product Designer",
    isPresent: false,
    start: "Apr 2012",
    end: "Dec 2012",
    city: "São Paulo",
    country: "Brazil",
    content:
      "As a Front-end Developer, I led the direction, production, and maintenance of e-commerce projects for major companies in São Paulo and Rio de Janeiro. My work involved using my skills in Development, PHP, JS, HTML, and CSS to successfully redesign websites for online self-serve advertising solutions. I produced hi-fidelity mockups, wireframes, and workflows in collaboration with the team, ensuring usability and interaction design were top-notch. Working with front-end developers and QA, I ensured that all designs were implemented successfully. Additionally, I conducted usability testing and UX research to ensure the highest level of user satisfaction. I used my expertise in prototyping, design documents, and user journeys to create marketing strategies that effectively promoted the company's services. My passion for web design fueled my drive to provide high-quality services that generated great results for businesses.",
    isSkills: false,
    skills: [],
    isList: false,
    keyList: [],
    contentTwo: null,
  },
  {
    id: 7,
    company: "Diretriz Feiras e Eventos",
    logo: diretrizLogo,
    job: "Web Designer",
    isPresent: false,
    start: "Apr 2011",
    end: "Dec 2011",
    city: "Curitiba",
    country: "Brazil",
    content:
      "As a web designer, I have had the privilege of working with one of the top 10 trade show promoters in the country, with 50 years of experience and over 600 events under their belt. I was responsible for managing the online design and web development for all their event websites. My passion for design and user experience led me to create user-friendly web interfaces that improved conversions and created an enjoyable consumer experience. Within the first month of working, I completely redesigned each event's website with a new brand concept, colour scheme, and a user interface that was aligned with the company's brand guidelines. I worked closely with a team of five and played a vital role in the success of several product launches, which led to an increase in visitors and better overall consumer experience.",
    isSkills: false,
    skills: [],
    isList: false,
    keyList: [],
    contentTwo:
      "I am proud to have proposed new ideas and web tools, such as company blogs, car loan calculators, and viral promotional newsletters, which are currently under production. To ensure the success of these projects, I worked closely with various technology partners such as Optimost, Omniture, and Google to track, measure, test, and evolve our web tools for higher performance. As a web designer, I am passionate about creating innovative designs that offer users an intuitive experience. I believe in the power of design to shape a brand's identity and drive business growth. I am always excited to take on new challenges and collaborate with others to bring their vision to life.",
  },
  {
    id: 8,
    company: "UniBrasil Centro Universitário",
    logo: unibrasilLogo,
    job: "Web Designer",
    isPresent: false,
    start: "Mar 2010",
    end: "Apr 2011",
    city: "Curitiba",
    country: "Brazil",
    content:
      "As a passionate web designer, I had the privilege of working for UniBrasil University Center, where I oversaw the development and visual design of their main website. I created UI designs, wireframes, screen layouts, HTML/CSS prototypes, and conducted product research reports to ensure top-notch user experience. In addition, I managed the overall web development for all intranet and website, and designed a uniform set of icons consisting of over 50 unique web application icons. I conducted ongoing heuristic evaluations and usability tests for all interfaces, banners and documents, ensuring maximum user satisfaction.",
    isSkills: false,
    skills: [],
    isList: false,
    keyList: [],
    contentTwo:
      "Furthermore, I implemented a new structure for engineers and developers to work off HTML prototypes instead of static screenshots, saving time and front-end development costs. My skills in Customer Relationship Management, Prototyping, Usability, Design Documents, User Journeys, Interaction Design, Usability Testing, and Design helped me deliver excellence in all aspects of the project.",
  },
];

const understadingIds = [1, 2];

export default function AboutMe() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <section className="what-i-do-hero">
        <div className="about-me-hero__content">
          <h1 className="display-1">What I do</h1>
          <p>
            <strong>Hello world!</strong> With over 13 years in the UX/UI design
            arena, I've honed my craft in navigating complex challenges,
            sculpting visually stunning UI designs, conducting impactful UX
            research, all while dancing to the rhythm of user-centered design
            principles.
          </p>
        </div>
      </section>

      <section className="case-study-single__design-process">
        <h2 className="h2">01. Understanding</h2>
        <p>
          Effective UX design prioritises user needs with intuitive navigation,
          clear messaging, and visually appealing design for a seamless
          experience.0
        </p>

        <h3 className="h3">Technologies I Master for this process</h3>

        <ul>
          {skills.map(
            (skill) =>
              // Verifique se o ID está na lista permitida
              understadingIds.includes(skill.id) && (
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
              )
          )}
        </ul>
      </section>
      <main className="what-i-do">
        <section className="process">
          <article>
            <div className="content">
              <h3 className="h3 title-right">Briefing </h3>
              <img
                className="wid-svg-hidden-desk"
                src={briefing}
                alt="briefing"
              />
              <p>
                In crafting my design process, I infuse a strategic essence by
                immersing myself in the art of the attentive briefing. I don't
                just listen; I empathetically step into the client's shoes,
                delving into their vision amidst the dynamic market landscape.
                This briefing goes beyond mere notes on interface features—it's
                a profound dive into the intricacies
              </p>
            </div>

            <img className="wid-svg" src={briefing} alt="briefing" />
          </article>
          <article>
            <img className="wid-svg" src={uxAldit} alt="UX Audit" />
            <div className="content">
              <h3 className="h3 title-right">UX Audit</h3>
              <img
                className="wid-svg-hidden-desk"
                src={uxAldit}
                alt="UX Audit"
              />
              <p>
                The User Experience Audit (UX Audit) strategically elevates
                digital products by unveiling accessibility and conversion
                challenges. While corrective, it's not the final solution;
                rather, a catalyst for substantial improvements.
              </p>
              <p>
                This assessment discerns issues impeding the user experience,
                enabling swift resolutions in harmony with Jakob Nielsen's 10
                heuristic principles. The UX Audit signifies a pivotal genesis
                in the pursuit of success, providing comprehensive insights
                preluding workshops, including those pivotal in sculpting the
                overall user experience.
              </p>
            </div>
          </article>
          <article>
            <div className="content">
              <h3 className="h3 title-right">
                Information Architecture Part 1
              </h3>
              <img
                className="wid-svg-hidden-desk"
                src={informationArchitecturePart1}
                alt="briefing"
              />
              <p>
                In the pursuit of sculpting a robust digital landscape, the
                intricate interplay between Briefing and UX Audit reveals
                foundational truths. Briefing sketches the project canvas,
                outlining goals and stakeholder intricacies, while UX Audit
                dissects existing challenges. These strategic strides form the
                cornerstone of Information Architecture (IA), covering 40% to
                60% of initial considerations. Yet, true IA mastery calls for a
                profound understanding of user dynamics. Augmenting these
                insights through meticulous research and testing unveils
                user-centric architectures, ensuring a harmonious blend of
                project requisites and the ever-shifting user landscape. As we
                embark on this journey, Information Architecture Insights takes
                center stage—a symphony of foresight and an intimate grasp of
                user-centric intricacies.
              </p>
            </div>

            <img
              className="wid-svg"
              src={informationArchitecturePart1}
              alt=" Information Architecture Part 1"
            />
          </article>
        </section>

        <section className="case-study-single__design-process">
          <h2 className="h2">02. Discover</h2>
          <p>
            In crafting a seamless user experience, wireframing is our pivotal
            step. With a mobile-first approach, we create low-fidelity
            wireframes—a symphony of design simplicity. Each element plays a
            carefully orchestrated note in the pursuit of an optimal user
            experience. Testing becomes our compass, guiding us toward a
            transformative destination. This isn't just wireframing; it's
            sculpting the digital canvas with precision and foresight.
          </p>

          <h3 className="h3">Technologies I Master for this process</h3>

          <ul>
            {skills.map(
              (skill) =>
                // Verifique se o ID está na lista permitida
                understadingIds.includes(skill.id) && (
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
                )
            )}
          </ul>
        </section>

        <section className="process">
          <article>
            <div className="content">
              <h3 className="h3 title-right">Workshop</h3>
              <img
                className="wid-svg-hidden-desk"
                src={workshop}
                alt="briefing"
              />
              <p>
                Workshops stand as crucial catalysts, unraveling the profound
                tapestry of communication barriers within a company's interface.
                They go beyond the surface, delving deep into the authentic
                challenges, nuanced operations, and cultural intricacies of
                users. In these sessions, we illuminate the minute details,
                paving the way for a tailored approach that not only addresses
                specific user needs but elevates the entire user experience.
              </p>
            </div>

            <img className="wid-svg" src={workshop} alt="briefing" />
          </article>
          <article>
            <img className="wid-svg" src={sprint} alt="UX Audit" />
            <div className="content">
              <h3 className="h3 title-right">Sprint</h3>
              <img className="wid-svg-hidden-desk" src={sprint} alt="Sprint" />
              <p>
                Strategically, I harness Sprints as a dynamic tool to accelerate
                problem-solving, especially when time is of the essence. Beyond
                that, I deploy Sprints as a key driver in fine-tuning marketing
                campaigns, acknowledging the profound influence an adept UX
                Designer can wield in these strategic endeavors.
              </p>
            </div>
          </article>
          <article>
            <div className="content">
              <h3 className="h3 title-right">Persona</h3>
              <img
                className="wid-svg-hidden-desk"
                src={persona}
                alt="briefing"
              />
              <p>
                In my customary approach, I intricately carve out two personas:
                proto-personas and personas, both meticulously sculpted from
                authentic data extracted from the evolving product.
                Proto-personas delicately sketch out characteristics, all while
                maintaining a prudent awareness of inherent limitations—steering
                clear of unwarranted assumptions. It remains paramount to
                embrace the fundamental truth that every user is inherently
                distinctive throughout this meticulous process. this process.
              </p>
            </div>

            <img className="wid-svg" src={persona} alt=" Persona" />
          </article>
          <article>
            <img className="wid-svg" src={research} alt="Persona" />
            <div className="content">
              <h3 className="h3 title-right">Research</h3>
              <img
                className="wid-svg-hidden-desk"
                src={research}
                alt="briefing"
              />
              <p>
                In my research and A/B testing methodology, it's not just about
                observing user behavior; it's about truly understanding the
                product's role in the user's daily rhythm. By transcending
                conventional demographics, I aim for nuanced insights that paint
                a broader picture. This approach offers a holistic
                understanding, going beyond surface-level interactions and
                providing a comprehensive view of user engagement and seamless
                product integration into their everyday experiences.
              </p>
            </div>
          </article>
          <article>
            <div className="content">
              <h3 className="h3 title-right">User Journey</h3>
              <img
                className="wid-svg-hidden-desk"
                src={userJourney}
                alt="briefing"
              />
              <p>
                Delving into the subtleties mentioned earlier, it's the
                intricacies of the user journey that truly captivate me within
                the realm of UX design. At this pivotal moment, we ascend to a
                heightened understanding of the user's perspective, unraveling
                the complexities of their expectations and frustrations with a
                meticulous eye for detail.
              </p>
            </div>

            <img
              className="wid-svg"
              src={userJourney}
              alt=" Information Architecture Part 1"
            />
          </article>
        </section>

        <section className="case-study-single__design-process">
          <h2 className="h2">03. Wireframe</h2>
          <p>
            In the realm of UX design, a comprehensive discovery phase isn't
            just crucial—it's the heartbeat. We embark on a strategic odyssey,
            navigating with meticulous planning, in-depth research, and wielding
            tools like proto-personas, mood boards, and journey maps as our
            compass. This isn't just design; it's a journey to understand and
            transcend user experience.
          </p>

          <h3 className="h3">Technologies I Master for this process</h3>

          <ul>
            {skills.map(
              (skill) =>
                // Verifique se o ID está na lista permitida
                understadingIds.includes(skill.id) && (
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
                )
            )}
          </ul>
        </section>

        <section className="process">
          <article>
            <div className="content">
              <h3 className="h3 title-right">Low-fidelity Design</h3>
              <img
                className="wid-svg-hidden-desk"
                src={LowFidelityDesign}
                alt="Low-fidelity Design"
              />
              <p>
                I have a profound affinity for engaging with low-fidelity
                design—not merely for its technical significance in the process,
                but for the juncture it provides. It's the moment where the
                diverse array of ideas, meticulously inked on paper by our team,
                comes to life.
              </p>
            </div>

            <img
              className="wid-svg"
              src={LowFidelityDesign}
              alt="Low-fidelity Design"
            />
          </article>
          <article>
            <img className="wid-svg" src={Wireframe} alt="Wireframe" />
            <div className="content">
              <h3 className="h3 title-right">Wireframe</h3>
              <img
                className="wid-svg-hidden-desk"
                src={Wireframe}
                alt="Wireframe"
              />
              <p>
                In the realm of intricate projects, wireframes emerge not just
                as a mere tool but as a compelling narrative—a living case study
                etched into the project's chronicles. They transcend the
                conventional, weaving a continuous tapestry that not only guides
                the design team but also extends a helping hand to our visionary
                developers. Picture this: a roadmap for testing, a portal to
                low-fidelity prototypes—these wireframes transcend pixels. They
                are the silent architects, sculpting the project's destiny even
                before the UI dances into the limelight. And in this dance, they
                don't just optimise; they elevate—the unsung heroes in the
                symphony of cost efficiency.
              </p>
            </div>
          </article>
          <article>
            <div className="content">
              <h3 className="h3 title-right">Testing part 1</h3>
              <img
                className="wid-svg-hidden-desk"
                src={testingPart1}
                alt="Testing part 1"
              />
              <p>
                In my customary approach, I intricately carve out two personas:
                proto-personas and personas, both meticulously sculpted from
                authentic data extracted from the evolving product.
                Proto-personas delicately sketch out characteristics, all while
                maintaining a prudent awareness of inherent limitations—steering
                clear of unwarranted assumptions. It remains paramount to
                embrace the fundamental truth that every user is inherently
                distinctive throughout this meticulous process. this process.
              </p>
            </div>

            <img className="wid-svg" src={testingPart1} alt="Testing part 1" />
          </article>
          <article>
            <img
              className="wid-svg"
              src={research}
              alt="Information Architecture Part 2"
            />
            <div className="content">
              <h3 className="h3 title-right">
                Information Architecture Part 2
              </h3>
              <img
                className="wid-svg-hidden-desk"
                src={research}
                alt="Information Architecture Part 2"
              />
              <p>
                In the intricate dance of digital creation, Information
                Architecture (IA) emerges as the unsung conductor, not merely
                constructing layouts but infusing life into user experiences.
                It's not just about how it looks; it's about how it works. From
                the foundational Briefing to the meticulous choreography of a UX
                Audit, IA is the quiet maestro orchestrating a narrative where
                every user journey unfolds like a revelation. It's not
                navigation; it's a seamless glide through an experience. As we
                venture into Information Architecture Part 2, we don the mantle
                of visionaries, shaping not just digital landscapes but the very
                future of user-centric design.
              </p>
            </div>
          </article>
        </section>

        {/* <ul>
        informationArchitecturePart1
          {resume.map((item) => (
            <li key={item.id}>
              <div className="head">
                <div className="heading">
                  <img
                    src={item.logo}
                    className="img-logo"
                    alt={item.company}
                  />
                  <h3 className="h3">{`${item.job} at ${item.company}`}</h3>
                </div>
                <div className="time-place">
                  <div className="time">{`${
                    item.isPresent
                      ? "Present - " + item.start
                      : item.start + " to " + item.end
                  }`}</div>
                  <div className="place">{`${item.city}, ${item.country}`}</div>
                </div>
              </div>
              <p>{item.content}</p>
              {item.isList ? (
                <>
                  <p>
                    As a key member of their team, I had the opportunity to:
                  </p>
                  <ul className="keys">
                    {item.keyList.map((theKey, index) => (
                      <li className="keys__key" key={index}>
                        {`• ${theKey}`}
                      </li>
                    ))}
                  </ul>
                  <p>{item.contentTwo}</p>
                </>
              ) : null}

              <div className="skills">
                {item.isSkills ? (
                  <p>
                    <strong>Skills</strong>:
                    <em>
                      {item.skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </em>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul> */}
      </main>
      <ContactLabel />
      <Footer />
    </motion.div>
  );
}
