let student = {
    name: "Shanmukh",
    age: 20,
    college: "MGIT",
    branch: "CSE"
};

console.log(student);

//Accessing the properties of an object
console.log(student.name);
console.log(student.age);
console.log(student.college);
console.log(student.branch);

//Modifying the properties of an object
student.age = 21;
console.log(student.age);

//Adding new properties to an object
student.cgpa = 8.2;

console.log(student);

//Deleting properties from an object
delete student.branch;

console.log(student);

//Object methods
let student = {
    name: "Shanmukh",
    age: 20,

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

student.greet();