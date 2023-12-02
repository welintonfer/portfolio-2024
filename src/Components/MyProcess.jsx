import { useState, useEffect } from "react";
import understand from "../assets/img/my-process/understand.svg";
import understandIcon from "../assets/img/ux-icons/understand.svg";
import discover from "../assets/img/my-process/discover.svg";
import discoverIcon from "../assets/img/ux-icons/discover.svg";
import wireframe from "../assets/img/my-process/wireframe.svg";
import wireframeIcon from "../assets/img/ux-icons/wireframe.svg";
import prototype from "../assets/img/my-process/prototype.svg";
import prototypeIcon from "../assets/img/ux-icons/prototype.svg";
import testing from "../assets/img/my-process/testing.svg";
import testingIcon from "../assets/img/ux-icons/testing.svg";

export default function MyProcess() {
  const [list, setList] = useState([]);
  const [grupoAtual, setGrupoAtual] = useState(0);

  const myProcess = [
    {
      id: 1,
      category: "User experience",
      title: "01.Understand",
      icon: understandIcon,
      content: `Effective UX design prioritizes user needs with intuitive navigation, 
      clear messaging, and visually appealing design for a seamless experience.`,
      abstract: understand,
    },
    {
      id: 2,
      category: "User experience",
      title: "02.Discover",
      icon: discoverIcon,
      content: `A comprehensive discovery phase is crucial to UX design, with strategic planning, thorough research, and 
      tools such as proto personas, mood boards, and journey maps.`,
      abstract: discover,
    },
    {
      id: 3,
      category: "User experience",
      title: "03.Wireframe",
      icon: wireframeIcon,
      content: `Wireframing is a critical UX design step with a mobile-first approach, low-fidelity wireframes, and testing to achieve an optimal user experience.`,
      abstract: wireframe,
    },
    {
      id: 4,
      category: "User experience",
      title: "04.Prototype", // Corrigido o título
      icon: prototypeIcon,
      content: `Prototyping with Figma, Invisionapp, and UXPin is a crucial UX design phase that involves creating interactive mockups, testing, and refining the user experience.`,
      abstract: prototype,
    },
    {
      id: 5,
      category: "Testing",
      title: "05.Yet Another Title", // Corrigido o título
      icon: testingIcon,
      content: `Testing and monitoring user behavior with tools like Hotjar is crucial in UX design, enhancing the user experience to align with your audience's needs and preferences.`,
      abstract: testing,
    },
  ];

  const handleOne = () => {
    setList([]);
    setList(myProcess.slice(0, 3));
    setGrupoAtual(0);
  };

  const handleTwo = () => {
    setList([]);
    setList(myProcess.slice(1, 4));
    setGrupoAtual(1);
  };

  const handleThree = () => {
    setList([]);
    setList(myProcess.slice(2, 5));
    setGrupoAtual(2);
  };

  useEffect(() => {
    // Executa handleOne no carregamento da página
    handleOne();
  }, []); // O array vazio [] garante que isso só será executado uma vez no carregamento

  return (
    <>
      <div className="my-process" id="what-i-do">
        <h2 className="h2">My Process</h2>
        <article>
          <ul>
            {list.map((process) => (
              <li key={process.id}>
                <div className="content">
                  <div className="label">{process.category}</div>
                  <img src={process.icon} alt="" />
                  <h4 className="h4">{process.title}</h4>
                  <p>{process.content}</p>
                  <img
                    src={process.abstract}
                    className="abstract"
                    alt={process.category}
                  />
                </div>
              </li>
            ))}
          </ul>
          <ul className="bullets">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOne();
                }}
              >
                <div
                  className={`the-bullet ${grupoAtual === 0 ? "active" : ""}`}
                ></div>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTwo();
                }}
              >
                <div
                  className={`the-bullet ${grupoAtual === 1 ? "active" : ""}`}
                ></div>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleThree();
                }}
              >
                <div
                  className={`the-bullet ${grupoAtual === 2 ? "active" : ""}`}
                ></div>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
