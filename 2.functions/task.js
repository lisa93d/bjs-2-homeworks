function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[0])
			max = arr[i];
		if (arr[i] < arr[0])
			min = arr[i];
		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	}

}
console.log(getArrayParams(-99, 99, 10));



function summElementsWorker(...arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      }
      return sum;
  }

function differenceMaxMinWorker(...arr) {
  
let min=Math.min (...arr);
let max=Math.max (...arr);
let difference = max-min;
return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
      countEvenElement += 1;
		} 
	}
	return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++){
  func(...arrOfArr);
  if (arrOfArr[i]>maxWorkerResult){
    maxWorkerResult = arrOfArr[i];
  }
  return maxWorkerResult;
}

}