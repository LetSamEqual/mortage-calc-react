import "./hideSidebarButton.css";

const HideSidebar = ({ handleSidebarHidden, sidebarHidden }) => {
  return (
    <div className="hideSideBarButtonContainer">
      <div className="bottomAngle">
        <button className="hideSideBarButton" onClick={handleSidebarHidden}>
          {sidebarHidden ? "Show stats" : "Hide stats"}
        </button>
      </div>
    </div>
  );
};

export default HideSidebar;
