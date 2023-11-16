import SocialButtons from "../socialButtons/socialbuttons";
import "./siteIntro.css";

const SiteIntro = () => {
  return (
    <div className="introContainer">
      <h1 className="introContainerHeading">
        Do the hard work of planning for the future,
        <br /> minus the hard work
      </h1>
      <p className="introParaText">
        Our <span>mortgage calculator</span> was designed to do away with the
        complicated spreadsheets and formulas that go into buying a home, so you
        can get a <span>clear picture of your finances</span>, without the
        hassle.{" "}
        <span>
          Add your personal budget to the mortgage calculator below to see what
          property you can afford.
        </span>
      </p>
      <p className="introParaText">
        This site was developed by the people who know what goes into purchasing
        property, from{" "}
        <span>
          conveyancers to real estate agents to real people trying to buy their
          first home
        </span>
        . The result is a mortgage calculator that asks the right questions and
        gives the right answers, so you can step into the property market
        with confidence.
      </p>
      <p className="introParaText">
        From the team at MortgageBudget.com.au, good luck and happy
        house hunting!
      </p>
      <p className="introParaText">
        P.S. If you like what we’ve built here and know someone who would
        benefit from it, then we’d love if you could pass us on to them using
        the links below.
      </p>
      <div className="socialButtonsComponentContainer">
        <SocialButtons />
      </div>
    </div>
  );
};

export default SiteIntro;
