import "./hamburger.css";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../button/button";

const Hamburger = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState({
    calculator: true,
    resources: false,
    about: false,
  });

  const onClick = () => {
    setDropDownClicked(!dropDownClicked);
  };

  const location = useLocation();

  const changeDisabledButtons = () => {
    if (location.pathname === "/") {
      setButtonDisabled({
        calculator: true,
        resources: false,
        about: false,
      });
    } else if (location.pathname === "/resources") {
      setButtonDisabled({
        calculator: false,
        resources: true,
        about: false,
      });
    } else if (location.pathname === "/about") {
      setButtonDisabled({
        calculator: false,
        resources: false,
        about: true,
      });
    }
    setDropDownClicked(false);
  };

  useEffect(() => {
    changeDisabledButtons();
  }, [location]);

  return (
    <div className="hamburgerMenuContainer">
      <label className="hamburgerMenu">
        <input type="checkbox" onChange={onClick} checked={dropDownClicked} />
      </label>
      <aside className="sidebar">
        <nav className="navContainer">
          <Link to="/">
            <Button
              onClick={onClick}
              disabled={buttonDisabled.calculator}
              label="Calculator"
            />
          </Link>
          <Link to="/resources">
            <Button
              onClick={onClick}
              disabled={buttonDisabled.resources}
              label="Resources"
            />
          </Link>
          <Link to="/about">
            <Button
              onClick={onClick}
              disabled={buttonDisabled.about}
              label="About"
            />
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Hamburger;
