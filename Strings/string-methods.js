let username = "Shanmukh Kumar";

// trim()
console.log(username.trim());

// toUpperCase()
console.log(username.toUpperCase());

// toLowerCase()
console.log(username.toLowerCase());

// slice()
console.log(username.slice(0, 11));

// split()
console.log(username.split(" "));

let text = "JavaScript is awesome";

// length
console.log(text.length);

// includes
console.log(text.includes("JavaScript"));

// startsWith
console.log(text.startsWith("JavaScript"));

// endsWith
console.log(text.endsWith("awesome"));

// indexOf
console.log(text.indexOf("is"));

// replace
console.log(text.replace("awesome", "powerful"));

// repeat
console.log(text.repeat(2));

//Combining string methods
let username = "   Shanmukh Kumar   ";

let result = username.trim().toUpperCase();

console.log(result);

