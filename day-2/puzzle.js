const fs = require('fs');
// const input = [1,1,1,4,99,5,6,0,99];
const input = [1,1,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0];

const getValue = i => input[input[i]];


for (var i = 0; i < input.length; i++) {
  var operator = input[i];
  if (operator === 1) {
    const res = getValue(i + 1) + getValue(i + 2);
    input[input[i + 3]] = res;
    i = i + 3;
    // +
  } else if (operator === 2) {
    const res = getValue(i + 1) * getValue(i + 2);
    input[input[i + 3]] = res;
    i = i + 3;
    // *
  } else if (operator === 99) {
    // console.log(input);
    break;
  }
}

// fs.writeFile('myjsonfile.json', JSON.stringify(input), () => {});
console.log(JSON.stringify(input));

// part 2
// console.log(calcs);
console.log(input[0]);
var nounWorth = 1028310 - 779478;
console.log('nounWorth', nounWorth);

var remaining = 19690720 - 779478;

var noun = Math.floor(remaining / nounWorth);
var verb = remaining - nounWorth * noun;

console.log('noun, verb', noun, verb);

console.log('sum', 100 * noun + verb);
