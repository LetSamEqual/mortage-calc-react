import "./socialButtons.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialButtons = () => {
  const shareUrl = "mortgagebudget.com.au";
  const title =
    "Finally managed to organise my finances for buying a home. Thanks mortgagebudget.com.au!";
  return (
    <div className="shareSocialButtonsContainer">
      <FacebookShareButton url={shareUrl} quote={title} hashtag={"#realestate"}>
        <FacebookIcon size={32} square={"true"} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        hashtags={["mortgage", "realestate", "property", "finance"]}
      >
        <TwitterIcon size={32} square={"true"} />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} square={"true"} />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} square={"true"} />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialButtons;
