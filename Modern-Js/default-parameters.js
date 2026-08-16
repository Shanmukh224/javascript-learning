function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Shanmukh");
greet();

function calculatePrice(price, tax = 18) {
    return price + (price * tax / 100);
}

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 10));