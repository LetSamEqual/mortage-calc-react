import "./sideBarCalc.css";

const SideBar = ({ data }) => {
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

  return (
    <div className="calculatedValuesContainer">
      <h2 className="sideBarHeadingH2 mobileInvisible">
        Simple net monthly income: {convertOutputToCurrency(salaryAfterTax)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(salaryAfterTax)}
      </h3> */}
      <h2 className="sideBarHeadingH2 mobileInvisible">
        Mortgage amount: {convertOutputToCurrency(mortgageAmount)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {convertOutputToCurrency(mortgageAmount)}
      </h3> */}
      <h2 className="sideBarHeadingH2">
        Monthly mortgage repayments:{" "}
        {convertOutputToCurrency(monthlyMortgageRepayments)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(monthlyMortgageRepayments)}
      </h3> */}
      <h2 className="sideBarHeadingH2">
        Total monthly property expenses:{" "}
        {convertOutputToCurrency(monthlyPropertyExpenses)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(monthlyPropertyExpenses)}
      </h3> */}
      <h2 className="sideBarHeadingH2">
        Total monthly personal expenses:{" "}
        {convertOutputToCurrency(monthlyPersonalExpenses)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(monthlyPersonalExpenses)}
      </h3> */}
      <h2 className="sideBarHeadingH2">
        Monthly contribution to savings:{" "}
        {convertOutputToCurrency(monthlyContributions)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(monthlyContributions)}
      </h3> */}
      <h2 className="sideBarHeadingH2 mobileInvisible">
        Annual contribution to savings:{" "}
        {convertOutputToCurrency(annualContributions)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(annualContributions)}
      </h3> */}
      <h2 className="sideBarHeadingH2 mobileInvisible">
        Bank balance after purchase:{" "}
        {convertOutputToCurrency(bankBalanceAfterPurchase)}
      </h2>
      {/* <h3 className="sideBarHeadingH3">
        {" "}
        {convertOutputToCurrency(bankBalanceAfterPurchase)}
      </h3> */}
    </div>
  );
};

export default SideBar;
