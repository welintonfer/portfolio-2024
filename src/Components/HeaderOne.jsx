import { useState, useEffect, useRef } from "react";
import waLogo from "../assets/img/wa-logo.svg";
// import ToggleMode from "./toggleMode";
import HamburgerToggle from "./HamburgerToggle";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function HeaderOne() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const scrollThreshold = 20;

      setScrolled(offset > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      {/* <header className={scrolled ? "scrolled" : ""}> */}
      <header
        className={` ${scrolled ? "scrolled" : ""} ${
          isMobileMenuOpen ? "header-mobile" : ""
        }`}
      >
        <div className="desktop">
          {/* Use o arquivo SVG diretamente como uma imagem */}

          <nav className="nav-bar">
            <RouterLink className="waLogo" to="/">
              <img src={waLogo} alt="Wellington Alexander" />
            </RouterLink>
            <div className="nav-list">
              <ul>
                <li className="nav-item">
                  <RouterLink className="item-link" to="/about-me">
                    About me
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink className="item-link" to="/what-i-do">
                    What I do
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink className="item-link" to="/projects">
                    Projects
                  </RouterLink>
                </li>
                <li className="nav-item">
                  <RouterLink className="item-link" to="/ux-audit-habitus">
                    Figma
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div className="ctas">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cta"
              >
                <button>{`Hire me`}</button>
              </ScrollLink>
            </div>
          </nav>

          <HamburgerToggle onToggle={toggleMobileMenu} />
        </div>

        {/* Mobile below */}

        <div className={` ${isMobileMenuOpen ? "open" : "menu"}`}>
          <div className="mobile-menu">
            <ul>
              <li className="nav-item">
                <RouterLink className="item-link" to="/about-me">
                  About me
                </RouterLink>
              </li>
              {/* <li className="nav-item">
                <RouterLink className="item-link" to="/#what-i-do">
                  What I do
                </RouterLink>
              </li> */}
              <li className="nav-item">
                <RouterLink className="item-link" to="/projects">
                  Projects
                </RouterLink>
              </li>
            </ul>
            <div className="ctas">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cta"
              >
                <button>{`Hire me`}</button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
