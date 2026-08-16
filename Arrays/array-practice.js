let students = ["Rahul", "Shanmukh", "Akhil", "Kiran"];

console.log("Students:", students);

console.log("Number of students:", students.length);

students.push("Arjun");

console.log("After adding:", students);

students.pop();

console.log("After removing:", students);

for (let student of students) {
    console.log(student);
}

//Map
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(number => number * number);

console.log(squares);

//Filter
let marks = [45, 78, 92, 34, 88, 67];

let passed = marks.filter(mark => mark >= 40);

console.log(passed);