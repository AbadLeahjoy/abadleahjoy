
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const evenNumbers = arr.filter(number => number % 2 === 0);

const oddNumbers = arr.filter(number => number % 2 !== 0);


console.log("EVEN NUMBERS:");
evenNumbers.forEach(number => console.log(number));

console.log("ODD NUMBERS:");
oddNumbers.forEach(number => console.log(number));
