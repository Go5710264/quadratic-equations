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
  return arr;
}

// Калькулятор для расчёта выплат по ипотеке:

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
   
  const interestRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
 
  const monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** date) - 1)));
  
  const totalAmount = (monthlyPayment * date).toFixed(2);
  
  return Number(totalAmount);

}

