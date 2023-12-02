import { useState, useEffect } from "react";
import waLogo from "../assets/img/wa-logo.svg";
// import ToggleMode from "./toggleMode";
import HamburgerToggle from "./HamburgerToggle";
import { Link } from "react-router-dom";

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
            <Link className="waLogo" to="/">
              <img src={waLogo} alt="Wellington Alexander" />
            </Link>
            <div className="nav-list">
              <ul>
                <li className="nav-item">
                  <Link className="item-link" to="/about-me">
                    About me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="item-link" to="/#what-i-do">
                    What I do
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="item-link" to="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ctas">
              <Link to="#lets-talk" className="cta">
                <button>{`Let's talk`}</button>
              </Link>
            </div>
          </nav>

          <HamburgerToggle onToggle={toggleMobileMenu} />
        </div>
        <div className={` ${isMobileMenuOpen ? "open" : "menu"}`}>
          <div className="mobile-menu">
            <ul>
              <li className="nav-item">
                <Link className="item-link" to="/about-me">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="item-link" to="/#what-i-do">
                  What I do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="item-link" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <div className="ctas">
              <Link to="#lets-talk" className="cta">
                <button>{`Let's talk`}</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
