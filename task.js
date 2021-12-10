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

// 5,5 500000 5000000 01.01.2027 60months

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = numberMounths * payment; //Итого, общая сумма ипотеки
  let ante = percent * 0.12; // 1/12 процентной ставки !!!

  let returnBank = totalAmount - contribution; // п.3 вернуть банку
  let payment = amount * (ante + (ante / (((1 + ante) ** numberMounths) - 1))); // ежемесячная оплата
  
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let numberMounths = currentYear * 12 - currentMonth + Date().getMonth();

  return totalAmount;
}