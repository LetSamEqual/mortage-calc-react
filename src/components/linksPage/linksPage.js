import "./linksPage.css";
import { Helmet } from "react-helmet-async";

const LinksPage = () => {
  return (
    <div className="contentWrapper">
      <Helmet>
        <meta
          name="description"
          content="Learn what goes into buying a home, from stamp duty to lenders mortgage insurance to conveyancers, solicitors and more. MortgageBudget.com.au helps prepare you for the property market."
        />
        <meta
          name="keywords"
          content="mortgage, stamp duty, conveyancing, solicitors, lenders mortage insurance"
        />
        <meta
          property="og:title"
          content="Learn the tips, tricks and requirements for buying a home"
        />
        <meta
          property="og:url"
          content="https://mortgagebudget.com.au/resources"
        />
        <meta
          property="og:description"
          content="Learn what goes into buying a home, from stamp duty to conveyancing to lenders mortgage insurance."
        />
      </Helmet>
      <div className="linksPageContainer">
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Transfer/stamp duty</h2>
          <div className="linksContainer">
            <p>
              Stamp duty, also known as land transfer duty, is a tax that state
              and territory governments apply to certain documents and
              transactions.
            </p>
            <p>
              The amount of stamp duty you’ll pay will change based on the value
              of the transaction and where the purchase took place, so it’s
              important to check the specific details for the state or territory
              where you plan to buy property.
            </p>
            <p>
              You can work out the stamp duty on a property in any Australian
              state or territory using the{" "}
              <a
                className="link"
                href="https://conveyancing.com.au/tools/stamp-duty-calculator"
                target="_blank"
                rel="noreferrer"
              >
                calculator
              </a>{" "}
              developed by{" "}
              <a
                href="https://conveyancing.com.au/"
                target="_blank"
                rel="noreferrer"
              >
                Conveyancing.com.au
              </a>
              .
            </p>
            <p>
              However, if you want more details about a specific state or
              territory, you can use the links below.
            </p>
            <p>
              <a
                href="https://www.revenue.act.gov.au/duties/conveyance-duty "
                target="_blank"
                rel="noreferrer"
              >
                Australian Capital Territory
              </a>
            </p>
            <p>
              <a
                href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty "
                target="_blank"
                rel="noreferrer"
              >
                New South Wales
              </a>
            </p>
            <p>
              <a
                href="https://qro.qld.gov.au/duties/transfer-duty/calculate/transfer-duty-estimator/"
                target="_blank"
                rel="noreferrer"
              >
                Queensland
              </a>
            </p>
            <p>
              <a
                href="https://www.service.tas.gov.au/services/housing-and-property/rates-land-tax-and-duty/calculate-property-transfer-duty"
                target="_blank"
                rel="noreferrer"
              >
                Tasmania
              </a>
            </p>
            <p>
              <a
                href="https://www.sro.vic.gov.au/calculators/land-transfer-calculator"
                target="_blank"
                rel="noreferrer"
              >
                Victoria
              </a>
            </p>
            <p>
              <a
                href="https://www.wa.gov.au/service/financial-management/taxation-and-duty/calculate-your-transfer-duty "
                target="_blank"
                rel="noreferrer"
              >
                Western Australia
              </a>
            </p>
          </div>
        </div>
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Legal fees</h2>
          <div className="linksContainer">
            <p>
              Legal fees are a necessary part of buying property. With all the
              paperwork and fine print involved, having someone who can work
              with you to translate it is essential to ensure you don’t get into
              any trouble down the line. This is where conveyancers and
              solictors come in.
            </p>

            <p>
              Typically the legal fees associated with buying a property can
              range from $800 to $2,500, although some conveyancers will charge
              a reduced fee if the purchase doesn’t reach settlement. Before we
              get into that though, what is the difference between a conveyancer
              and a solicitor?
            </p>
            <b>Conveyancers</b>
            <p>
              Conveyancers prepare and review all documentation related to
              transfers, conduct title and certificate searches, communicate
              with the vendor on your behalf and help you deal with any issues
              that might arise throughout the transfer process. They are
              generally well versed in local laws and procedures. Conveyancers
              can be less expensive than qualified solicitors, making them an
              excellent choice for straightforward property transactions.
            </p>
            <b>Solicitor</b>
            <p>
              As opposed to a conveyancer, a solicitor is a fully fledged legal
              professional. They do the same tasks as a conveyancer (in fact, in
              this role they are conveyancers), but they have a greater
              knowledge of the law. They are more equipped to deal with
              complicated or out-of-the-ordinary issues or complex sales. And
              they can advise you on difficult matters, such as
              tax implications.
            </p>

            <p>
              Another important difference is that a solicitor can act on
              property transactions Australia wide, not specific to the state
              that their certificate was received. In contrast, conveyancers are
              only permitted to transact in the state that they are licensed.
            </p>
            <h3>How to choose between a conveyancer and a solicitor</h3>
            <p>
              When deciding whether to use a conveyancer or a solicitor when
              purchasing your home, it’s helpful to be fully informed about the
              benefits and drawbacks of each. Below is a collection of external
              resources that can help you make the best choice for
              your situation.
            </p>
            <p>
              <a
                href="https://www.boq.com.au/blog/property/solicitor-conveyancer"
                target="_blank"
                rel="noreferrer"
              >
                Advice from BOQ
              </a>
            </p>
            <p>
              <a
                href="https://www.ubank.com.au/tips-and-guides/agents-solicitors-conveyancers"
                target="_blank"
                rel="noreferrer"
              >
                Advice from uBank
              </a>
            </p>
            <p>
              <a
                href="https://couttslegal.com.au/blog/solicitor-vs-conveyancer-what-is-the-real-difference/"
                target="_blank"
                rel="noreferrer"
              >
                Advice from Coutts Lawyers and Conveyencers
              </a>
            </p>
            <h3>Recommended conveyancers and solicitors</h3>
            <p>
              After deciding between a conveyancer and a solicitor, you need to
              start looking for someone in the industry who’ll be the right fit
              for you. To make it easier for you, we’ve brought together a list
              of conveyancers and solicitors that we trust.
            </p>
            <p>
              Conveyancer (NSW, Vic and Qld):{" "}
              <a
                href="https://conveyancing.com.au/"
                target="_blank"
                rel="noreferrer"
              >
                Conveyancing.com.au
              </a>
            </p>

            <p>
              Conveyancer (NSW, Sydney):{" "}
              <a
                href="https://www.cmlaw.com.au/"
                target="_blank"
                rel="noreferrer"
              >
                CM Law
              </a>
            </p>
            <h4>More coming soon</h4>
          </div>
        </div>
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Lenders mortage insurance</h2>
          <div className="linksContainer">
            <p>
              When borrowing more than 80 per cent of a property’s value, it is
              generally a condition of the loan that the borrower pays Lenders
              Mortgage Insurance (LMI).
            </p>
            <p>
              One method to avoid paying LMI is to save up the minimum deposit
              for the property purchase. Alternatively, if your deposit is less
              than 20 per cent but you have a guarantor for the property loan,
              you may be able to avoid paying LMI. Your guarantor can assist by
              providing additional security, which reduces the Loan to Value
              Ratio (LVR) to 80 per cent and therefore enables you to avoid
              paying LMI.
            </p>
            <p>
              If LMI is added to your loan amount, your minimum monthly mortgage
              repayments will marginally increase to cover the cost.
            </p>
            <p>
              {" "}
              To help you work out the LMI for a property, you can use the{" "}
              <a
                href="https://www.homeloanexperts.com.au/lenders-mortgage-insurance/lmi-calculator/"
                target="_blank"
                rel="noreferrer"
              >
                LMI calculator
              </a>{" "}
              that{" "}
              <a
                href="https://www.homeloanexperts.com.au/"
                target="_blank"
                rel="noreferrer"
              >
                Home Loan Experts
              </a>{" "}
              have put together.
            </p>
            <h3>Additional reading</h3>
            <p>
              For more information about LMI, we recommend checking out the
              links below, which do a great job of running you through the ins
              and outs of what can otherwise be a little complicated.
            </p>
            <p>
              <a
                href="https://www.mortgagechoice.com.au/guides/home-ownership/lenders-mortgage-insurance/"
                target="_blank"
                rel="noreferrer"
              >
                Mortgage choice
              </a>
            </p>
            <p>
              <a
                href="https://insurancecouncil.com.au/articles/lenders-mortgage-insurance/"
                target="_blank"
                rel="noreferrer"
              >
                Insurance Council (articles)
              </a>
            </p>
            <p>
              <a
                href="https://www.loans.com.au/home-loans/first-home-buyer/what-is-lenders-mortgage-insurance"
                target="_blank"
                rel="noreferrer"
              >
                loans.com.au
              </a>
            </p>
          </div>
        </div>
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Property and strata reports</h2>
          <div className="linksContainer">
            <p>
              Strata and property reports are slightly different documents, but
              they’re crucial to have before you drop a small fortune on a home.
              Here we breakdown some of the differences between these documents,
              and what you should expect to pay for each.
            </p>
            <b>Strata reports</b>
            <p>
              For properties that exist under a Strata Title, such as an
              apartment block, strata reports will provide a full review of the
              Owners Corporation records, including information about the
              condition of the common areas and the strata’s finances, along
              with the minutes from strata meetings. These can cost up to $450
              to order a report, however you usually pay a smaller fee of around
              $50 to access the report before locking yourself into a contract,
              while the remaining cost is paid if you purchase the property.
            </p>
            <b>Property reports</b>
            <p>
              In contrast, a property report provides information about the
              condition of the property itself. Typically the owner of the
              property purchases a report for $300 to $600 when they intend to
              sell the property. Much like a strata report, you can access it
              for a smaller fee as a prospective buyer, but you will pay a
              larger sum once you purchase the property.
            </p>
          </div>
        </div>
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Mortgage brokers</h2>
          <div className="linksContainer">
            <h4>Coming soon!</h4>
            <p>
              Check back in soon as we find other ways to help you on your
              housing journey.
            </p>
          </div>
        </div>
        <div className="allLinkContainers">
          <h2 className="linkContainerHeading">Other useful links</h2>
          <div className="linksContainer">
            <h4>Coming soon!</h4>
            <p>
              Check back in soon as we find other ways to help you on your
              housing journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
