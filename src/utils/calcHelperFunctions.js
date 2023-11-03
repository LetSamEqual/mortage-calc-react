// helper function to calculate monthly salary after tax

const calculateSalaryAfterTax = (userSalary, otherIncome) => {
  let personalSalary = userSalary;
  let other = otherIncome;

  let total;
  if (typeof personalSalary === "string") {
    personalSalary = parseFloat(personalSalary.replace(/[$,]/g, ""));
  }

  if (typeof other === "string") {
    other = parseFloat(other.replace(/[$,]/g, ""));
  }
  if (typeof personalSalary !== "number") {
    personalSalary = parseFloat(personalSalary);
  }
  if (typeof other !== "number") {
    other = parseFloat(other);
  }

  const salary = personalSalary + other * 12;

  if (salary < 0 || isNaN(salary)) {
    total = 0;
  }
  if (salary < 18201) {
    const monthlyIncome = Math.ceil(salary / 12);
    total = monthlyIncome;
  }
  if (salary > 18200 && salary < 45001) {
    let medicareLevy = salary * 0.02;

    let firstBracket = salary - 18200;
    let firstBracketTaxRate = firstBracket * 0.19 + medicareLevy;

    let firstBracketTotalSalary = Math.ceil(
      (salary - firstBracketTaxRate) / 12
    );
    total = firstBracketTotalSalary;
  } else if (salary > 45000 && salary < 120001) {
    let medicareLevy = salary * 0.02;
    let secondBracket = salary - 45001;
    let secondBracketTaxRate = secondBracket * 0.325 + 5092 + medicareLevy;
    let secondBracketTotalSalary = Math.ceil(
      (salary - secondBracketTaxRate) / 12
    );
    total = secondBracketTotalSalary;
  } else if (salary > 12000 && salary < 180000) {
    let medicareLevy = salary * 0.02;
    let thirdBracket = salary - 120001;
    let thirdBracketTaxRate = thirdBracket * 0.37 + 29467 + medicareLevy;
    let thirdBracketTotalSalary = Math.ceil(
      (salary - thirdBracketTaxRate) / 12
    );
    total = thirdBracketTotalSalary;
  } else if (salary > 180000) {
    let medicareLevy = salary * 0.02;
    let fourthBracket = salary - 180001;
    let fourthBracketTaxRate = fourthBracket * 0.45 + 51667 + medicareLevy;
    let fourthBracketTotalSalary = Math.ceil(
      (salary - fourthBracketTaxRate) / 12
    );
    total = fourthBracketTotalSalary;
    console.log(total);
  }
  return total;
};

const calculateMortgageAmount = (price, dep) => {
  let propertyPrice = price;
  let deposit = dep;
  if (typeof propertyPrice === "string") {
    propertyPrice = parseFloat(price.replace(/[$,]/g, ""));
  }
  if (typeof deposit === "string") {
    deposit = parseFloat(dep.replace(/[$,]/g, ""));
  }
  if (typeof propertyPrice !== "number") {
    propertyPrice = parseFloat(propertyPrice);
  }
  if (typeof deposit !== "number") {
    deposit = parseFloat(deposit);
  }
  const mortgageAmount = propertyPrice - deposit;
  return mortgageAmount;
};

const calculateMonthlyMortgageRepayments = (mortgage, interest, years) => {
  let mortgageAmount = mortgage;
  let interestRate = interest;
  let mortageInYears = years;
  if (typeof mortgageAmount === "string") {
    mortgageAmount = parseFloat(mortgageAmount.replace(/[$,]/g, ""));
  }
  if (typeof interestRate === "string") {
    interestRate = parseFloat(interestRate.replace(/[$,]/g, ""));
  }
  if (typeof mortageInYears === "string") {
    mortageInYears = parseFloat(mortageInYears.replace(/[$,]/g, ""));
  }
  if (typeof mortgageAmount !== "number") {
    mortgageAmount = parseFloat(mortgageAmount);
  }
  if (typeof interestRate !== "number") {
    interestRate = parseFloat(interestRate);
  }
  if (typeof mortageInYears !== "number") {
    mortageInYears = parseFloat(mortageInYears);
  }
  if (mortgageAmount <= 0 || interestRate <= 0 || mortageInYears <= 0) {
    return 0;
  }
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
};

const calculateMonthlyPropertyExpenses = (
  mortgageRepayments,
  { strataPerQuarter, councilTaxPerQuarter, LMIIfPaidMonthly }
) => {
  let monthlyMortgageRepayments = mortgageRepayments;
  let strata = strataPerQuarter;
  let councilTax = councilTaxPerQuarter;
  let lmi = LMIIfPaidMonthly;

  if (typeof monthlyMortgageRepayments === "string") {
    monthlyMortgageRepayments = parseFloat(
      monthlyMortgageRepayments.replace(/[$,]/g, "")
    );
  }
  if (typeof strata === "string") {
    strata = parseFloat(strata.replace(/[$,]/g, ""));
  }
  if (typeof councilTax === "string") {
    councilTax = parseFloat(councilTax.replace(/[$,]/g, ""));
  }
  if (typeof lmi === "string") {
    lmi = parseFloat(lmi.replace(/[$,]/g, ""));
  }
  if (typeof monthlyMortgageRepayments !== "number") {
    monthlyMortgageRepayments = parseFloat(monthlyMortgageRepayments);
  }
  if (typeof strata !== "number") {
    strata = parseFloat(strata);
  }
  if (typeof councilTax !== "number") {
    councilTax = parseFloat(councilTax);
  }
  if (typeof lmi !== "number") {
    lmi = parseFloat(lmi);
  }

  const totalExpenses =
    monthlyMortgageRepayments + strata / 3 + councilTax / 3 + lmi;
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
  const expensesArray = [
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
  ];

  const formattedArray = expensesArray.map((el) => {
    if (typeof el === "string") {
      el = parseFloat(el.replace(/[$,]/g, ""));
      return el;
    }
    return parseFloat(el);
  });

  const total = formattedArray.reduce((sum, el) => sum + el, 0);

  return total;
};

const calculateMonthlyContribution = (
  salary,
  propertyExpenses,
  personalExpenses
) => {
  const unformattedArray = [salary, propertyExpenses, personalExpenses];
  const formattedArray = unformattedArray.map((el) => {
    if (typeof el === "string") {
      el = parseFloat(el.replace(/[$,]/g, ""));
      return el;
    }
    return parseFloat(el);
  });

  const total = formattedArray.reduce((sum, el) => sum - el);

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
  const unformattedArray = [
    currentBankBalance,
    deposit,
    transferStampDuty,
    legalConveyancerFees,
    propertyReports,
    decorating,
    renovations,
    LMIIfPaidYearly,
  ];
  const formattedArray = unformattedArray.map((el) => {
    if (typeof el === "string") {
      el = parseFloat(el.replace(/[$,]/g, ""));
      return el;
    }
    return parseFloat(el);
  });

  const total = formattedArray.reduce((sum, el) => sum - el);

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
