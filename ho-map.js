const radius = [1, 3, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

// console.log(radius.map(area));

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
