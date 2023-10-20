import { useState } from "react";
import "./Calculator.css";
import SideBar from "../sideBarCalc/sideBarCalc";

import {
  calculateSalaryAfterTax,
  calculateMortgageAmount,
  calculateMonthlyMortgageRepayments,
  calculateMonthlyPropertyExpenses,
  calculateMonthlyPersonalExpenses,
  calculateMonthlyContribution,
  calculateBankBalanceAfterPurchase,
} from "../../utils/calcHelperFunctions";

const Calculator = () => {
  const [mortgageCalculator, setMortgageCalculator] = useState({
    salaryTotal: 0,
    currentBankBalance: 0,
    propertyPrice: 0,
    deposit: 0,
    interestRate: 0,
    lengthOfMortgage: 0,
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
    insurance: 0,
    repayments: 0,
    food: 0,
    entertainment: 0,
    travel: 0,
    household: 0,
    vehicle: 0,
    other: 0,
    transferStampDuty: 0,
    legalConveyancerFees: 0,
    propertyReports: 0,
    decorating: 0,
    renovations: 0,
    LMIIfPaidYearly: 0,
    notes: "",
  });

  // input handlers

  // converts calculation outputs to currency format on autofill
  const convertOutputToCurrency = (value) => {
    const valueInCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
    return valueInCurrency;
  };

  // converts values to currency type in the same input field on blur
  const handleBlur = (e) => {
    let value = e.target.value;
    let parseValue = parseFloat(value.replace(/[$,]/g, ""));
    if (isNaN(parseValue)) {
      parseValue = 0;
    }
    const valueInCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseValue);
    e.target.value = valueInCurrency;
  };

  // converts value back to number type in the same input field on focus
  const handleFocus = (e) => {
    let value = e.target.value;
    if (isNaN(value)) {
      let parseValue = parseFloat(value.replace(/[$,]/g, ""));
      e.target.value = parseValue;
    }
  };

  // updates corresponding state field based on change to input fields
  const handleInput = (e) => {
    const name = e.target.name;
    const value = parseFloat(e.target.value);

    if (isNaN(value) || value < 0) {
      return;
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
    mortgageCalculator.salaryTotal
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
      <div className="adContainerCalculator">
        <h2>Ad sense</h2>
      </div>
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
      />
      <div className="formContainer">
        <h2 className="formLabels">Income/assets</h2>
        <form className="calculationContainer">
          <label>Yearly salary (ignoring super)</label>
          <input
            id="yearlySalaryInput"
            type="text"
            placeholder="$0.00"
            name="salaryTotal"
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
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Deposit</label>
          <input
            type="text"
            name="deposit"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Interest rate</label>
          <input
            type="text"
            name="interestRate"
            placeholder="1.5%"
            className="greenBorderFocus"
            maxLength="5"
            inputMode="decimal"
            onChange={handleInput}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Length of mortgage</label>
          <input
            type="text"
            name="lengthOfMortgage"
            placeholder="10"
            className="greenBorderFocus"
            maxLength="2"
            inputMode="numeric"
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
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>LMI (if paid monthly)</label>
          <input
            type="text"
            name="LMIIfPaidMonthly"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
        </form>
      </div>
      <div className="formContainer">
        <h2 className="formLabels">Personal expenses</h2>

        <form className="calculationContainer">
          <h3 className="billsFormLabels">Bills</h3>
          <div className="billsFormContainer">
            <label>Power</label>
            <input
              type="text"
              name="power"
              placeholder="$0.00"
              className="greenBorderFocus"
              maxLength="9"
              inputMode="numeric"
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
              onChange={handleInput}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onKeyDown={handleKeydown}
            ></input>
            <span className="errorMessage"> </span>
            <label>Insurance</label>
            <input
              type="text"
              name="insurance"
              placeholder="$0.00"
              className="greenBorderFocus"
              maxLength="9"
              inputMode="numeric"
              onChange={handleInput}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onKeyDown={handleKeydown}
            ></input>
            <span className="errorMessage"> </span>
          </div>

          <label>Repayments</label>
          <input
            type="text"
            name="repayments"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
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
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Household</label>
          <input
            type="text"
            name="household"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Vehicle(s)</label>
          <input
            type="text"
            name="vehicle"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
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
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
        </form>
      </div>
      <div className="secondAdContainer">
        <h2>Ad sense</h2>
      </div>

      <div className="formContainer">
        <h2 className="formLabels">Purchase budget</h2>
        <form className="calculationContainer">
          <label>Current bank balance</label>

          <label>Transfer/stamp duty</label>
          <input
            type="text"
            name="transferStampDuty"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Legal/conveyancer fees</label>
          <input
            type="text"
            name="legalConveyancerFees"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Property reports</label>
          <input
            type="text"
            name="propertyReports"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
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
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>LMI (if paid upfront)</label>
          <input
            type="text"
            name="LMIIfPaidYearly"
            placeholder="$0.00"
            className="greenBorderFocus"
            maxLength="9"
            inputMode="numeric"
            onChange={handleInput}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyDown={handleKeydown}
          ></input>
          <span className="errorMessage"> </span>
          <label>Notes (max 250 characters)</label>
          <textarea
            name="text"
            rows="13"
            cols="10"
            wrap="soft"
            maxLength="250"
            className="additionalNotes"
            onChange={handleInputTextField}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
