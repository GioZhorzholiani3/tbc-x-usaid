import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../assets/tbc.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = `${classes.header} ${
    isScrolled ? classes.headerTransparent : ""
  }`;
  return (
    <header className={headerClass}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <p className={classes.logoText}> x აკადემია</p>
      </div>
      <div className={classes.navbarContainer}>
        <nav>
          <ul className={classes.navbar}>
            <li>მთავარი</li>
            <li>TBC IT</li>
            <li>
              <span>TBC x USAID</span>
            </li>
            <li>რისკები</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
