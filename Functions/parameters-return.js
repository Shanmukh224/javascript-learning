//Parameters
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Shanmukh");
greet("Rahul");

//Multiple parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);

//Return statement
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

//Example
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(10, 5);

console.log(area);