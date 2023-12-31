import { useState, useEffect } from "react";
import "./Calculator.css";
import SideBar from "../sideBarCalc/sideBarCalc";
import Popover from "../popover/popover";

import {
  calculateSalaryAfterTax,
  calculateMortgageAmount,
  calculateMonthlyMortgageRepayments,
  calculateMonthlyPropertyExpenses,
  calculateMonthlyPersonalExpenses,
  calculateMonthlyContribution,
  calculateBankBalanceAfterPurchase,
} from "../../utils/calcHelperFunctions";
import SiteIntro from "../siteIntro/siteIntro";

const Calculator = () => {
  const [mortgageCalculator, setMortgageCalculator] = useState({
    salaryTotal: 0,
    otherIncome: 0,
    currentBankBalance: 0,
    propertyPrice: 0,
    deposit: 0,
    interestRate: 0,
    lengthOfMortgage: 30,
    strataPerQuarter: 0,
    councilTaxPerQuarter: 0,
    LMIIfPaidMonthly: 0,
    power: 0,
    water: 0,
    gas: 0,
    internet: 0,
    phone: 0,
    accounts: 0,
    memberships: 0,
    homeInsurance: 0,
    repayments: 0,
    food: 0,
    entertainment: 0,
    travel: 0,
    clothing: 0,
    vehicleInsurance: 0,
    fuel: 0,
    rego: 0,
    servicingParts: 0,
    other: 0,
    transferStampDuty: 0,
    legalConveyancerFees: 0,
    propertyReports: 0,
    decorating: 0,
    renovations: 0,
    LMIIfPaidYearly: 0,
    notes: "",
  });

  const [toLocalStorage, setToLocalStorage] = useState(true);

  const setLocalStorage = () => {
    const shouldStore = !toLocalStorage;
    setToLocalStorage(!toLocalStorage);

    if (localStorage.getItem("userData") === null) {
      return;
    }
    if (shouldStore === true) {
      localStorage.setItem(
        "userData",
        JSON.stringify([shouldStore, mortgageCalculator])
      );
      return;
    }
    localStorage.removeItem("userData");
    localStorage.setItem("userData", JSON.stringify([shouldStore]));
  };

  useEffect(() => {
    if (localStorage.getItem("userData") === null) {
      return;
    }
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (userData[1] === undefined) {
      setToLocalStorage(userData[0]);
      return;
    }

    setToLocalStorage(userData[0]);
    setMortgageCalculator(userData[1]);
  }, []);

  // input handlers

  // converts calculation outputs to currency format on autofill

  // converts values to currency type in the same input field on blur

  const handleBlur = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let parseValue = parseFloat(value.replace(/[$,]/g, ""));
    if (isNaN(parseValue)) {
      parseValue = 0;
    }
    const valueInCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseValue);

    e.target.value = valueInCurrency;

    setMortgageCalculator({
      ...mortgageCalculator,
      [name]: valueInCurrency,
    });
    if (toLocalStorage) {
      window.localStorage.setItem(
        "userData",
        JSON.stringify([
          toLocalStorage,
          {
            ...mortgageCalculator,
            [name]: valueInCurrency,
          },
        ])
      );
    }
  };

  const handleBlurNotCurrency = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if (toLocalStorage) {
      window.localStorage.setItem(
        "userData",
        JSON.stringify([
          toLocalStorage,
          {
            ...mortgageCalculator,
            [name]: value,
          },
        ])
      );
    }
  };

  // converts value back to number type in the same input field on focus
  const handleFocus = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (isNaN(value)) {
      let parseValue = parseFloat(value.replace(/[$,]/g, ""));
      e.target.value = parseValue;
      setMortgageCalculator({ ...mortgageCalculator, [name]: parseValue });
    }
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return;
    }

    e.target.setSelectionRange(0, 9999);
  };

  // updates corresponding state field based on change to input fields
  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (typeof value === "string" && !value.includes(".")) {
      value = parseFloat(value);
    }
    if (isNaN(value) || value < 0) {
      value = 0;
    }
    setMortgageCalculator({
      ...mortgageCalculator,
      [name]: value,
    });
  };

  const handleInputTextField = (e) => {
    const value = e.target.value;
    setMortgageCalculator({
      ...mortgageCalculator,
      notes: value,
    });
  };

  const handleKeydown = (e) => {
    const key = e.key;
    const validCharacters = /^[0-9.]+$/;

    if (
      key.match(validCharacters) ||
      key === "Backspace" ||
      key === "Delete" ||
      key === "Tab"
    ) {
      e.target.className = "greenBorderFocus";
      return;
    }
    e.preventDefault();
    e.target.className = "greenBorderFocus invalid";
  };

  const salaryAfterTax = calculateSalaryAfterTax(
    mortgageCalculator.salaryTotal,
    mortgageCalculator.otherIncome
  );

  const mortgageAmount = calculateMortgageAmount(
    mortgageCalculator.propertyPrice,
    mortgageCalculator.deposit
  );

  const monthlyMortgageRepayments = calculateMonthlyMortgageRepayments(
    mortgageAmount,
    mortgageCalculator.interestRate,
    mortgageCalculator.lengthOfMortgage
  );

  const monthlyPropertyExpenses = calculateMonthlyPropertyExpenses(
    monthlyMortgageRepayments,
    mortgageCalculator
  );

  const monthlyPersonalExpenses =
    calculateMonthlyPersonalExpenses(mortgageCalculator);

  const monthlyContributions = calculateMonthlyContribution(
    salaryAfterTax,
    monthlyPersonalExpenses,
    monthlyPropertyExpenses
  );

  const annualContributions = monthlyContributions * 12;

  const bankBalanceAfterPurchase =
    calculateBankBalanceAfterPurchase(mortgageCalculator);

  return (
    <div className="calculatorContainer">
      <SideBar
        className="sidebarContainer"
        data={{
          salaryAfterTax,
          mortgageAmount,
          monthlyMortgageRepayments,
          monthlyPropertyExpenses,
          monthlyPersonalExpenses,
          monthlyContributions,
          annualContributions,
          bankBalanceAfterPurchase,
        }}
        setLocalStorage={setLocalStorage}
        toLocalStorage={toLocalStorage}
      />
      <SiteIntro />
      <div className="formContainer">
        <h2 className="formLabels">Income/assets</h2>
        <form className="calculationContainer">
          <label>
            Yearly salary (ignoring super)
            <sup>
              <a href="#firstDisclaimer" className="superscript">
                1
              </a>
            </sup>
          </label>
          <input
            id="yearlySalaryInput"
            type="text"
            placeholder="$0.00"
            name="salaryTotal"
            value={mortgageCalculator.salaryTotal}
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onKeyDown={handleKeydown}
            onInput={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />{" "}
          <span className="errorMessage"> </span>
          <label>
            Other taxable income (monthly)
            <sup>
              <a href="#firstDisclaimer" className="superscript">
                1
              </a>
            </sup>
          </label>
          <input
            type="text"
            placeholder="$0.00"
            name="otherIncome"
            value={mortgageCalculator.otherIncome}
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onKeyDown={handleKeydown}
            onInput={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <span className="errorMessage"> </span>
          <label>Current bank balance</label>
          <input
            type="text"
            name="currentBankBalance"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.currentBankBalance}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
        </form>
      </div>
      <div className="formContainer">
        <h2 className="formLabels">Property expenses</h2>
        <form className="calculationContainer">
          <label>Property price</label>
          <input
            type="text"
            name="propertyPrice"
            placeholder="$0.00 (required)"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.propertyPrice}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <div className="popoverComponent">
            <label>Deposit</label>
            <Popover
              displayedText={
                "If less than 20% of purchase price you may need LMI. See resources."
              }
            />
          </div>
          <input
            type="text"
            name="deposit"
            placeholder="$0.00 (required)"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.deposit}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
            required
          ></input>
          <span className="errorMessage"> </span>
          <div className="popoverComponent">
            <label>Interest rate</label>
            <Popover
              displayedText={
                "As interest rates can change over the lifespan of a mortgage, we recommend also exploring the effect of a 1–4% rate rise."
              }
            />
          </div>
          <input
            type="text"
            name="interestRate"
            placeholder="1.5% (required)"
            className="greenBorderFocus"
            maxLength="5"
            inputMode="decimal"
            value={mortgageCalculator.interestRate}
            onBlur={handleBlurNotCurrency}
            onChange={handleInput}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Length of mortgage (years)</label>
          <input
            type="text"
            name="lengthOfMortgage"
            placeholder="10 (required)"
            className="greenBorderFocus"
            maxLength="2"
            inputMode="numeric"
            value={mortgageCalculator.lengthOfMortgage}
            onBlur={handleBlurNotCurrency}
            onChange={handleInput}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Strata per quarter</label>
          <input
            type="text"
            name="strataPerQuarter"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.strataPerQuarter}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Council tax per quarter</label>
          <input
            type="text"
            name="councilTaxPerQuarter"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.councilTaxPerQuarter}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <div className="popoverComponent">
            <label>LMI, if paid monthly</label>
            <Popover
              displayedText={"See the resources page for more information."}
            />
          </div>
          <input
            type="text"
            name="LMIIfPaidMonthly"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.LMIIfPaidMonthly}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
        </form>
      </div>
      <div className="formContainer">
        <h2 className="formLabels">Monthly personal expenses</h2>

        <form className="calculationContainer">
          <label>Power</label>
          <input
            type="text"
            name="power"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.power}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Water</label>
          <input
            type="text"
            name="water"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.water}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Gas</label>
          <input
            type="text"
            name="gas"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.gas}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Internet</label>
          <input
            type="text"
            name="internet"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.internet}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Phone plan</label>
          <input
            type="text"
            name="phone"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.phone}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Accounts (streaming)</label>
          <input
            type="text"
            name="accounts"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.accounts}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Memberships</label>
          <input
            type="text"
            name="memberships"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.memberships}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Home insurance</label>
          <input
            type="text"
            name="homeInsurance"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.homeInsurance}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>

          <label>Repayments</label>
          <input
            type="text"
            name="repayments"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.repayments}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Food</label>
          <input
            type="text"
            name="food"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.food}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Entertainment</label>
          <input
            type="text"
            name="entertainment"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.entertainment}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Travel</label>
          <input
            type="text"
            name="travel"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.travel}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Clothing</label>
          <input
            type="text"
            name="clothing"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.clothing}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Vehicle insurance (monthly)</label>
          <input
            type="text"
            name="vehicleInsurance"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.vehicleInsurance}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Fuel (monthly)</label>
          <input
            type="text"
            name="fuel"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.fuel}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Rego (yearly)</label>
          <input
            type="text"
            name="rego"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.rego}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Servicing and parts (yearly)</label>
          <input
            type="text"
            name="servicingParts"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.servicingParts}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Other</label>
          <input
            type="text"
            name="other"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.other}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
        </form>
      </div>

      <div className="formContainer">
        <h2 className="formLabels">Purchase budget</h2>
        <form className="calculationContainer">
          <div className="popoverComponent">
            <label>Transfer/stamp duty</label>
            <Popover
              displayedText={"See the resources page for more information."}
            />
          </div>
          <input
            type="text"
            name="transferStampDuty"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.transferStampDuty}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <div className="popoverComponent">
            <label>Legal/conveyancer fees</label>
            <Popover
              displayedText={"See the resources page for more information."}
            />
          </div>
          <input
            type="text"
            name="legalConveyancerFees"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.legalConveyancerFees}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <div className="popoverComponent">
            <label>Property reports</label>
            <Popover
              displayedText={`See the resources page for more information.`}
            />
          </div>
          <input
            type="text"
            name="propertyReports"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.propertyReports}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Decorating</label>
          <input
            type="text"
            name="decorating"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.decorating}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Renovations</label>
          <input
            type="text"
            name="renovations"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.renovations}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>LMI, if paid upfront</label>
          <input
            type="text"
            name="LMIIfPaidYearly"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            value={mortgageCalculator.LMIIfPaidYearly}
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Notes (max 600 characters)</label>
          <textarea
            name="text"
            rows="13"
            cols="10"
            wrap="soft"
            maxLength="600"
            className="additionalNotes"
            value={mortgageCalculator.notes}
            onChange={handleInputTextField}
          ></textarea>
        </form>
      </div>
      <div className="disclaimersContainer">
        <h2>Disclaimers and notes</h2>
        <p>
          The information on this site constitutes general information only.
          MortgageBudget.com.au is not a financial adviser and the advice given
          by this site should not be considered professional advice. Further,
          the calculations and tools on this site are intended to provide
          general information only, and should not be substituted for
          professional advice. MortgageBudget.com.au provides no warranties and
          makes no representation that the information and tools here are
          appropriate for your circumstances or are intended to indicate a
          particular course of action. You should consider seeking independent
          legal, financial, taxation and/or other advice to see how the
          information given here relates to your personal circumstances.
        </p>
        <p>
          MortgageBudget.com.au also provides links to third-party sites for
          your convenience throughout the MortgageBudget website. While we
          choose these sites carefully, we do not endorse or represent these
          external sites. We encourage you to examine the copywrite, privacy and
          disclaimer notices on those website.
        </p>
        <ol>
          <li id="firstDisclaimer">
            The tax rates used here are for Australian residents only, and use
            the 2022–2023 Australian marginal tax rates. This calculation
            includes the 2 per cent Medicare levy – the standard rate for most
            individual taxpayers – and does not take into account family income
            or dependents. The calculation does not include the Medicare Levy
            Surcharge, which is an additional levy of 1 to 1.5 per cent applied
            to higher income individuals and families who do not have private
            health insurance. Further, the calculation does not factor in any
            tax rebates or offsets you may be entitled to.
          </li>
          <li id="secondDisclaimer">
            By default, this site saves the information entered above to{" "}
            <strong>your device and your device only</strong>. The information
            is not stored externally by this site or provided to third parties.
            This feature exists solely to ensure a seamless experience between
            uses. You can disable this feature and delete any data saved to your
            device by this site (other than your preference to use this site
            with this default feature disabled) by using the toggle button at
            the top right of the ’Your stats‘ window on this page.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Calculator;
