// helper function to calculate monthly salary after tax

const convertOutputToCurrency = (value) => {
  const valueInCurrency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
  return valueInCurrency;
};

const calculateSalaryAfterTax = (userSalary) => {
  const salary = userSalary;
  let total;

  if (salary < 0 || isNaN(salary)) {
    total = 0;
  }
  if (salary < 18201) {
    const monthlyIncome = Math.floor(salary / 12);
    total = monthlyIncome;
  }
  if (salary > 18200 && salary < 45001) {
    let firstBracket = salary - 18200;
    let firstBracketTaxRate = firstBracket * 0.19;
    let firstBracketTotalSalary = Math.floor(
      (salary - firstBracketTaxRate) / 12
    );
    total = firstBracketTotalSalary;
  } else if (salary > 45000 && salary < 120000) {
    let secondBracket = salary - 45001;
    let secondBracketTaxRate = secondBracket * 0.325 + 5092;
    let secondBracketTotalSalary = Math.floor(
      (salary - secondBracketTaxRate) / 12
    );
    total = secondBracketTotalSalary;
  } else if (salary > 120000 && salary < 180000) {
    let thirdBracket = salary - 120001;
    let thirdBracketTaxRate = thirdBracket * 0.37 + 29467;
    let thirdBracketTotalSalary = Math.floor(
      (salary - thirdBracketTaxRate) / 12
    );
    total = thirdBracketTotalSalary;
  } else if (salary > 180000) {
    let fourthBracket = salary - 180001;
    let fourthBracketTaxRate = fourthBracket * 0.45 + 51667;
    let fourthBracketTotalSalary = Math.floor(
      (salary - fourthBracketTaxRate) / 12
    );
    total = fourthBracketTotalSalary;
  }
  return total;
};

const calculateMortgageAmount = (propertyPrice, deposit) => {
  const mortgageAmount = propertyPrice - deposit;
  return mortgageAmount;
};

const calculateMonthlyMortgageRepayments = (
  mortgageAmount,
  interestRate,
  mortageInYears
) => {
  if (mortgageAmount <= 0 || interestRate <= 0 || mortageInYears <= 0) {
    return 0;
  } else {
    const numberOfMortgagePayments = mortageInYears * 12;
    const interestRateInDecimal = interestRate / 100;
    const annualInterestRate = interestRateInDecimal / 12;
    const interestRateToPowerMonths =
      (1 + annualInterestRate) ** numberOfMortgagePayments;
    const dividend = annualInterestRate * interestRateToPowerMonths;
    const denominator = interestRateToPowerMonths - 1;
    const totalDivided = dividend / denominator;
    const totalPayment = mortgageAmount * totalDivided;
    return Math.floor(totalPayment);
  }
};

const calculateMonthlyPropertyExpenses = (
  monthlyMortgageRepayments,
  { strataPerQuarter, councilTaxPerQuarter, LMIIfPaidMonthly }
) => {
  const totalExpenses =
    monthlyMortgageRepayments +
    strataPerQuarter / 3 +
    councilTaxPerQuarter / 3 +
    LMIIfPaidMonthly;
  return Math.floor(totalExpenses);
};

const calculateMonthlyPersonalExpenses = ({
  power,
  water,
  gas,
  internet,
  phone,
  accounts,
  memberships,
  insurance,
  repayments,
  food,
  entertainment,
  travel,
  household,
  vehicle,
  other,
}) => {
  const total =
    power +
    water +
    gas +
    internet +
    phone +
    accounts +
    memberships +
    insurance +
    repayments +
    food +
    entertainment +
    travel +
    household +
    vehicle +
    other;

  return total;
};

const calculateMonthlyContribution = (
  salaryAfterTax,
  monthlyPropertyExpenses,
  monthlyPersonalExpenses
) => {
  const total =
    salaryAfterTax - monthlyPersonalExpenses - monthlyPropertyExpenses;

  if (isNaN(total)) {
    return 0;
  }
  return total;
};

const calculateBankBalanceAfterPurchase = ({
  currentBankBalance,
  deposit,
  transferStampDuty,
  legalConveyancerFees,
  propertyReports,
  decorating,
  renovations,
  LMIIfPaidYearly,
}) => {
  const total =
    currentBankBalance -
    deposit -
    transferStampDuty -
    legalConveyancerFees -
    propertyReports -
    decorating -
    renovations -
    LMIIfPaidYearly;

  return total;
};

export {
  calculateSalaryAfterTax,
  calculateMortgageAmount,
  calculateMonthlyMortgageRepayments,
  calculateMonthlyPropertyExpenses,
  calculateMonthlyPersonalExpenses,
  calculateMonthlyContribution,
  calculateBankBalanceAfterPurchase,
};
