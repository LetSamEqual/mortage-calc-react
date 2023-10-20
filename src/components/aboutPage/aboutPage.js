import "./aboutPage.css";

import Button from "../button/button";

const AboutPage = () => {
  return (
    <div className="contentWrapper">
      <div className="adContainer">
        <h2>Ad sense</h2>
      </div>
      <div className="aboutPageContainer">
        <h3>About this calculator</h3>
        <p>
          This tool was created to help you buy a property to live in taking
          everything into account all in one place.
        </p>
        <p>
          I built this calculator in excel when looking to buy my first
          property. After sending it to friends who found it helpful I decided
          to put it online free so others can use the tool.
        </p>
        <p>Hope it helps!</p>
        <p>
          If you find this tool helpful please send to friends or family who are
          looking to buy a property.
        </p>
        <Button className="shareButton" label="Share this calculator" />
      </div>
    </div>
  );
};

export default AboutPage;
