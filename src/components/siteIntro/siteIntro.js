import SocialButtons from "../socialButtons/socialbuttons";
import "./siteIntro.css";

const SiteIntro = () => {
  return (
    <div className="introContainer">
      <h2 className="introContainerHeading">
        Do the hard work of planning for the future,
        <br /> minus the hard work
      </h2>
      <p className="introParaText">
        MortgageBudget.com.au was designed to do away with the complicated
        spreadsheets and formulas that go into buying a home, so you can get a
        clear picture of your finances, without the hassle. Fill in your
        mortgage budget below to see what property you can afford.
      </p>
      <p className="introParaText">
        This site was developed by the people who know what goes into purchasing
        property, from conveyancers to real estate agents to real people trying
        to buy their first home. The result is a mortgage calculator that asks
        the right questions and gives the right answers, so you can step into
        the property market with confidence.
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
