import "./sideBarCalc.css";
import HideSidebar from "../hideSidebarButton/hideSidebarButton";
import { useState } from "react";

const SideBar = ({ data, setLocalStorage, toLocalStorage }) => {
  const {
    salaryAfterTax,
    mortgageAmount,
    monthlyMortgageRepayments,
    monthlyPropertyExpenses,
    monthlyPersonalExpenses,
    monthlyContributions,
    annualContributions,
    bankBalanceAfterPurchase,
  } = data;

  const convertOutputToCurrency = (value) => {
    const valueInCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
    return valueInCurrency;
  };

  const [sidebarHidden, setSidebarHidden] = useState(false);

  const handleSidebarHidden = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const negativeSavings =
    monthlyContributions < 0 ? "negativeSavings" : "positiveSavings";

  return (
    <div
      className={`calculatedValuesContainer ${
        sidebarHidden ? "sidebarHidden" : ""
      }`}
    >
      <div className="hideSidebarComponentContainer">
        <HideSidebar
          handleSidebarHidden={handleSidebarHidden}
          sidebarHidden={sidebarHidden}
        />
      </div>

      <div className="toggleContainer">
        <label className="switch">
          <input
            type="checkbox"
            className="localStorageToggle"
            onChange={setLocalStorage}
            checked={toLocalStorage}
          />
          <span className="slider round"></span>
        </label>
        <p className="automaticSavesNotification">
          {toLocalStorage
            ? "Automatic saves are enabled"
            : "Automatic saves are disabled"}
          <sup>
            <a href="#secondDisclaimer" className="superscript">
              2
            </a>
          </sup>
        </p>
      </div>
      <h1 className="sideBarHeading">Your stats</h1>
      <div className="valueContainers">
        <h2 className="sideBarHeadingH2 ">Monthly income after tax: </h2>
        <span className="finalNumber">
          {convertOutputToCurrency(salaryAfterTax)}
        </span>
      </div>

      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Mortgage amount:</h2>
        <span className="finalNumber">
          {convertOutputToCurrency(mortgageAmount)}
        </span>
      </div>
      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Bank balance after purchase:</h2>
        <span className="finalNumber">
          {convertOutputToCurrency(bankBalanceAfterPurchase)}
        </span>
      </div>
      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Monthly mortgage repayments:</h2>
        <span className="finalNumber">
          {convertOutputToCurrency(monthlyMortgageRepayments)}
        </span>
      </div>
      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Monthly property expenses:</h2>
        <span className="finalNumber">
          {convertOutputToCurrency(monthlyPropertyExpenses)}
        </span>
      </div>

      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Monthly personal expenses:</h2>
        <span className="finalNumber">
          {convertOutputToCurrency(monthlyPersonalExpenses)}
        </span>
      </div>

      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Monthly contribution to savings:</h2>
        <span className={`finalNumber ${negativeSavings}`}>
          {convertOutputToCurrency(monthlyContributions)}
        </span>
      </div>

      <div className="valueContainers">
        <h2 className="sideBarHeadingH2">Annual contribution to savings:</h2>
        <span className={`finalNumber ${negativeSavings}`}>
          {convertOutputToCurrency(annualContributions)}
        </span>
      </div>
    </div>
  );
};

export default SideBar;
