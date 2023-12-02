// import Logo from "../assets/img//wa-logo.svg";
// import Button from "./Button";<button>{`Let's talk`}</button>
// import ToggleMode from "./toggleMode";
import { Link } from "react-router-dom";
import HamburgerToggle from "./HamburgerToggle";

export default function Header() {
  return (
    <>
      <nav className="nav-new">
        <Link className="link" to="/">
          <h1>Logo</h1>
        </Link>
        <Link to="#" className="hamburger">
          <HamburgerToggle />
        </Link>
        <div className="link" to="about-me">
          <Link>About-me</Link>
        </div>
        <div className="link" to="what-i-do">
          <Link>What I do</Link>
        </div>
        <div className="link" to="projects">
          <Link>Projects</Link>
        </div>
      </nav>
      <div className="cta" to="#">
        <button>{`Let's talk`}</button>
      </div>
    </>
  );
}
