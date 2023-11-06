import "./navBar.css";
import { ReactComponent as MortgageLogo2 } from "../../MBLogo_2.svg";
import { Link } from "react-router-dom";

import Hamburger from "../hamburger/hamburger";

const NavBar = () => {
  return (
    <div>
      <div className="navBarContainer">
        <div className="mortgageLogoContainer">
          <Link to="/">
            <button className="mortgageLogoButton">
              <MortgageLogo2 className="mortgageLogo" />
            </button>
          </Link>
        </div>
        <Hamburger className="hamburgerComponent" />
      </div>
    </div>
  );
};

export default NavBar;
