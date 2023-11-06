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
    "This tool really helped me get my budget in order, thought you might want to give it a try.";
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
