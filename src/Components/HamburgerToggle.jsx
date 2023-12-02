import { useState, useEffect } from "react";
import hamburgerOpen from "../assets/img/hamburgerOpenLg.svg";
import hamburgerClosed from "../assets/img/hamburgerClosedLg.svg";

const HamburgerToggle = ({ onToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleHamburger = () => {
    setIsMenuOpen((prev) => !prev);
    onToggle(); // Executa a função de callback ao alterar o estado do botão
  };

  return (
    <>
      <button
        className={`hamburger ${isMenuOpen ? "closed" : "open"}`}
        onClick={handleHamburger}
      >
        <img
          src={isMenuOpen ? hamburgerOpen : hamburgerClosed}
          alt="Hamburger"
        />
      </button>
    </>
  );
};

export default HamburgerToggle;
