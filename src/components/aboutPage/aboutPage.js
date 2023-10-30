import "./aboutPage.css";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const AboutPage = () => {
  const shareUrl = "mortgagebudget.com.au";
  const title =
    "Finally managed to organise my finances for buying a home. Thanks mortgagebudget.com.au!";
  return (
    <div className="contentWrapper">
      <div className="adContainer">
        <h2>Ad sense</h2>
      </div>
      <div className="aboutPageContainer">
        <h3 className="aboutPageHeader">About this calculator</h3>
        <div className="aboutPage">
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
            If you find this tool helpful please send to friends or family who
            are looking to buy a property.
          </p>
          <div className="shareSocialButtonsContainer">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              hashtag={"#realestate"}
            >
              <FacebookIcon size={32} square />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={title}
              hashtags={["mortgage", "realestate", "property", "finance"]}
            >
              <TwitterIcon size={32} square />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
              <LinkedinIcon size={32} square />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
