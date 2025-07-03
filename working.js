function calcIncomeTax() {
  const preFormattedIncome = document.getElementById("income").value;
  const income = parseFloat(preFormattedIncome.replace(/[^\d.-]/g, ''));
  const totalSpan = document.getElementById("total");

  if (isNaN(income) || income < 0) {
    totalSpan.innerHTML = "Invalid input";
    return;
  }

  let incomeTax = 0;

  // 1st slab: income <= 600,000 → 0%
  if (income <= 600000) {
    incomeTax = 0;

  // 2nd slab: 600,001 – 1,200,000 → 5% on amount above 600k
  } else if (income > 600000 && income <= 1200000) {
    incomeTax = (income - 600000) * 0.05;

  // 3rd slab: 1,200,001 – 2,200,000 → 15% + base 30,000
  } else if (income > 1200000 && income <= 2200000) {
    incomeTax = 30000 + (income - 1200000) * 0.15;

  // 4th slab: 2,200,001 – 3,200,000 → 25% + base 180,000
  } else if (income > 2200000 && income <= 3200000) {
    incomeTax = 180000 + (income - 2200000) * 0.25;

  // 5th slab: 3,200,001 – 4,100,000 → 30% + base 430,000
  } else if (income > 3200000 && income <= 4100000) {
    incomeTax = 430000 + (income - 3200000) * 0.30;

  // 6th slab: income > 4,100,000 → 35% + base 700,000
  } else {
    incomeTax = 700000 + (income - 4100000) * 0.35;
  }

  totalSpan.innerHTML = `Rs. ${incomeTax.toFixed(2)}`;
  window.location.hash = "modal"; // Show modal
}
