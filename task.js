function solveEquation(a, b, c) {
  let arr;
  let discriminant = b ** 2 - 4 * a * c; 
  
  if (discriminant = 0) {
	  let x = -b / (2 * a);
	 arr.push(x);
  } else if (discriminant > 0) {
	  let x1 = (-b + Math.sqrt(d)) / (2 * a);
	  let x2 = (-b - Math.sqrt(d)) / (2 * a);
	  arr.push(x1, x2);
  } else {
	  console.log('пустой массив')
  }
  return arr; // array
}

// 5,5 500000 5000000 01.01.2027 60months

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount; //Итого
  let ante = percent * 0.12; // 1/12 процентной ставки !!!

  let payment = amount * (ante + (ante / (((1 + ante) ** 60) - 1))); // ежемесечная оплата

  
  return totalAmount;
}