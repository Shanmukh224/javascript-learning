let students = [
    { name: "Rahul", marks: 85, branch: "CSE" },
    { name: "Shanmukh", marks: 92, branch: "CSE" },
    { name: "Arjun", marks: 76, branch: "ECE" },
    { name: "Ravi", marks: 68, branch: "CSE" },
    { name: "Kiran", marks: 88, branch: "IT" }
];


// 1. Display all students

function displayStudents() {
    students.forEach(student => {
        console.log(`${student.name} - ${student.marks}`);
    });
}


// 2. Find the topper

function findTopper() {
    let topper = students.reduce((topStudent, student) => {
        if (student.marks > topStudent.marks) {
            return student;
        }

        return topStudent;
    });

    console.log(`Topper: ${topper.name} - ${topper.marks}`);
}


// 3. Find passed students

function getPassedStudents() {
    let passedStudents = students.filter(student => student.marks >= 40);

    console.log("Passed Students:");

    passedStudents.forEach(student => {
        console.log(student.name);
    });
}


// 4. Calculate average marks

function calculateAverage() {
    let totalMarks = students.reduce((sum, student) => {
        return sum + student.marks;
    }, 0);

    let average = totalMarks / students.length;

    console.log(`Average Marks: ${average}`);
}


// Run the functions

displayStudents();

console.log("----------------");

findTopper();

console.log("----------------");

getPassedStudents();

console.log("----------------");

calculateAverage();