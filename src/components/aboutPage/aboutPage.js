import SocialButtons from "../socialButtons/socialbuttons";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="contentWrapper">
      <div className="aboutPage">
        <h4>“Why does buying a house have to be so bloody hard?”</h4>
        <p>That’s the question that started this project. </p>
        <p>
          After the inspections, the agents, the banks, interest rates, strata,
          stamp duty, insurance, fees and fees and even more fees – you can’t be
          blamed for feeling a bit dizzy at the end of it.
        </p>
        <p>MortgageBudget.com.au was built to make it just a little easier.</p>
        <p>
          What began as an Excel spreadsheet on someone’s computer became an
          email attachment sent to a friend. Then it was a file on Google Drive
          being shared between people we knew.
        </p>
        <p>Eventually we thought, “why stop there?”.</p>
        <p>
          The final product is a free site, built by experts but designed by
          home buyers who wish they knew all of this before they got started.
        </p>
        <p>
          We hope this site is and continues to be useful to anyone who
          needs it.
        </p>
        <p>
          If you have found this tool helpful then we’d love it if you used the
          links below to share it with any friends or family who might find it
          helpful too.
        </p>
        <p>Happy house hunting!</p>
        <SocialButtons />
      </div>
    </div>
  );
};

export default AboutPage;
