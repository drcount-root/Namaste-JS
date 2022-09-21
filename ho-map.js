const radius = [1, 3, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

console.log("---------- using built-in map()----------");
console.log(radius.map(area));
//
//
//
//
// Own map() func
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log("---------- using own map()----------");
console.log(radius.calculate(area));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  map()

console.log("\n---------- using map()----------");

const arr = [5, 1, 3, 2, 6];

const cbDouble = (param) => param * 2;
const resultArr = arr.map(cbDouble);
console.log(resultArr);

const doub = arr.map((i) => i * 2);
console.log(doub);

const binary = arr.map((b) => b.toString(2));
console.log(binary);

//
//
//
//
//
//
//
//
//
//
//  filter()

console.log("\n---------- using filter()----------");

const arrF = [3, 1, 4, 5, 2];
const resArr = arrF.filter((i) => i % 2 !== 0);

console.log(resArr);

//
//
//
//
//
//
//
//
//
//
//  reduce()

console.log("\n---------- using reduce()----------");

const arrR = [3, 1, 4, 5, 2];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arrR));
//
//
//
const out = arrR.reduce((acc, curr) => acc + curr);

console.log(out);

//
//
//
//
//
//
//

// Max value from an array using reduce

const arrX = [2, -5, 99, 12, 46];

const findMax = arrX => {
  let max = arrX[0];
  for(let i = 1; i < arrX.length; i++){
    if(arrX[i] > max) max = arrX[i];    
  }
  return max;
}

console.log(findMax(arrX));