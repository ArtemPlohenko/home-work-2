/** @format */

// 1
let a = 1,
  b = 2,
  c = 3;

console.log(a < b < c);

// 2
let x = 1;
let y = 2;

let res1 = x + String(y);
console.log(res1);
console.log(typeof res1);
//
let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);
//
let res3 = Boolean(x) == Boolean(y);
console.log(res3);
console.log(typeof res3);
//
let res4 = x / y;
console.log(res4);
console.log(typeof res4);

// 3
let isAdult = prompt("Do you have reached the age of majority?", "");

if (isAdult >= 18) {
  console.log("You have reached the age of majority");
} else {
  console.log("You are still too young");
}

// 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let num;
let data = 0;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    num = arr[i];
    data++;
  }
}
console.log(`The most number in the array ${num} it is equal to ${data}`);

for (let k = 0; k < arr.length; k++) {
  if (arr[k] === 5) {
    continue;
  }
  newArr += arr[k];
}
console.log(newArr);

// 5
let side1 = +prompt("Enter the length of the first side of the triangle:", "");
let side2 = +prompt("Enter the length of the second side of the triangle:", "");
let side3 = +prompt("Enter the length of the third side of the triangle:", "");
let newParameter;

if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  console.log(`Incorrect data`);
} else {
  let parameter = (side1 + side2 + side3) / 2;

  newParameter = Math.sqrt(
    parameter * (parameter - side1) * (parameter - side2) * (parameter - side3)
  );
  newParameter = newParameter.toFixed(3);

  // "Прямокутний трикутник. Теорема Піфагора" - AB2 = AC2 + BC2; // BC2 = AB2 + AC2; // AC2 = AB2 + BC2;

  let paramTriangle;
  if (
    side1 * side1 + side2 * side2 === side3 * side3 ||
    side1 * side1 + side3 * side3 === side2 * side2 ||
    side2 * side2 + side3 * side3 === side1 * side1
  ) {
    paramTriangle = true;
  } else {
    paramTriangle = false;
  }

  console.log("Area of the triangle: " + newParameter);
  console.log(`A triangle is right-angled: ${paramTriangle}`);
}

// 6
function calc(a, b, op) {
  let result;

  if (op == 1) {
    result = a - b;
  } else if (op == 2) {
    result = a * b;
  } else if (op == 3) {
    result = a / b;
  } else {
    result = a + b;
  }

  return result;
}

console.log(calc(5, 3, 1));
console.log(calc(5, 3, 2));
console.log(calc(6, 2, 3));
console.log(calc(5, 3, 4));

// 7
