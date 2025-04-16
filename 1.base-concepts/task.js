"use strict";

function solveEquation (a, b, c) {
	let arr = [];
	let d = (b ** 2) - 4 * a * c;
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		let x1 = -b / (2 * a);
		arr.push(x1);
	}
	return arr;
}


function calculateTotalMortgage (percent, contribution, amount, countMonths) {
	let interestRate = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let months = countMonths;

	let monthsPay = creditBody * (interestRate + (interestRate / (((1 + interestRate) ** months) - 1)));
	let result = monthsPay * months;
	result.toFixed(2);
	return Number (result.toFixed(2));
}

