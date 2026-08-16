//Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a more concise way. The spread operator can also be used to create copies of objects or merge multiple objects together.
let student = {
    name: "Shanmukh",
    age: 20,
    college: "MGIT"
};

let { name, age, college } = student;

console.log(name);
console.log(age);
console.log(college);

//Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise way. The spread operator can also be used to create copies of arrays or merge multiple arrays together.
let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

//Spread with Arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let combined = [...numbers1, ...numbers2];

console.log(combined);

//Spread with Objects
let student = {
    name: "Shanmukh",
    age: 20
};

let updatedStudent = {
    ...student,
    college: "MGIT"
};

console.log(updatedStudent);