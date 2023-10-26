import { useState } from "react";
import "./popover.css";

const Popover = ({ displayedText }) => {
  const [showPopover, setShowPopover] = useState(false);

  const popoverClickHandler = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className="popoverContainer">
      <label className="popoverLabel">
        ?
        <input
          type="checkbox"
          className="popoverCheckbox"
          checked={showPopover}
          onChange={popoverClickHandler}
        />
        <span className="popoverDisplayedText">{displayedText}</span>
      </label>
    </div>
  );
};

export default Popover;
