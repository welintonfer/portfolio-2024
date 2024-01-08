import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import LightBg from "../../Components/LightBg";
import HeaderOne from "../../Components/HeaderOne";
import ContactLabel from "../../Components/ContactLabel";
import Footer from "../../Components/Footer";

import eirDeskCover from "../../assets/img/case-study-front/eir-case-cover@2x.png";
import eirMobileCover from "../../assets/img/case-study-front/eir-mobile-cover@2x.png";
import helenDeskCover from "../../assets/img/case-study-front/helen-case-cover@2x.png";
import helenMobileCover from "../../assets/img/case-study-front/helen-mobile-cover@2x.png";
import habitusDesktopCover from "../../assets/img/habitus/habitus-desktop-cover@2x.png";
import habitusMobileCover from "../../assets/img//habitus/habitus-mobile-cover@2x.png";
import europcaDesktopCover from "../../assets/img/case-study-front/europcar-desktop-cover@2x.png";
import europcaMobileCover from "../../assets/img/case-study-front/europcar-mobile-cover@2x.png";

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
                      <span className="font">Research</span>
                    </li>
                    <li className="tag">
                      <span className="font">Wireframe</span>
                    </li>
                    <li className="tag">
                      <span className="font">Prototype</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`Eir's UX Evolution: Embracing SaaS at version 1.0. Welcome
                    to Eir's user-centric innovation. I'm Wellington Alexander,
                    your Lead Product Designer`}
                    </p>
                  </div>
                  <Link to="/projects/eir">Read Case Study</Link>
                </div>
                <div className="img-content">
                  <img src={eirDeskCover} alt="Eir" />
                </div>
                <div className="img-content-m">
                  <img src={eirMobileCover} alt="Eir" />
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
                      <span className="font">Research</span>
                    </li>
                    <li className="tag">
                      <span className="font">Wireframe</span>
                    </li>
                    <li className="tag">
                      <span className="font">Prototype</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`UX Visual brand design. It has been a great honour to collaborate with Helen Turkington, recognised as one of Ireland's leading interior designers.`}
                    </p>
                  </div>
                  <Link to="/projects/helen-turkington">Read Case Study</Link>
                </div>
                <div className="img-content">
                  <img src={helenDeskCover} alt="Helen Turkington" />
                </div>
                <div className="img-content-m">
                  <img src={helenMobileCover} alt="Helen Turkington" />
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
              {/* <div className="project">
                <div className="content">
                  <h3 className="h3">Habitus Health - UX Audit</h3>
                  <ul className="tags">
                    <li className="tag">
                      <span className="font">UX Audit</span>
                    </li>
                    <li className="tag">
                      <span className="font">App</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`For an Applications site like the Habitushealth, a good user experience is crucial to attracting new customers and creating loyal advocates for the future!`}
                    </p>
                  </div>
                  <Link to="/projects/habitus-health">Read Case Study</Link>
                </div>
                <div className="img-content">
                  <img src={habitusDesktopCover} alt="Habitus Health" />
                </div>
                <div className="img-content-m">
                  <img src={habitusMobileCover} alt="Habitus Health" />
                </div>
              </div> */}
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
                  <h3 className="h3">Europcar - Upcoming case study</h3>
                  <ul className="tags">
                    <li className="tag">
                      <span className="font">Research</span>
                    </li>
                    <li className="tag">
                      <span className="font">App</span>
                    </li>
                    <li className="tag">
                      <span className="font">Prototype</span>
                    </li>
                  </ul>
                  <div className="description">
                    <p>
                      {`Revolutionizing car rentals during the pandemic, I designed an app for Europcar, enabling seamless, contactless bookings and direct car collection. Stay tuned for the upcoming case study!`}
                    </p>
                  </div>
                  {/* <Link to="/projects/europcar">Read Case Study</Link> */}
                </div>
                <div className="img-content">
                  <img src={europcaDesktopCover} alt="Europcar" />
                </div>
                <div className="img-content-m">
                  <img src={europcaMobileCover} alt="Europcar" />
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
