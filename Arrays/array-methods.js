let numbers = [1, 2, 3, 4, 5];
//Push
numbers.push(6);
console.log(numbers);

//Pop 
numbers.pop();
console.log(numbers);

//Shift
numbers.shift();
console.log(numbers);

//Unshift
numbers.unshift(0);
console.log(numbers);

//Slice
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);

//Splice
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);

//ForEach
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

//Map
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

//Filter
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

//Find
let numbers = [10, 20, 30, 40];

let result = numbers.find(function(number) {
    return number > 25;
});

console.log(result);

//Reduce
let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);

//Modern arrow function 
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(number => number * 2);

let evenNumbers = numbers.filter(number => number % 2 === 0);

let total = numbers.reduce((sum, number) => sum + number, 0);

console.log(doubled);
console.log(evenNumbers);
console.log(total);