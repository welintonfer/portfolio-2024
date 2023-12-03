import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import ContactLabel from "../../Components/ContactLabel";
import Footer from "../../Components/Footer";

import ScrollToTopOnMount from "../../Components/KeepTopPosition";

export default function CaseStudy() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollToTopOnMount />
      <LightBg />
      <HeaderOne />
      <div className="case-study">
        <article>
          <div className="hero">
            <div className="hero__content">
              <h1 className="display-1">Case Study</h1>
            </div>
          </div>
          <ul>
            <li>
              <div className="top-bar">
                <div className="left-buttons">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3 className="h3">My Eir</h3>
                  <ul className="tags">
                    <li className="tag">
                      <span className="font">React</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`Eir's UX Evolution: Embracing SaaS at version 1.0. Welcome
                    to Eir's user-centric innovation. I'm Wellington Alexander,
                    your Lead Product Designer`}
                    </p>
                  </div>
                  <Link to="/projects/eir">
                    <button>Read Case Study</button>
                  </Link>
                </div>
                <div className="img-content">
                  <img
                    src="../src/assets/img/case-study-front/case.png"
                    alt="Re-Design For The App Made Easy"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="top-bar">
                <div className="left-buttons">
                  <div className="red"></div>
                  <div className="yellow"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="project">
                <div className="content">
                  <h3 className="h3">Helen Turkington</h3>
                  <ul className="tags">
                    <li className="tag">
                      <span className="font">React</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`Eir's UX Evolution: Embracing SaaS at version 1.0. Welcome
                    to Eir's user-centric innovation. I'm Wellington Alexander,
                    your Lead Product Designer`}
                    </p>
                  </div>
                  <Link to="/projects/helen-turkington">
                    <button>Read Case Study</button>
                  </Link>
                </div>
                <div className="img-content">
                  <img
                    src="../src/assets/img/case-study-front/case.png"
                    alt="Re-Design For The App Made Easy"
                  />
                </div>
              </div>
            </li>
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </article>
      </div>
      <ContactLabel />
      <Footer />
    </motion.div>
  );
}
