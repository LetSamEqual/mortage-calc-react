import "./dropDown.css";

import { Link, useLocation } from "react-router-dom";

import Button from "../button/button";
import { useEffect, useState } from "react";

const DropDownMenu = ({ onClick }) => {
  const [buttonDisabled, setButtonDisabled] = useState({
    calculator: true,
    links: false,
    about: false,
  });
  const location = useLocation();

  const changeDisabledButtons = () => {
    if (location.pathname === "/") {
      setButtonDisabled({
        calculator: true,
        links: false,
        about: false,
      });
    } else if (location.pathname === "/links") {
      setButtonDisabled({
        calculator: false,
        links: true,
        about: false,
      });
    } else if (location.pathname === "/about") {
      setButtonDisabled({
        calculator: false,
        links: false,
        about: true,
      });
    }
  };

  useEffect(() => {
    changeDisabledButtons();
  }, [location]);

  return (
    <div className="dropDownButtonsContainer">
      <Link to="/">
        <button
          onClick={onClick}
          disabled={buttonDisabled.calculator}
          label="Calculator"
        >
          Calc
        </button>
      </Link>
      <Link to="/links">
        <button onClick={onClick} disabled={buttonDisabled.links} label="Links">
          links
        </button>
      </Link>
      <Link to="/about">
        <button onClick={onClick} disabled={buttonDisabled.about} label="About">
          About
        </button>
      </Link>
    </div>
  );
};

export default DropDownMenu;
