import "./navBar.css";
import { useState } from "react";

import Hamburger from "../hamburger/hamburger";

const NavBar = () => {
  const [dropDownClicked, setDropDownCLicked] = useState(false);

  const dropDownOnClickHandler = () => {
    setDropDownCLicked(!dropDownClicked);
  };

  return (
    <div>
      <div className="navBarContainer">
        <Hamburger className="hamburgerComponent" />
        <div className="logoContainer">
          <h3>Mortgage Calculator</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
