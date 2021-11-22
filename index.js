// P is the principal loan amount
// r is the monthly interest rate
// n is the total number of payments on your mortgage

// P(r(1+r)^n/((1+r)^n)-1))

function calculateMortgage(event) {
  let principalLoan = document.getElementById("principalInput").value;
  let percentage = document.getElementById("interestInput").value;
  let years = document.getElementById("timeInput").value;

  let months = years * 12;
  let interest = (percentage * 0.01) / 12;
  console.log({ months, interest });
  const mortgage =
    (principalLoan * Math.pow(1 + interest, months) * interest) /
    (Math.pow(1 + interest, months) - 1);

  const mortgageDollar = mortgage.toFixed(2);

  document.getElementById(
    "totalMortgage"
  ).innerHTML = `Your monthly mortgage payment will be $${mortgageDollar}`;

  event.preventDefault();
}

// P * r * (1 + r) ** n
