function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c; 
  
  if (discriminant === 0) {
	  let x = -b / (2 * a);
	 arr.push(x);
  } else if (discriminant > 0) {
	  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	  arr.push(x1, x2);
  };
  return arr; // array
}


function examination(percent, contribution, amount) {
  percent.toFixed(2);
  contribution.toFixed(2);
  amount.toFixed(2);
  Number.isNaN(percent);
  Number.isNaN(contribution);
  Number.isNaN(amount);
  parseInt(percent)
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let ante = percent * 0.12; // 1/12 процентной ставки !!!
 
  let currentMonth = new Date(window.date.value).getMonth();
  let currentYear = new Date(window.date.value).getFullYear();
  let numberMounths = currentYear * 12 - currentMonth + Date().getMonth();
  let payment = amount * (ante + (ante / (((1 + ante) ** numberMounths) - 1))); // ежемесячная оплата
  let totalAmount = numberMounths * payment; //Итого, общая сумма ипотеки
  let returnBank = totalAmount - contribution; // п.3 вернуть банку

  return totalAmount;
}

