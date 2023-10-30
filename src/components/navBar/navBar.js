import "./navBar.css";
import { ReactComponent as MortgageLogo2 } from "../../MBLogo_2.svg";

import Hamburger from "../hamburger/hamburger";

const NavBar = () => {
  return (
    <div>
      <div className="navBarContainer">
        <div className="mortgageLogoContainer">
          <MortgageLogo2 className="mortgageLogo" />
        </div>
        <Hamburger className="hamburgerComponent" />
      </div>
    </div>
  );
};

export default NavBar;
