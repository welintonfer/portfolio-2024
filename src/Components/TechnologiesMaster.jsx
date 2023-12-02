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

export default function TechnologiesMaster() {
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

  return (
    <>
      <section className="skills">
        <p className="skills__mini-title">Technologies I Master</p>
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
    </>
  );
}
